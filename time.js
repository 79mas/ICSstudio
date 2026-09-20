/* Duration arithmetic shared by the form and tests. */
(function(root){
'use strict';
const calendar=typeof module!=='undefined'?require('./calendar.js'):root.ICS;
function minutes(value,unit,alarm=false){
 const n=Number(value),u=Number(unit),result=n*u;
 if(String(value).trim()===''||![1,60,1440].includes(u)||!Number.isFinite(result)||Math.abs(result-Math.round(result))>1e-7||result<(alarm?0:1)||(alarm&&result>40320))throw Error(alarm?'alarm':'duration');
 return Math.round(result);
}
function parts(date,zone){
 const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(date).map(p=>[p.type,p.value]));
 return {date:`${p.year}-${p.month}-${p.day}`,time:`${p.hour}:${p.minute}`};
}
function end(date,time,zone,duration){
 const start=calendar.toUTC(date+'T'+time,zone),instant=new Date(+start+duration*60000);
 if(!Number.isFinite(+instant))throw Error('date');
 const result=parts(instant,zone);
 if(+calendar.toUTC(result.date+'T'+result.time,zone)!==+instant)throw Error('ambiguous');
 return result;
}
function difference(sd,st,ed,et,zone){const n=(calendar.toUTC(ed+'T'+et,zone)-calendar.toUTC(sd+'T'+st,zone))/60000;if(n<=0)throw Error('end');return n;}
function dateMs(date){if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||date<'2007-01-01'||date>'2099-12-31')throw Error('date');const ms=Date.parse(date+'T00:00:00Z');if(!Number.isFinite(ms)||new Date(ms).toISOString().slice(0,10)!==date)throw Error('date');return ms;}
function dayEnd(date,days){if(!Number.isInteger(days)||days<1)throw Error('duration');const result=new Date(dateMs(date)+(days-1)*86400000);if(!Number.isFinite(+result))throw Error('date');const s=result.toISOString().slice(0,10);dateMs(s);return s;}
function days(start,end){const n=(dateMs(end)-dateMs(start))/86400000+1;if(n<1)throw Error('end');return n;}
function nextHour(after,zone){const c=new Date(after);c.setUTCMinutes(0,0,0);for(let i=0;i<6;i++){c.setUTCHours(c.getUTCHours()+1);const result=parts(c,zone),instant=calendar.toUTC(result.date+'T'+result.time,zone);if(instant>after)return {...result,instant};}throw Error('date');}
root.TimeTools={minutes,parts,end,difference,dayEnd,days,nextHour};if(typeof module!=='undefined')module.exports=root.TimeTools;
})(typeof window!=='undefined'?window:globalThis);
