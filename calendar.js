/* iCalendar serialization. No network or third-party dependencies. */
(function(root){
'use strict';
const zones={
 'Europe/Vilnius':[120,180,'EU'], 'Europe/Riga':[120,180,'EU'], 'Europe/Tallinn':[120,180,'EU'],
 'Europe/Warsaw':[60,120,'EU'], 'Europe/Berlin':[60,120,'EU'], 'Europe/Paris':[60,120,'EU'],
 'Europe/London':[0,60,'EU'], 'America/New_York':[-300,-240,'US'], 'America/Los_Angeles':[-480,-420,'US'], 'UTC':[0,0,'FIXED']
};
const pad=n=>String(n).padStart(2,'0');
const stamp=d=>d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
const compact=s=>s.replace(/[-:]/g,'')+(s.includes('T')?'00':'');
const escapeText=s=>String(s||'').replace(/\\/g,'\\\\').replace(/\r\n|\r|\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');
function fold(line){let out='',part='',size=0;for(const c of line){const n=new TextEncoder().encode(c).length;if(size+n>75){out+=part+'\r\n';part=' ';size=1;}part+=c;size+=n;}return out+part;}
function validDate(s){if(!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T00:00:00Z');return Number.isFinite(+d)&&d.toISOString().slice(0,10)===s&&s>='2007-01-01'&&s<='2099-12-31';}
function dayAfter(s){const d=new Date(s+'T00:00:00Z');d.setUTCDate(d.getUTCDate()+1);return d.toISOString().slice(0,10);}
function localParts(ms,zone){const p=new Intl.DateTimeFormat('en-GB',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).formatToParts(new Date(ms));const v=Object.fromEntries(p.map(x=>[x.type,x.value]));return `${v.year}-${v.month}-${v.day}T${v.hour}:${v.minute}`;}
function toUTC(s,zone){
 if(!zones[zone]||!validDate(s.slice(0,10))||!/^\d{4}-\d{2}-\d{2}T(?:[01]\d|2[0-3]):[0-5]\d$/.test(s))throw Error('date');
 const base=Date.parse(s+':00Z');const offsets=[...new Set(zones[zone].slice(0,2))];
 const matches=offsets.map(m=>base-m*60000).filter(ms=>localParts(ms,zone)===s).sort((a,b)=>a-b);
 if(!matches.length)throw Error('dst');
 // RFC 5545: the first occurrence is used when a local clock time occurs twice.
 return new Date(matches[0]);
}
const offset=n=>(n<0?'-':'+')+pad(Math.floor(Math.abs(n)/60))+pad(Math.abs(n)%60);
function timezone(zone){if(zone==='UTC')return [];const [standard,summer,region]=zones[zone];const eu=region==='EU';return ['BEGIN:VTIMEZONE','TZID:'+zone,
 'BEGIN:DAYLIGHT',`DTSTART:200703${eu?'25':'11'}T${pad(eu?1+standard/60:2)}0000`,'TZOFFSETFROM:'+offset(standard),'TZOFFSETTO:'+offset(summer),`RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=${eu?'-1':'2'}SU`,'END:DAYLIGHT',
 'BEGIN:STANDARD',`DTSTART:2007${eu?'1028':'1104'}T${pad(eu?1+summer/60:2)}0000`,'TZOFFSETFROM:'+offset(summer),'TZOFFSETTO:'+offset(standard),`RRULE:FREQ=YEARLY;BYMONTH=${eu?'10':'11'};BYDAY=${eu?'-1':'1'}SU`,'END:STANDARD','END:VTIMEZONE'];}
function email(s){return /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,}$/.test(s);}
function build(e){
 if(!e.title||!e.title.trim())throw Error('title');
 if(!validDate(e.startDate)||!validDate(e.endDate))throw Error('date');
 let start,end;
 if(e.allDay){if(e.endDate<e.startDate)throw Error('end');start=e.startDate;end=dayAfter(e.endDate);}
 else{start=toUTC(e.startDate+'T'+e.startTime,e.zone);end=toUTC(e.endDate+'T'+e.endTime,e.zone);if(end<=start)throw Error('end');}
 const advanced=e.advanced;const repeating=advanced&&e.frequency;
 const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//ICS Studio//Calendar Generator 1.0//EN','CALSCALE:GREGORIAN'];
 if(!e.allDay&&repeating)lines.push(...timezone(e.zone));
 lines.push('BEGIN:VEVENT','UID:'+(e.uid||crypto.randomUUID()+'@ics-studio'),'DTSTAMP:'+stamp(e.now||new Date()),'SUMMARY:'+escapeText(e.title.trim()));
 if(e.allDay)lines.push('DTSTART;VALUE=DATE:'+compact(start),'DTEND;VALUE=DATE:'+compact(end));
 else if(repeating&&e.zone!=='UTC')lines.push(`DTSTART;TZID=${e.zone}:`+compact(e.startDate+'T'+e.startTime),`DTEND;TZID=${e.zone}:`+compact(e.endDate+'T'+e.endTime));
 else lines.push('DTSTART:'+stamp(start),'DTEND:'+stamp(end));
 if(e.description)lines.push('DESCRIPTION:'+escapeText(e.description));if(e.location)lines.push('LOCATION:'+escapeText(e.location));
 if(e.url){let u;try{u=new URL(e.url);}catch{throw Error('url');}if(!['https:','http:'].includes(u.protocol))throw Error('url');lines.push('URL:'+u.href);}
 if(advanced){
  if(repeating){if(!['DAILY','WEEKLY','MONTHLY','YEARLY'].includes(e.frequency))throw Error('repeat');
   const interval=Number(e.interval);if(!Number.isInteger(interval)||interval<1||interval>999)throw Error('repeat');
   let rule=`FREQ=${e.frequency};INTERVAL=${interval}`;
   if(e.frequency==='WEEKLY'&&e.weekdays?.length){if(e.weekdays.some(d=>!['MO','TU','WE','TH','FR','SA','SU'].includes(d)))throw Error('repeat');const day=['SU','MO','TU','WE','TH','FR','SA'][new Date(e.startDate+'T12:00:00Z').getUTCDay()];if(!e.weekdays.includes(day))throw Error('weekday');rule+=';BYDAY='+e.weekdays.join(',');}
   if(e.repeatEnd==='count'){const n=Number(e.count);if(!Number.isInteger(n)||n<1||n>999)throw Error('repeat');rule+=';COUNT='+n;}
   else if(e.repeatEnd==='until'){if(!validDate(e.until)||e.until<e.startDate)throw Error('until');rule+=';UNTIL='+(e.allDay?compact(e.until):stamp(toUTC(e.until+'T23:59',e.zone)));}
   else if(e.repeatEnd!=='never')throw Error('repeat');
   lines.push('RRULE:'+rule);
  }
  if(e.organizer){if(!email(e.organizer))throw Error('email');lines.push('ORGANIZER:mailto:'+e.organizer);}
  const attendees=[...new Set((e.attendees||'').split(/[\s,;]+/).filter(Boolean))];for(const a of attendees){if(!email(a))throw Error('email');lines.push('ATTENDEE;ROLE=REQ-PARTICIPANT:mailto:'+a);}
  if(['PUBLIC','PRIVATE','CONFIDENTIAL'].includes(e.privacy))lines.push('CLASS:'+e.privacy);
  if(['OPAQUE','TRANSPARENT'].includes(e.busy))lines.push('TRANSP:'+e.busy);
  if(['CONFIRMED','TENTATIVE','CANCELLED'].includes(e.status))lines.push('STATUS:'+e.status);
 }
 const alarms=[e.reminder,...(advanced?(e.extraReminders||[]):[])].filter(x=>x!==''&&x!==undefined&&x!==null);
 for(const m of new Set(alarms.map(Number))){if(!Number.isInteger(m)||m<0||m>40320)throw Error('alarm');lines.push('BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:'+escapeText(e.title.trim()),'TRIGGER:'+(m===0?'PT0S':`-PT${m}M`),'END:VALARM');}
 lines.push('END:VEVENT','END:VCALENDAR');return lines.map(fold).join('\r\n')+'\r\n';
}
root.ICS={build,zones,toUTC,fold,escapeText,dayAfter};if(typeof module!=='undefined')module.exports=root.ICS;
})(typeof window!=='undefined'?window:globalThis);
