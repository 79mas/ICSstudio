'use strict';

const $ = id => document.getElementById(id);

const words = {
  eyebrow: ['Jūsų laikas. Jūsų planai.', 'Your time. Your plans.'],
  heading: ['Įvykis prasideda čia.', 'An event starts here.'],
  intro: [
    'Užpildykite detales. Atsisiųskite įvykį į savo kalendorių.',
    'Add the details. Download an event for your calendar.'
  ],
  details: ['Įvykio detalės', 'Event details'],
  title: ['Pavadinimas *', 'Title *'],
  titlePlaceholder: [
    'Pvz., savaitgalio pasivažinėjimas',
    'E.g. weekend ride'
  ],
  description: ['Aprašymas', 'Description'],
  descriptionPlaceholder: [
    'Planas, pastabos ar kita svarbi informacija',
    'Plans, notes or anything worth remembering'
  ],
  location: ['Vieta', 'Location'],
  locationPlaceholder: [
    'Adresas arba susitikimo vieta',
    'Address or meeting point'
  ],
  url: ['Susitikimo / įvykio nuoroda', 'Meeting / event link'],
  when: ['Data ir laikas', 'Date & time'],
  allDay: ['Visą dieną', 'All day'],
  start: ['Pradžia *', 'Start *'],
  end: ['Pabaiga *', 'End *'],
  startTime: ['Pradžios laikas', 'Start time'],
  endTime: ['Pabaigos laikas', 'End time'],
  allDayHint: [
    'Įtraukiama ir pasirinkta paskutinė diena.',
    'The selected final day is included.'
  ],
  zone: ['Laiko juosta', 'Time zone'],
  reminder: ['Priminimas', 'Reminder'],
  none: ['Be priminimo', 'No reminder'],
  atStart: ['Prasidėjus', 'At start'],
  m5: ['Prieš 5 min.', '5 minutes before'],
  m15: ['Prieš 15 min.', '15 minutes before'],
  m30: ['Prieš 30 min.', '30 minutes before'],
  h1: ['Prieš 1 val.', '1 hour before'],
  d1: ['Prieš 1 dieną', '1 day before'],
  advanced: ['/ išplėstinės parinktys', '/ more options'],
  frequency: ['Pasikartojimas', 'Repeat'],
  once: ['Nesikartoja', 'Does not repeat'],
  daily: ['Kasdien', 'Daily'],
  weekly: ['Kas savaitę', 'Weekly'],
  monthly: ['Kas mėnesį', 'Monthly'],
  yearly: ['Kasmet', 'Yearly'],
  interval: ['Kas kiek periodų', 'Every how many periods'],
  intervalHint: [
    'Pvz., „Kas savaitę“ + 2 = kas dvi savaites.',
    'E.g. Weekly + 2 = every two weeks.'
  ],
  repeatEnd: ['Kartojimo pabaiga', 'Ends'],
  never: ['Nesibaigia', 'Never'],
  afterCount: [
    'Po nurodyto kartų skaičiaus',
    'After a number of occurrences'
  ],
  untilDate: ['Nurodytą dieną', 'On a date'],
  count: [
    'Kartų skaičius (su pirmuoju)',
    'Occurrences (including the first)'
  ],
  until: ['Iki datos imtinai', 'Through this date'],
  weekdays: ['Savaitės dienos', 'Days of the week'],
  mo: ['Pr', 'Mon'],
  tu: ['An', 'Tue'],
  we: ['Tr', 'Wed'],
  th: ['Kt', 'Thu'],
  fr: ['Pn', 'Fri'],
  sa: ['Št', 'Sat'],
  su: ['Sk', 'Sun'],
  weekdayHint: [
    'Nepasirinkus dienų, kartojama pradžios savaitės dieną. Pasirinkus dienas, įtraukite ir pradžios dieną.',
    'Leave blank to use the start weekday. If selecting days, include the start weekday.'
  ],
  monthHint: [
    'Jeigu mėnesyje nėra pasirinktos dienos (pvz., 31-osios), tas mėnuo praleidžiamas. Vasario 29-oji kasmet kartojama tik keliamaisiais metais.',
    'Months without the selected day (e.g. the 31st) are skipped. A yearly February 29 event occurs only in leap years.'
  ],
  organizer: ['Organizatoriaus el. paštas', 'Organizer email'],
  attendees: ['Dalyvių el. paštai', 'Attendee emails'],
  attendeeHint: [
    'Atskirkite kableliu arba nauja eilute. Kvietimai el. paštu nesiunčiami.',
    'Separate with commas or new lines. No email invitations are sent.'
  ],
  privacy: ['Privatumas', 'Privacy'],
  public: ['Viešas', 'Public'],
  private: ['Privatus', 'Private'],
  confidential: ['Konfidencialus', 'Confidential'],
  busy: ['Rodyti kaip', 'Show as'],
  busyValue: ['Užimtas', 'Busy'],
  freeValue: ['Laisvas', 'Free'],
  status: ['Įvykio būsena', 'Event status'],
  confirmed: ['Patvirtintas', 'Confirmed'],
  tentative: ['Preliminarus', 'Tentative'],
  extraReminders: ['Papildomi priminimai', 'Additional reminders'],
  addReminder: ['+ Pridėti priminimą', '+ Add reminder'],
  alarmHint: [
    'Minutėmis iki pradžios (0–40 320). Kalendoriaus programa gali taikyti savo priminimų taisykles. Visos dienos įvykiams skaičiuojama nuo vidurnakčio.',
    'Minutes before start (0–40,320). Calendar apps may apply their own reminder rules. All-day reminders are relative to midnight.'
  ],
  privateHint: [
    '„Privatus“ yra kalendoriaus žyma, ne failo apsauga. Failą gavęs žmogus gali perskaityti jo turinį.',
    '“Private” is a calendar label, not file protection. Anyone with the file can read it.'
  ],
  preview: ['Įvykio peržiūra', 'Event preview'],
  download: ['Atsisiųsti .ics', 'Download .ics'],
  localNote: [
    'Įvykio duomenys lieka jūsų naršyklėje. Jokios paskyros. Jokio siuntimo į serverį.',
    'Your event stays in your browser. No account. No data sent to a server.'
  ],
  footer: ['Vienas failas. Jūsų kalendoriuje.', 'One file. In your calendar.'],
  newEvent: ['Naujas įvykis', 'New event'],
  remove: ['Pašalinti priminimą', 'Remove reminder'],
  minutes: ['Minutės iki pradžios', 'Minutes before start'],
  success: [
    'Failas paruoštas ir perduotas naršyklei atsisiųsti.',
    'File prepared and sent to your browser for download.'
  ],
  error_title: [
    'Įrašykite įvykio pavadinimą.',
    'Enter an event title.'
  ],
  error_date: [
    'Patikrinkite datą ir laiką. Palaikomos 2007–2099 metų datos.',
    'Check the date and time. Supported dates: 2007–2099.'
  ],
  error_end: [
    'Pabaiga turi būti vėliau už pradžią. Visos dienos įvykio datos gali sutapti.',
    'End must be after start. All-day events can start and end on the same date.'
  ],
  error_dst: [
    'Pasirinkto vietinio laiko nėra dėl laikrodžių persukimo. Pasirinkite kitą valandą.',
    'This local time does not exist because clocks move forward. Choose another time.'
  ],
  error_url: [
    'Nuoroda turi prasidėti https:// arba http://.',
    'The link must start with https:// or http://.'
  ],
  error_repeat: [
    'Patikrinkite kartojimo intervalą ir kartų skaičių (1–999).',
    'Check the recurrence interval and occurrence count (1–999).'
  ],
  error_weekday: [
    'Į kartojimo dienas įtraukite įvykio pradžios savaitės dieną arba pakeiskite pradžios datą.',
    'Include the event’s start weekday in the repeat days, or change the start date.'
  ],
  error_until: [
    'Kartojimo pabaigos data negali būti ankstesnė už pradžią.',
    'The repeat end date cannot be before the event starts.'
  ],
  error_email: [
    'Patikrinkite organizatoriaus ir dalyvių el. pašto adresus.',
    'Check organizer and attendee email addresses.'
  ],
  error_alarm: [
    'Priminimai turi būti sveiki skaičiai nuo 0 iki 40 320 minučių.',
    'Reminders must be whole numbers from 0 to 40,320 minutes.'
  ],
  error_unknown: [
    'Nepavyko sukurti failo. Patikrinkite įvestus duomenis.',
    'Could not create the file. Check your entries.'
  ],
  extraCount: ['papildomų', 'additional'],
  periods: ['intervalas', 'interval'],
  occurrences: ['kartų', 'occurrences']
};

// Kalbos nustatymai.
let lang = 'lt';

try {
  lang = localStorage.getItem('ics-language') === 'en' ? 'en' : 'lt';
} catch {}

const t = key => words[key]?.[lang === 'lt' ? 0 : 1] || key;

function language(next) {
  lang = next;

  document.documentElement.lang = lang;
  document.title =
    'ICS Studio — ' +
    (lang === 'lt' ? 'Kalendoriaus įvykis' : 'Calendar event');

  document.querySelectorAll('[data-t]').forEach(el => {
    el.textContent = t(el.dataset.t);
  });

  document.querySelectorAll('[data-p]').forEach(el => {
    el.placeholder = t(el.dataset.p);
  });

  document.querySelectorAll('[data-a]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.a));
  });

  document.querySelectorAll('[data-lang]').forEach(el => {
    el.setAttribute('aria-pressed', String(el.dataset.lang === lang));
  });

  try {
    localStorage.setItem('ics-language', lang);
  } catch {}

  $('feedback').textContent = '';
  preview();
}

// Formos duomenų nuskaitymas.
function read() {
  const event = {};

  const fields = [
    'title',
    'description',
    'location',
    'url',
    'startDate',
    'endDate',
    'startTime',
    'endTime',
    'zone',
    'reminder',
    'frequency',
    'interval',
    'repeatEnd',
    'count',
    'until',
    'organizer',
    'attendees',
    'privacy',
    'busy',
    'status'
  ];

  for (const id of fields) {
    event[id] = $(id).value.trim();
  }

  event.allDay = $('allDay').checked;
  event.advanced = $('advanced').checked;

  event.weekdays = [
    ...document.querySelectorAll('[name=weekday]:checked')
  ].map(el => el.value);

  event.extraReminders = [
    ...document.querySelectorAll('.extra-alarm')
  ].map(el => el.value);

  return event;
}

// Laukų rodymas pagal pasirinktą režimą.
function visibility() {
  const advanced = $('advanced').checked;
  const allDay = $('allDay').checked;
  const frequency = $('frequency').value;
  const repeating = advanced && !!frequency;

  $('advancedFields').hidden = !advanced;
  $('advancedFields').disabled = !advanced;
  $('advanced').setAttribute('aria-expanded', String(advanced));

  for (const id of ['startTime', 'endTime']) {
    $(id).hidden = allDay;
    $(id).disabled = allDay;
  }

  $('zoneField').hidden = allDay;
  $('allDayHint').hidden = !allDay;

  $('repeatFields').hidden = !repeating;
  $('interval').disabled = !repeating;
  $('repeatEnd').disabled = !repeating;

  const conditionalFields = [
    ['count', repeating && $('repeatEnd').value === 'count'],
    ['until', repeating && $('repeatEnd').value === 'until']
  ];

  for (const [id, active] of conditionalFields) {
    $(id + 'Field').hidden = !active;
    $(id).disabled = !active;
  }

  const weekly = repeating && frequency === 'WEEKLY';

  $('weekField').hidden = !weekly;
  $('weekField').disabled = !weekly;

  $('monthHint').hidden = !(
    repeating && ['MONTHLY', 'YEARLY'].includes(frequency)
  );
}

// Datos formatavimas peržiūrai.
function dateLabel(value, options = {}) {
  if (!value) return '—';

  const date = new Date(value + 'T12:00:00Z');

  if (!Number.isFinite(+date)) return '—';

  return new Intl.DateTimeFormat(
    lang === 'lt' ? 'lt-LT' : 'en-GB',
    {
      timeZone: 'UTC',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      ...options
    }
  ).format(date);
}

// Įvykio peržiūros atnaujinimas.
function preview() {
  const event = read();

  $('previewTitle').textContent = event.title || t('newEvent');
  $('previewDay').textContent = event.startDate
    ? event.startDate.slice(-2)
    : '—';

  $('previewMonth').textContent = event.startDate
    ? new Intl.DateTimeFormat(
        lang === 'lt' ? 'lt-LT' : 'en-GB',
        {
          month: 'short',
          timeZone: 'UTC'
        }
      ).format(new Date(event.startDate + 'T12:00:00Z'))
    : '—';

  if (event.allDay) {
    const endLabel = event.startDate !== event.endDate
      ? ' — ' + dateLabel(event.endDate)
      : '';

    $('previewWhen').textContent =
      `${dateLabel(event.startDate)}${endLabel} · ${t('allDay')}`;
  } else {
    const endDateLabel = event.startDate !== event.endDate
      ? dateLabel(event.endDate) + ' · '
      : '';

    $('previewWhen').textContent =
      `${dateLabel(event.startDate)} · ${event.startTime || '—'}` +
      ` — ${endDateLabel}${event.endTime || '—'}`;
  }

  $('previewZoneRow').hidden = event.allDay;
  $('previewZone').textContent = event.zone;

  $('previewLocationRow').hidden = !event.location;
  $('previewLocation').textContent = event.location;

  $('previewRepeatRow').hidden = !(
    event.advanced && event.frequency
  );

  let repeatText = $('frequency').selectedOptions[0].textContent;

  if (Number(event.interval) > 1) {
    repeatText += ` · ${t('periods')} ${event.interval}`;
  }

  if (event.repeatEnd === 'count') {
    repeatText += ` · ${event.count} ${t('occurrences')}`;
  } else if (event.repeatEnd === 'until') {
    repeatText += ` · ${t('until')} ${dateLabel(event.until)}`;
  }

  $('previewRepeat').textContent = repeatText;

  const extra = event.advanced ? event.extraReminders.length : 0;

  $('previewReminder').textContent =
    $('reminder').selectedOptions[0].textContent +
    (extra ? ` + ${extra} ${t('extraCount')}` : '');
}

// Formos pakeitimai.
$('event-form').addEventListener('input', () => {
  $('feedback').textContent = '';
  visibility();
  preview();
});

$('event-form').addEventListener('change', () => {
  visibility();
  preview();
});

// Kalbos perjungimas.
document.querySelectorAll('[data-lang]').forEach(el => {
  el.addEventListener('click', () => {
    language(el.dataset.lang);
  });
});

// Papildomų priminimų pridėjimas.
$('addReminder').addEventListener('click', () => {
  const row = document.createElement('div');
  row.className = 'alarm-row';

  const input = document.createElement('input');
  input.type = 'number';
  input.min = '0';
  input.max = '40320';
  input.value = '60';
  input.required = true;
  input.className = 'extra-alarm';
  input.dataset.a = 'minutes';
  input.setAttribute('aria-label', t('minutes'));

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'subbutton';
  remove.textContent = '×';
  remove.dataset.a = 'remove';
  remove.setAttribute('aria-label', t('remove'));

  remove.addEventListener('click', () => {
    row.remove();
    preview();
    $('addReminder').focus();
  });

  row.append(input, remove);
  $('reminders').append(row);

  input.focus();
  preview();
});

// .ics failo generavimas ir atsisiuntimas.
$('event-form').addEventListener('submit', event => {
  event.preventDefault();

  const data = read();

  try {
    const content = ICS.build(data);

    const blob = new Blob([content], {
      type: 'text/calendar;charset=utf-8'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    const filename = data.title
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 80) || 'event';

    link.href = url;
    link.download = filename + '.ics';

    document.body.append(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 30000);

    $('feedback').className = 'feedback success';
    $('feedback').textContent = t('success');
  } catch (error) {
    const errorKey = 'error_' + error.message;

    $('feedback').className = 'feedback error';
    $('feedback').textContent = t(
      words[errorKey] ? errorKey : 'error_unknown'
    );
  }
});

// Artimiausia būsima pilna valanda pasirinktoje laiko juostoje.
// Naudojamos šio projekto laiko juostos su pilnų valandų UTC poslinkiais.
function nextFullHour(after) {
  const candidate = new Date(after);
  candidate.setUTCMinutes(0, 0, 0);

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: $('zone').value,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  });

  while (true) {
    candidate.setUTCHours(candidate.getUTCHours() + 1);

    const parts = Object.fromEntries(
      formatter.formatToParts(candidate).map(part => [
        part.type,
        part.value
      ])
    );

    const date = `${parts.year}-${parts.month}-${parts.day}`;
    const time = `${parts.hour}:00`;

    const instant = ICS.toUTC(
      `${date}T${time}`,
      $('zone').value
    );

    // Persukant laikrodį atgal, nepasirenkamas jau praėjęs laikas.
    if (instant > after) {
      return { date, time, instant };
    }
  }
}

// Pradinės reikšmės nustatomos kiekvieną kartą įkėlus puslapį.
const defaultStart = nextFullHour(new Date());
const defaultEnd = nextFullHour(defaultStart.instant);

$('startDate').value = defaultStart.date;
$('startTime').value = defaultStart.time;

$('endDate').value = defaultEnd.date;
$('endTime').value = defaultEnd.time;

$('until').value = defaultStart.date;

visibility();
language(lang);
