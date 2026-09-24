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
    'Patikrinkite kartojimo intervalą ir kartų skaičių (intervalas 1–999; kartų iki 1000).',
    'Check the interval (1–999) and occurrence count (up to 1,000).'
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

Object.assign(words, {
  duration: ['Renginio trukmė', 'Event duration'],
  durationUnit: ['Trukmės vienetas', 'Duration unit'],
  unitMinutes: ['Minutės', 'Minutes'],
  unitHours: ['Valandos', 'Hours'],
  unitDays: ['Dienos', 'Days'],
  durationHint: [
    'Pradžia + trukmė = pabaiga. Pabaigą galite keisti rankiniu būdu — trukmė persiskaičiuos.',
    'Start + duration = end. You can edit the end manually — the duration will update.'
  ],
  durationDayHint: [
    'Visos dienos įvykių trukmė skaičiuojama kalendorinėmis dienomis. Paskutinė diena įtraukiama.',
    'All-day duration is measured in calendar days. The final day is included.'
  ],
  remindersHeading: ['Priminimai', 'Reminders'],
  reminderAmount: ['Kiek laiko prieš pradžią', 'How long before start'],
  reminderUnit: ['Priminimo laiko vienetas', 'Reminder unit'],
  alarmHint: [
    'Kiek laiko prieš pradžią priminti? Pasirinkite minutes, valandas arba dienas. 0 reiškia prasidėjus. Iki 28 dienų. Visos dienos įvykiams skaičiuojama nuo vidurnakčio.',
    'Choose minutes, hours or days before start. 0 means at start. Up to 28 days. All-day reminders are relative to midnight.'
  ],
  error_duration: [
    'Įveskite teigiamą trukmę, atitinkančią sveiką minučių skaičių. Visos dienos įvykiams — sveiką dienų skaičių.',
    'Enter a positive duration equal to a whole number of minutes. For all-day events, use whole days.'
  ],
  error_ambiguous: [
    'Pabaiga patenka į antrą pasikartojančios valandos dalį persukant laikrodį. Pakeiskite trukmę arba pabaigą.',
    'The end falls in the second occurrence of a repeated clock hour. Change the duration or end time.'
  ],
  error_alarm: [
    'Priminimas turi atitikti sveiką minučių skaičių nuo 0 iki 40 320 (28 dienų).',
    'A reminder must equal a whole number of minutes from 0 to 40,320 (28 days).'
  ]
});

Object.assign(words, {
  localNote: [
    'Tekstas ir failai apdorojami be AI naršyklėje. Nuorodos skaitomos per paslaugą; Google duomenys perduodami tik naudojant integraciją.',
    'Text and files are processed without AI in your browser. URLs use a reader service; Google receives data only when you use the integration.'
  ],
  attendeeHint: [
    'Atskirkite kableliu arba nauja eilute. .ics atsisiuntimas kvietimų nesiunčia. Google įrašymas gali juos išsiųsti tik jums patvirtinus.',
    'Separate with commas or new lines. Downloading .ics sends no invitations. Google saves can send them after your confirmation.'
  ],
  error_review: [
    'Pirmiausia patikrinkite duomenis ir pažymėkite patikros varnelę.',
    'Check the details and tick the review checkbox first.'
  ],
  error_horizon: [
    'Serija turi tilpti į 5 metus; patikrinkite pabaigą ir kartų skaičių.',
    'The series must fit within 5 years; check the end and count.'
  ],
  error_limit: [
    'Daugiau nei 1000 įvykių. Sutrumpinkite seriją.',
    'More than 1,000 events. Shorten the series.'
  ],
  error_lastday: [
    'Paskutinės mėnesio dienos taisyklei pradžios datą nustatykite į paskutinę mėnesio dieną.',
    'For the last-day rule, set the start date to the last day of a month.'
  ],
  error_exceptions: [
    'Išimtis rašykite po vieną eilutėje: YYYY-MM-DD=skip arba YYYY-MM-DD=HH:MM.',
    'Use one exception per line: YYYY-MM-DD=skip or YYYY-MM-DD=HH:MM.'
  ],
  error_exceptionUnused: [
    'Viena išimties data nepatenka į šią seriją. Patikrinkite išimtis.',
    'An exception date is outside this series. Check the exceptions.'
  ],
  error_empty: ['Neliko nė vieno įvykio.', 'No occurrences remain.'],
  error_duplicate: [
    'Kelios datos virsta tuo pačiu įvykiu. Patikrinkite išimtis.',
    'Several dates resolve to the same occurrence. Check exceptions.'
  ],
  error_googleConfig: [
    'Google dar nesukonfigūruota: įrašykite kliento ID į config.js pagal instrukciją.',
    'Google is not configured: add your client ID to config.js using the guide.'
  ],
  error_googleDenied: [
    'Google nesuteikė reikalingo leidimo. Patikrinkite paskyrą, API ir suteiktus leidimus.',
    'Google did not grant the required permission. Check the account, APIs and permissions.'
  ],
  error_googleExpired: [
    'Google sesija baigėsi. Prisijunkite iš naujo.',
    'Your Google session expired. Connect again.'
  ],
  error_googlePopup: [
    'Prisijungimo langas uždarytas arba užblokuotas. Leiskite iškylančius langus ir bandykite dar kartą.',
    'The sign-in popup was closed or blocked. Allow popups and try again.'
  ],
  error_googleAuth: [
    'Nepavyko patikrinti Google paskyros.',
    'Could not verify the Google account.'
  ],
  error_googleRate: [
    'Google užklausų limitas. Palaukite ir bandykite dar kartą.',
    'Google request limit reached. Wait and retry.'
  ],
  error_googleHttp: [
    'Google užklausa nepavyko. Patikrinkite API konfigūraciją ir ryšį.',
    'Google request failed. Check API configuration and connectivity.'
  ],
  error_contactsPermission: [
    'Pirmiausia leiskite kontaktų paiešką.',
    'Enable contact search first.'
  ],
  error_accountMismatch: [
    'Šis juodraštis susietas su kitu Google kalendoriumi ar paskyra. Naudokite ankstesnę paskyrą arba pradėkite naują įvykį.',
    'This draft belongs to another Google calendar or account. Use that account or start a new event.'
  ],
  error_conflict: [
    'Įvykis pakeistas kitur. Spauskite „Peržiūrėti išorinį pakeitimą“; automatiškai jo neperrašome.',
    'The event changed elsewhere. Choose “Review external change”; it has not been overwritten.'
  ],
  error_googleAlarms: [
    'Google palaiko iki 5 priminimų vienam įvykiui. Sumažinkite skaičių arba atsisiųskite .ics.',
    'Google supports up to 5 reminders per event. Reduce them or download .ics.'
  ],
  error_googleAlarmAfter: [
    'Google nepalaiko priminimo po visos dienos įvykio pradžios. Pasirinkite ankstesnę dieną arba eksportuokite .ics.',
    'Google does not support a reminder after an all-day event starts. Choose an earlier day or export .ics.'
  ],
  error_googlePartial: [
    'Įvykis įrašytas, bet ne visi serijos patikslinimai baigti. Patikrinkite Google kalendorių ir pakartokite įrašymą su tuo pačiu juodraščiu.',
    'The event was saved, but some occurrence updates are incomplete. Check Google Calendar and retry with the same draft.'
  ],
  error_busyIncomplete: [
    'Per daug kalendoriaus įrašų pilnai patikrai. Sutrumpinkite laikotarpį.',
    'Too many calendar entries for a complete check. Shorten the period.'
  ],
  error_large: [
    'Failas ar tekstas per didelis (10 MB / 250 000 simbolių).',
    'File or text too large (10 MB / 250,000 characters).'
  ],
  error_pages: [
    'PDF turi daugiau nei 50 puslapių. Įkelkite trumpesnę ištrauką.',
    'PDF exceeds 50 pages. Upload a shorter excerpt.'
  ],
  error_scan: [
    'PDF neturi įskaitomo teksto. Skenai be OCR nepalaikomi; įklijuokite tekstą.',
    'No readable PDF text. Scans without OCR are unsupported; paste the text.'
  ],
  error_fileType: [
    'Nepalaikomas failo formatas.',
    'Unsupported file format.'
  ],
  error_dependency: [
    'Nepavyko įkelti skaitytuvo arba Google bibliotekos. Patikrinkite interneto ryšį.',
    'Could not load the reader or Google library. Check your connection.'
  ],
  error_readerConfig: [
    'Nuorodų skaitytuvas nesukonfigūruotas. Nurodykite urlReaderEndpoint pagal instrukciją.',
    'URL reader is not configured. Set urlReaderEndpoint using the guide.'
  ],
  error_project: [
    'Netinkamas arba nesuderinamas juodraščio failas.',
    'Invalid or incompatible draft file.'
  ],
  error_ambiguous: [
    'Pasirinkite pirmą arba antrą pasikartojančios valandos pasitaikymą.',
    'Choose the first or second occurrence of the repeated hour.'
  ],
  titleInferred: [
    'Pavadinimas pasiūlytas iš pirmos eilutės.',
    'Title suggested from the first line.'
  ],
  yearAssumed: [
    'Metai nenurodyti — pasiūlyti einamieji. Patikrinkite.',
    'Year missing — current year suggested. Verify it.'
  ],
  ambiguousDate: [
    'Dviprasmiška skaitinė data; interpretuota diena/mėnuo/metai.',
    'Ambiguous numeric date; interpreted as day/month/year.'
  ],
  multipleDates: [
    'Rastos kelios datos — pasirinkite tinkamą. Jos nebūtinai reiškia atskirus renginius.',
    'Multiple dates found — select one. They may not be separate events.'
  ],
  dateMissing: [
    'Data nerasta. Įveskite rankiniu būdu.',
    'Date not found. Enter it manually.'
  ],
  timeMissing: [
    'Pradžios laikas nerastas.',
    'Start time not found.'
  ],
  multipleTimes: [
    'Keli laikai — patikrinkite, kuris yra renginio pradžia.',
    'Multiple times — verify the event start.'
  ],
  endInferred: [
    'Antras laikas pasiūlytas kaip pabaiga. Patikrinkite.',
    'Second time suggested as the end. Verify it.'
  ],
  locationMissing: [
    'Vieta neatpažinta.',
    'Location not recognized.'
  ],
  zoneMissing: [
    'Laiko juosta nenurodyta — palikta formos parinktis.',
    'Time zone missing — the form setting is retained.'
  ],
  durationMissing: [
    'Trukmė nepateikta — taikoma numatytoji 1 valanda.',
    'Duration missing — the default is 1 hour.'
  ],
  structuredVerify: [
    'Renginio duomenys rasti puslapio struktūroje. Vis tiek patikrinkite.',
    'Event found in structured page data. Verification is still required.'
  ],
  offsetVerify: [
    'Šaltinyje yra UTC poslinkis; patikrinkite pasirinktą laiko juostą.',
    'The source contains a UTC offset; verify the selected time zone.'
  ]
});

let lang = 'lt';

try {
  lang = localStorage.getItem('ics-language') === 'en' ? 'en' : 'lt';
} catch {}

const t = key => words[key]?.[lang === 'lt' ? 0 : 1] || key;
const say = (lt, en) => lang === 'lt' ? lt : en;

const fieldIds = [
  'title',
  'description',
  'location',
  'url',
  'startDate',
  'endDate',
  'startTime',
  'endTime',
  'zone',
  'zoneMode',
  'startFold',
  'endFold',
  'frequency',
  'interval',
  'repeatEnd',
  'count',
  'until',
  'organizer',
  'attendees',
  'privacy',
  'busy',
  'status',
  'duration',
  'durationUnit',
  'durationMode',
  'monthRule',
  'gap',
  'exceptions'
];

let identity = fresh();
let imported = false;
let timeError = '';
let oldZone = $('zone').value;
let importCandidates = [];
let calendarList = [];
let saving = false;
let editVersion = 0;

function fresh() {
  return {
    uid: crypto.randomUUID() + '@ics-studio',
    sequence: 0,
    signature: '',
    google: null
  };
}

function language(next) {
  lang = next;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-t]').forEach(el => {
    el.textContent = t(el.dataset.t);
  });

  document.querySelectorAll('[data-lt]').forEach(el => {
    el.textContent = el.dataset[lang];
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

  preview();

  if (importCandidates.length) {
    showCandidate();
  }
}

function error(err, target = 'feedback') {
  $(target).className = 'feedback error';

  $(target).textContent = t(
    words['error_' + err.message]
      ? 'error_' + err.message
      : 'error_unknown'
  );

  if (
    err.name === 'TypeError' ||
    err.name === 'TimeoutError' ||
    err.name === 'AbortError'
  ) {
    $(target).textContent = say(
      'Nepavyko prisijungti arba baigėsi laukimo laikas. Patikrinkite ryšį.',
      'Connection failed or timed out. Check your network.'
    );
  }
}

function invalidate() {
  editVersion++;
  $('reviewed').checked = false;
  $('auditResult').replaceChildren();
  $('busyResult').replaceChildren();
  $('feedback').textContent = '';
}

function foldField(prefix) {
  try {
    const choices = Engine.choices(
      $(prefix + 'Date').value + 'T' + $(prefix + 'Time').value,
      $('zone').value
    );

    $(prefix + 'FoldField').hidden =
      $('allDay').checked || choices.length < 2;

    return choices;
  } catch {
    $(prefix + 'FoldField').hidden = true;
    return [];
  }
}

function setInstant(prefix, ms) {
  const local = Engine.parts(ms, $('zone').value);

  $(prefix + 'Date').value = local.slice(0, 10);
  $(prefix + 'Time').value = local.slice(11);

  const choices = Engine.choices(local, $('zone').value);

  $(prefix + 'Fold').value =
    choices.indexOf(ms) > 0 ? 'late' : 'early';

  foldField(prefix);
}

function startInstant(prefix = 'start', zone = $('zone').value) {
  return Engine.resolve(
    $(prefix + 'Date').value + 'T' + $(prefix + 'Time').value,
    zone,
    $(prefix + 'Fold').value
  ).ms;
}

function alarmData() {
  return [...$('reminders').children].map(row => ({
    value: row.querySelector('.alarm-value').value,
    unit: row.querySelector('.alarm-unit').value,
    mode: row.querySelector('.alarm-mode').value,
    time: row.querySelector('.alarm-clock').value
  }));
}

function read() {
  const event = {};

  for (const id of fieldIds) {
    event[id] = $(id).value.trim();
  }

  event.allDay = $('allDay').checked;
  event.advanced = $('advanced').checked;

  event.weekdays = [
    ...document.querySelectorAll('[name=weekday]:checked')
  ].map(el => el.value);

  event.durationMinutes = Engine.minutes(
    event.duration,
    event.durationUnit
  );

  event.durationDays = Number(event.duration);
  event.alarms = alarmData();

  if (!event.advanced) {
    event.frequency = '';
    event.exceptions = '';
    event.privacy = 'PUBLIC';
    event.busy = 'OPAQUE';
    event.status = 'CONFIRMED';
  }

  return event;
}

function updateEnd() {
  if ($('allDay').checked) {
    const days = Number($('duration').value);

    if (!Number.isInteger(days) || days < 1) {
      throw Error('duration');
    }

    $('endDate').value = Engine.addDays(
      $('startDate').value,
      days - 1
    );

    return;
  }

  const event = {
    zone: $('zone').value,
    durationMode: $('durationMode').value,
    durationMinutes: Engine.minutes(
      $('duration').value,
      $('durationUnit').value
    ),
    durationDays: Number($('duration').value),
    endFold: $('endFold').value,
    gap: $('gap').value
  };

  if (
    event.durationMode === 'calendar' &&
    (
      !Number.isInteger(event.durationDays) ||
      event.durationDays < 1
    )
  ) {
    throw Error('duration');
  }

  setInstant('end', Engine.advance(startInstant(), event));
}

function durationFromEnd() {
  if ($('allDay').checked) {
    const days =
      (
        Date.parse($('endDate').value) -
        Date.parse($('startDate').value)
      ) / Engine.DAY + 1;

    if (!Number.isInteger(days) || days < 1) {
      throw Error('end');
    }

    $('duration').value = days;
    return;
  }

  const minutes =
    (startInstant('end') - startInstant()) / Engine.MIN;

  if (minutes <= 0) {
    throw Error('end');
  }

  $('durationMode').value = 'elapsed';

  const unit =
    minutes % 1440 === 0
      ? 1440
      : minutes % 60 === 0
        ? 60
        : 1;

  $('durationUnit').value = unit;
  $('duration').value = minutes / unit;
}

function sync(id) {
  try {
    if (id === 'advanced' && !$('advanced').checked) {
      $('zoneMode').value = 'wall';

      if (!$('allDay').checked) {
        durationFromEnd();
      }

      $('durationMode').value = 'elapsed';
    } else if (id === 'allDay') {
      $('duration').value = 1;
      $('durationUnit').value = $('allDay').checked ? '1440' : '60';
      $('durationMode').value = 'elapsed';
      updateEnd();
    } else if (
      id === 'durationMode' &&
      $('durationMode').value === 'calendar'
    ) {
      $('durationUnit').value = '1440';

      $('duration').value = Math.max(
        1,
        Math.round(Number($('duration').value) || 1)
      );

      updateEnd();
    } else if (id === 'zone') {
      if (
        $('zoneMode').value === 'instant' &&
        !$('allDay').checked
      ) {
        const start = startInstant('start', oldZone);
        const end = startInstant('end', oldZone);

        setInstant('start', start);
        setInstant('end', end);
        durationFromEnd();
      } else {
        updateEnd();
      }

      oldZone = $('zone').value;
    } else if (
      ['endDate', 'endTime', 'endFold'].includes(id)
    ) {
      durationFromEnd();
    } else if (
      [
        'startDate',
        'startTime',
        'startFold',
        'duration',
        'durationUnit',
        'durationMode',
        'gap'
      ].includes(id)
    ) {
      updateEnd();
    } else {
      return;
    }

    timeError = '';
    $('timeFeedback').textContent = '';
  } catch (err) {
    timeError = err.message;
    error(err, 'timeFeedback');
  }

  foldField('start');
  foldField('end');
}

function visibility() {
  const all = $('allDay').checked;
  const advanced = $('advanced').checked;
  const repeat = advanced && $('frequency').value;

  $('advancedFields').hidden = !advanced;
  $('advancedFields').disabled = !advanced;

  $('advanced').setAttribute(
    'aria-expanded',
    String(advanced)
  );

  for (const id of ['startTime', 'endTime']) {
    $(id).hidden = all;
    $(id).disabled = all;
  }

  $('allDayHint').hidden = !all;
  $('zoneField').hidden = false;
  $('zoneMode').disabled = all;

  $('durationUnit').disabled =
    all || $('durationMode').value === 'calendar';

  $('durationMode').disabled = all;

  // Trukmės validacijos pataisa:
  // sveikomis dienomis minimumas ir žingsnis turi būti 1.
  const wholeDays =
    all || $('durationMode').value === 'calendar';

  $('duration').min = wholeDays ? '1' : '0.01';
  $('duration').step = wholeDays ? '1' : 'any';

  $('repeatFields').hidden = !repeat;
  $('interval').disabled = !repeat;
  $('repeatEnd').disabled = !repeat;

  for (const [id, enabled] of [
    ['count', repeat && $('repeatEnd').value === 'count'],
    ['until', repeat && $('repeatEnd').value === 'until']
  ]) {
    $(id + 'Field').hidden = !enabled;
    $(id).disabled = !enabled;
  }

  $('weekField').hidden = !(
    repeat && $('frequency').value === 'WEEKLY'
  );

  $('weekField').disabled = $('weekField').hidden;

  $('monthRule').disabled = !(
    repeat && $('frequency').value === 'MONTHLY'
  );

  $('monthHint').hidden = !(
    repeat &&
    ['MONTHLY', 'YEARLY'].includes($('frequency').value)
  );

  foldField('start');
  foldField('end');

  for (const row of $('reminders').children) {
    const mode = row.querySelector('.alarm-mode').value;

    row.querySelector('.alarm-clock').hidden =
      mode !== 'calendar' || !all;

    row.querySelector('.alarm-clock').disabled =
      mode !== 'calendar' || !all;

    row.querySelector('.alarm-unit').disabled =
      mode === 'calendar';

    if (mode === 'calendar') {
      row.querySelector('.alarm-unit').value = '1440';
    }
  }
}

function preview() {
  $('previewTitle').textContent =
    $('title').value || t('newEvent');

  $('previewDay').textContent =
    $('startDate').value.slice(-2) || '—';

  $('previewMonth').textContent =
    $('startDate').value.slice(0, 7) || '—';

  $('previewWhen').textContent =
    $('startDate').value +
    (
      $('allDay').checked
        ? ' · ' + t('allDay')
        : ' · ' + $('startTime').value
    ) +
    ' — ' +
    $('endDate').value +
    (
      $('allDay').checked
        ? ''
        : ' · ' + $('endTime').value
    );

  $('previewZoneRow').hidden = false;
  $('previewZone').textContent = $('zone').value;

  $('previewLocationRow').hidden = !$('location').value;
  $('previewLocation').textContent = $('location').value;

  $('previewRepeatRow').hidden = !(
    $('advanced').checked && $('frequency').value
  );

  $('previewRepeat').textContent =
    $('frequency').selectedOptions[0].textContent;

  $('noReminders').hidden =
    $('reminders').children.length > 0;

  $('previewReminder').textContent =
    $('reminders').children.length
      ? say('Priminimų: ', 'Reminders: ') +
        $('reminders').children.length
      : t('none');

  $('identityStatus').textContent =
    say('Įvykio ID: ', 'Event ID: ') +
    identity.uid.split('@')[0].slice(0, 8) +
    ' · v' +
    identity.sequence;

  $('importWarning').hidden = !imported;
}

function addAlarm(
  data = {
    value: 15,
    unit: 1,
    mode: 'elapsed',
    time: '09:00'
  }
) {
  const row = document.createElement('div');
  row.className = 'alarm-row';

  const input = document.createElement('input');
  input.className = 'alarm-value';
  input.type = 'number';
  input.min = '0';
  input.max = '40320';
  input.step = 'any';
  input.required = true;
  input.value = data.value;
  input.dataset.a = 'reminderAmount';
  input.setAttribute('aria-label', t('reminderAmount'));

  const unit = document.createElement('select');
  unit.className = 'alarm-unit';
  unit.dataset.a = 'reminderUnit';

  for (const [value, key] of [
    ['1', 'unitMinutes'],
    ['60', 'unitHours'],
    ['1440', 'unitDays']
  ]) {
    const option = new Option(t(key), value);
    option.dataset.t = key;
    unit.add(option);
  }

  unit.value = data.unit;

  const mode = document.createElement('select');
  mode.className = 'alarm-mode';

  mode.setAttribute(
    'aria-label',
    say('Priminimo skaičiavimas', 'Reminder calculation')
  );

  for (const [value, lt, en] of [
    [
      'elapsed',
      'Faktinis laikas prieš pradžią',
      'Elapsed time before start'
    ],
    [
      'calendar',
      'Ankstesnė kalendorinė diena',
      'Earlier calendar day'
    ]
  ]) {
    const option = new Option(say(lt, en), value);
    option.dataset.lt = lt;
    option.dataset.en = en;
    mode.add(option);
  }

  mode.value = data.mode;

  const clock = document.createElement('input');
  clock.type = 'time';
  clock.value = data.time;
  clock.className = 'alarm-clock';

  clock.setAttribute(
    'aria-label',
    say('Priminimo valanda', 'Reminder clock time')
  );

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'subbutton alarm-remove';
  remove.textContent = '×';
  remove.dataset.a = 'remove';
  remove.setAttribute('aria-label', t('remove'));

  remove.onclick = () => {
    row.remove();
    invalidate();
    preview();
  };

  row.append(input, unit, mode, clock, remove);
  $('reminders').append(row);

  visibility();
  preview();
}

function paragraph(parent, text) {
  const p = document.createElement('p');
  p.textContent = text;
  parent.append(p);
  return p;
}

function warningText(text) {
  return text
    .replace(
      'series overlap',
      say('serijos įvykiai persidengia', 'series overlap')
    )
    .replace(
      'Finite series:',
      say('Baigtinė serija:', 'Finite series:')
    )
    .replace(
      'events;',
      say('įvykių;', 'events;')
    )
    .replace(
      'missing day',
      say('nėra dienos', 'missing day')
    )
    .replace(
      'DST skipped',
      say('laiko nėra — praleista', 'DST skipped')
    )
    .replace(
      'DST shifted',
      say('laiko nėra — perkelta', 'DST shifted')
    )
    .replace(
      'excluded',
      say('išimtis — praleista', 'excluded')
    )
    .replace(
      'early occurrence',
      say('pirmasis valandos pasitaikymas', 'first occurrence')
    )
    .replace(
      'late occurrence',
      say('antrasis valandos pasitaikymas', 'second occurrence')
    );
}

function audit() {
  if (timeError) {
    throw Error(timeError);
  }

  const event = read();
  const result = Engine.build(event, identity);
  const box = $('auditResult');

  box.replaceChildren();

  paragraph(
    box,
    say('Įvykių skaičius: ', 'Occurrences: ') +
      result.occ.length
  );

  for (const warning of result.warnings) {
    paragraph(box, warningText(warning));
  }

  if (event.alarms.length) {
    paragraph(
      box,
      say(
        'Priminimų vykdymas priklauso nuo kalendoriaus ir įrenginio nustatymų.',
        'Reminder delivery depends on calendar and device settings.'
      )
    );
  }

  const table = document.createElement('table');

  for (const occurrence of result.occ) {
    const tr = document.createElement('tr');

    const values = [
      event.allDay
        ? occurrence.start
        : Engine.parts(occurrence.start, event.zone),
      event.allDay
        ? occurrence.end
        : Engine.parts(occurrence.end, event.zone)
    ];

    for (const value of values) {
      const td = document.createElement('td');
      td.textContent = value;
      tr.append(td);
    }

    table.append(tr);
  }

  box.append(table);

  return {
    ...result,
    e: event
  };
}

function ready() {
  if (!$('event-form').reportValidity()) {
    return null;
  }

  const result = audit();

  if (!$('reviewed').checked) {
    throw Error('review');
  }

  return result;
}

function revision(event) {
  const signature = JSON.stringify(event);

  if (
    identity.signature &&
    identity.signature !== signature
  ) {
    identity.sequence++;
  }

  identity.signature = signature;
  preview();
}

function download(data, name, type) {
  const url = URL.createObjectURL(
    new Blob([data], { type })
  );

  const link = document.createElement('a');
  link.href = url;
  link.download = name;

  document.body.append(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

$('event-form').addEventListener('input', event => {
  if (
    event.target.id === 'reviewed' ||
    event.target.id.startsWith('source')
  ) {
    return;
  }

  invalidate();

  if (
    event.target.tagName !== 'SELECT' &&
    event.target.type !== 'checkbox'
  ) {
    sync(event.target.id);
  }

  visibility();
  preview();
});

$('event-form').addEventListener('change', event => {
  if (
    event.target.id === 'reviewed' ||
    event.target.id.startsWith('source') ||
    event.target.id === 'candidate'
  ) {
    return;
  }

  invalidate();
  sync(event.target.id);
  visibility();
  preview();
});

document.querySelectorAll('[data-lang]').forEach(button => {
  button.onclick = () => language(button.dataset.lang);
});

$('addReminder').onclick = () => {
  addAlarm();
  invalidate();
};

$('audit').onclick = () => {
  try {
    audit();
  } catch (err) {
    error(err);
  }
};

$('event-form').onsubmit = event => {
  event.preventDefault();

  try {
    const result = ready();

    if (!result) {
      return;
    }

    revision(result.e);

    const built = Engine.build(result.e, identity);

    const filename =
      (
        $('title').value
          .replace(/[^\p{L}\p{N}_-]+/gu, '-')
          .slice(0, 80) ||
        'event'
      ) + '.ics';

    download(
      built.content,
      filename,
      'text/calendar;charset=utf-8'
    );

    $('feedback').className = 'feedback success';

    $('feedback').textContent = imported
      ? say(
          'Failas sukurtas. Privaloma patikrinti duomenis importavus į kalendorių.',
          'File created. You must verify the details after importing it into your calendar.'
        )
      : t('success');
  } catch (err) {
    error(err);
  }
};

function snapshot() {
  const fields = {};

  for (const id of fieldIds) {
    fields[id] = $(id).value;
  }

  fields.allDay = $('allDay').checked;
  fields.advanced = $('advanced').checked;

  fields.weekdays = [
    ...document.querySelectorAll('[name=weekday]:checked')
  ].map(el => el.value);

  return {
    format: 'ICSStudio',
    version: 2,
    identity,
    fields,
    alarms: alarmData(),
    imported
  };
}

$('saveProject').onclick = () => {
  try {
    const data = snapshot();

    download(
      JSON.stringify(data, null, 2),
      'event.icsstudio',
      'application/json'
    );
  } catch (err) {
    error(err);
  }
};

$('openProject').onchange = async () => {
  try {
    const file = $('openProject').files[0];

    if (!file) {
      return;
    }

    if (file.size > 1048576) {
      throw Error('large');
    }

    const data = JSON.parse(await file.text());

    if (
      data.format !== 'ICSStudio' ||
      data.version !== 2 ||
      !data.fields ||
      !Array.isArray(data.alarms) ||
      data.alarms.length > 100 ||
      !/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}@ics-studio$/.test(
        data.identity?.uid
      ) ||
      !Number.isInteger(data.identity.sequence) ||
      data.identity.sequence < 0 ||
      data.identity.sequence > 1000000
    ) {
      throw Error('project');
    }

    if (
      !confirm(
        say(
          'Pakeisti dabartinę formą šiuo juodraščiu?',
          'Replace the current form with this draft?'
        )
      )
    ) {
      return;
    }

    for (const id of fieldIds) {
      if (typeof data.fields[id] === 'string') {
        $(id).value = data.fields[id];
      }
    }

    $('allDay').checked = !!data.fields.allDay;
    $('advanced').checked = !!data.fields.advanced;

    for (const el of document.querySelectorAll('[name=weekday]')) {
      el.checked = (data.fields.weekdays || []).includes(el.value);
    }

    identity = data.identity;
    imported = !!data.imported;
    oldZone = $('zone').value;

    $('reminders').replaceChildren();
    data.alarms.forEach(addAlarm);

    timeError = '';

    invalidate();
    visibility();
    preview();
  } catch (err) {
    error(err);
  } finally {
    $('openProject').value = '';
  }
};

$('newEvent').onclick = () => {
  if (
    !confirm(
      say(
        'Pradėti naują įvykį? Neišsaugoti duomenys bus prarasti.',
        'Start a new event? Unsaved data will be lost.'
      )
    )
  ) {
    return;
  }

  $('event-form').reset();

  identity = fresh();
  imported = false;

  $('reminders').replaceChildren();
  $('importResult').hidden = true;

  importCandidates = [];
  oldZone = $('zone').value;

  initialize();
  invalidate();
  visibility();
  preview();
};

function initialize() {
  const now = Date.now();
  const next = Math.floor(now / 3600000) * 3600000 + 3600000;

  setInstant('start', next);

  $('duration').value = 1;
  $('durationUnit').value = 60;
  $('durationMode').value = 'elapsed';

  updateEnd();

  $('until').value = $('startDate').value;
  timeError = '';
}

function analyze(source) {
  $('evidence').dataset.candidate = '';

  const structured = Extractor.structured(source.json || []);

  if (structured.length) {
    importCandidates = structured;
  } else {
    const result = Extractor.extract(source.text);

    importCandidates = result.candidates.length > 1
      ? result.candidates.map(candidate => ({
          ...result,
          fields: {
            ...result.fields,
            startDate: candidate.date
          },
          evidence: {
            ...result.evidence,
            startDate: candidate.source
          }
        }))
      : [result];
  }

  $('candidate').replaceChildren();

  importCandidates.forEach((result, index) => {
    $('candidate').add(
      new Option(
        (result.fields.title || t('newEvent')) +
          ' · ' +
          (result.fields.startDate || '?'),
        index
      )
    );
  });

  $('importResult').hidden = false;
  $('sourceText').value = source.text;

  $('importStatus').textContent = say(
    'Analizė baigta. Patikrinkite laukus ir pasirinkite, kuriuos perkelti.',
    'Analysis finished. Check the fields and choose which to apply.'
  );

  showCandidate();
}

function showCandidate() {
  const candidate = String(Number($('candidate').value) || 0);
  const result = importCandidates[Number(candidate)];

  if (!result) {
    return;
  }

  const box = $('evidence');

  const previous = box.dataset.candidate === candidate
    ? new Map(
        [...box.querySelectorAll('input[data-field]')].map(
          checkbox => [
            checkbox.dataset.field,
            checkbox.checked
          ]
        )
      )
    : new Map();

  box.dataset.candidate = candidate;
  box.replaceChildren();

  if (result.warnings.length) {
    const notes = document.createElement('details');
    notes.className = 'import-notes';

    const summary = document.createElement('summary');

    summary.textContent =
      say('Ką reikia patikrinti', 'What to check') +
      ' · ' +
      result.warnings.length;

    notes.append(summary);

    const list = document.createElement('ul');

    for (const warning of result.warnings) {
      const item = document.createElement('li');
      item.textContent = t(warning);
      list.append(item);
    }

    notes.append(list);
    box.append(notes);
  }

  const names = {
    title: ['Pavadinimas', 'Title'],
    description: ['Aprašymas', 'Description'],
    startDate: ['Pradžios data', 'Start date'],
    endDate: ['Pabaigos data', 'End date'],
    startTime: ['Pradžios laikas', 'Start time'],
    endTime: ['Pabaigos laikas', 'End time'],
    durationMinutes: ['Trukmė', 'Duration'],
    zone: ['Laiko juosta', 'Time zone'],
    location: ['Vieta', 'Location'],
    url: ['Nuoroda', 'Link'],
    allDay: ['Visos dienos renginys', 'All-day event'],
    organizer: ['Organizatorius', 'Organizer']
  };

  for (const [key, fieldValue] of Object.entries(result.fields)) {
    const card = document.createElement('div');
    card.className = 'import-field';

    const label = document.createElement('label');
    label.className = 'import-field-label';

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = previous.has(key) ? previous.get(key) : true;
    check.dataset.field = key;

    const name = document.createElement('span');
    name.textContent = names[key]?.[lang === 'lt' ? 0 : 1] || key;

    label.append(check, name);
    card.append(label);

    const value = document.createElement('p');
    value.className = 'import-field-value';

    value.textContent =
      key === 'allDay'
        ? (
            fieldValue
              ? say('Taip', 'Yes')
              : say('Ne', 'No')
          )
        : key === 'durationMinutes'
          ? fieldValue + say(' min.', ' min')
          : String(fieldValue);

    card.append(value);

    const source = String(result.evidence[key] || '').trim();
    const raw = String(fieldValue).trim();

    if (
      source &&
      source !== raw &&
      !raw.startsWith(source) &&
      !source.startsWith(raw)
    ) {
      const details = document.createElement('details');
      details.className = 'source-evidence';

      const summary = document.createElement('summary');
      summary.textContent = say(
        'Šaltinio ištrauka',
        'Source excerpt'
      );

      details.append(summary);
      paragraph(details, source);
      card.append(details);
    }

    box.append(card);
  }
}

$('candidate').onchange = showCandidate;

async function importing(button, job) {
  button.disabled = true;
  $('importStatus').textContent = say('Skaitoma…', 'Reading…');

  try {
    analyze(await job());
  } catch (err) {
    error(err, 'importStatus');
  } finally {
    button.disabled = false;
  }
}

$('parseText').onclick = () => importing(
  $('parseText'),
  async () => ({
    text: $('sourceText').value,
    json: []
  })
);

$('sourceFile').onchange = () => {
  const file = $('sourceFile').files[0];

  if (file) {
    importing(
      $('sourceFile'),
      () => SourceFiles.read(file)
    );
  }
};

$('parseUrl').onclick = () => importing(
  $('parseUrl'),
  async () => {
    if (!ICS_CONFIG.urlReaderEndpoint) {
      throw Error('readerConfig');
    }

    const source = new URL($('sourceUrl').value);

    if (source.protocol !== 'https:') {
      throw Error('url');
    }

    const response = await fetch(
      ICS_CONFIG.urlReaderEndpoint,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          url: source.href
        }),
        signal: AbortSignal.timeout(30000)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      $('importStatus').textContent = data.error || '';

      const err = Error('readerFailure');
      err.detail = data.error;
      throw err;
    }

    return data;
  }
);

$('applyImport').onclick = () => {
  const result = importCandidates[
    Number($('candidate').value) || 0
  ];

  if (!result) {
    return;
  }

  const fields = {};

  $('evidence')
    .querySelectorAll('input:checked')
    .forEach(checkbox => {
      fields[checkbox.dataset.field] =
        result.fields[checkbox.dataset.field];
    });

  if (
    !confirm(
      say(
        'Pakeisti pasirinktus formos laukus ištrauktais duomenimis? Trūkstamus duomenis ir prielaidas reikės patikrinti.',
        'Replace the selected form fields with extracted data? Missing values and assumptions must be checked.'
      )
    )
  ) {
    return;
  }

  try {
    for (const [key, value] of Object.entries(fields)) {
      if (
        [
          'startDate',
          'endDate',
          'startTime',
          'endTime',
          'durationMinutes',
          'allDay'
        ].includes(key)
      ) {
        continue;
      }

      if (
        key === 'zone' &&
        !Array.from($('zone').options).some(
          option => option.value === value
        )
      ) {
        continue;
      }

      if (fieldIds.includes(key)) {
        $(key).value = String(value).slice(
          0,
          key === 'description' ? 20000 : 2000
        );
      }
    }

    if (fields.startTime && fields.allDay === undefined) {
      $('allDay').checked = false;
    }

    if (fields.allDay !== undefined) {
      $('allDay').checked = fields.allDay;
    }

    if (fields.startDate) {
      $('startDate').value = fields.startDate;
    }

    if (fields.startTime) {
      $('startTime').value = fields.startTime;
    }

    $('durationMode').value = 'elapsed';
    $('durationUnit').value = $('allDay').checked ? '1440' : '1';

    $('duration').value = $('allDay').checked
      ? 1
      : fields.durationMinutes || 60;

    updateEnd();

    if (fields.endDate) {
      $('endDate').value = fields.endDate;
    }

    if (fields.endTime) {
      $('endTime').value = fields.endTime;
    }

    if (fields.endDate || fields.endTime) {
      durationFromEnd();
    }

    imported = true;
    oldZone = $('zone').value;
    timeError = '';

    invalidate();
    visibility();
    preview();

    $('title').focus();
  } catch (err) {
    imported = true;
    timeError = err.message;

    invalidate();
    visibility();
    preview();
    error(err);
  }
};

async function googleConnect(contacts = false) {
  const button = $(
    contacts ? 'connectContacts' : 'connectGoogle'
  );

  button.disabled = true;

  try {
    const who = await GoogleCalendar.authorize(contacts);
    calendarList = await GoogleCalendar.calendars();

    $('contactsResult').replaceChildren();
    $('busyResult').replaceChildren();
    $('calendar').replaceChildren();

    calendarList.forEach(calendar => {
      $('calendar').add(
        new Option(
          calendar.summary + (calendar.primary ? ' ★' : ''),
          calendar.id
        )
      );
    });

    const bound = identity.google?.calendar;

    if (
      bound &&
      calendarList.some(calendar => calendar.id === bound)
    ) {
      $('calendar').value = bound;
    } else {
      const primary = calendarList.find(
        calendar => calendar.primary
      );

      if (primary) {
        $('calendar').value = primary.id;
      }
    }

    $('googleFields').hidden = false;
    $('connectGoogle').hidden = true;
    $('disconnectGoogle').hidden = false;

    $('googleStatus').textContent =
      say('Prisijungta: ', 'Connected: ') + who.email;
  } catch (err) {
    error(err, 'googleStatus');
  } finally {
    button.disabled = false;
  }
}

$('connectGoogle').onclick = () => googleConnect();
$('connectContacts').onclick = () => googleConnect(true);

$('disconnectGoogle').onclick = async () => {
  try {
    await GoogleCalendar.disconnect();

    $('googleFields').hidden = true;
    $('connectGoogle').hidden = false;
    $('disconnectGoogle').hidden = true;

    $('contactsResult').replaceChildren();
    $('calendar').replaceChildren();

    $('googleStatus').textContent = say(
      'Atjungta.',
      'Disconnected.'
    );
  } catch (err) {
    error(err, 'googleStatus');
  }
};

$('searchContacts').onclick = async () => {
  const query = $('contactQuery').value.trim();

  if (!query) {
    return;
  }

  $('searchContacts').disabled = true;

  try {
    const rows = await GoogleCalendar.contacts(query);

    $('contactsResult').replaceChildren();

    if (!rows.length) {
      paragraph(
        $('contactsResult'),
        say('Kontaktų nerasta.', 'No contacts found.')
      );
    }

    for (const row of rows) {
      const button = document.createElement('button');

      button.type = 'button';
      button.className = 'subbutton';
      button.textContent = row.name + ' <' + row.email + '>';

      button.onclick = () => {
        const existing = $('attendees').value
          .split(/[\s,;]+/)
          .filter(Boolean);

        if (!existing.includes(row.email)) {
          existing.push(row.email);
        }

        $('attendees').value = existing.join('\n');

        invalidate();

        button.disabled = true;
        button.textContent =
          say('Pridėta: ', 'Added: ') +
          row.name +
          ' <' +
          row.email +
          '>';
      };

      $('contactsResult').append(button);
    }
  } catch (err) {
    error(err, 'googleStatus');
  } finally {
    $('searchContacts').disabled = false;
  }
};

function busyDisplay(hits) {
  const box = $('busyResult');
  box.replaceChildren();

  paragraph(
    box,
    hits.length
      ? say(
          'Galimi persidengimai: ',
          'Possible overlaps: '
        ) + hits.length
      : say(
          'Pasirinktame kalendoriuje persidengimų nerasta. Kitų kalendorių ir dalyvių užimtumas netikrintas.',
          'No overlaps in the selected calendar. Other calendars and attendee availability were not checked.'
        )
  );

  for (const hit of hits) {
    paragraph(box, hit.date + ' · ' + hit.title);
  }
}

$('checkBusy').onclick = async () => {
  try {
    const result = audit();
    const version = editVersion;

    $('checkBusy').disabled = true;

    const calendar = calendarList.find(
      item => item.id === $('calendar').value
    );

    if (!calendar) {
      throw Error('googleExpired');
    }

    const hits = await GoogleCalendar.conflicts(
      result.e,
      result.occ,
      calendar.id,
      identity,
      calendar.timeZone || result.e.zone
    );

    if (
      editVersion !== version ||
      $('calendar').value !== calendar.id
    ) {
      throw Error('draftChanged');
    }

    busyDisplay(hits);
  } catch (err) {
    error(err, 'googleStatus');
  } finally {
    $('checkBusy').disabled = false;
  }
};

$('saveGoogle').onclick = async () => {
  if (saving) {
    return;
  }

  saving = true;
  $('saveGoogle').disabled = true;

  try {
    const result = ready();

    if (!result) {
      return;
    }

    const calendar = calendarList.find(
      item => item.id === $('calendar').value
    );

    if (!calendar) {
      throw Error('googleExpired');
    }

    if (
      result.e.allDay &&
      result.e.zone !== calendar.timeZone
    ) {
      throw Error('allDayZone');
    }

    Engine.googleBody(result.e, result.occ);

    const version = editVersion;

    const hits = await GoogleCalendar.conflicts(
      result.e,
      result.occ,
      calendar.id,
      identity,
      calendar.timeZone || result.e.zone
    );

    if (
      editVersion !== version ||
      $('calendar').value !== calendar.id
    ) {
      throw Error('draftChanged');
    }

    busyDisplay(hits);

    const attendees = Engine.guests(result.e);

    const message =
      say(
        'Įrašyti / atnaujinti įvykį kalendoriuje: ',
        'Save / update the event in calendar: '
      ) +
      calendar.summary +
      '\n' +
      result.e.title +
      '\n' +
      say('Įvykių skaičius: ', 'Occurrences: ') +
      result.occ.length +
      '\n' +
      say('Persidengimų: ', 'Overlaps: ') +
      hits.length +
      '\n\n' +
      (
        attendees.length
          ? say(
              'Šiems adresams Google išsiųs kvietimus arba atnaujinimus:\n',
              'Google will send invitations or updates to:\n'
            ) + attendees.join('\n')
          : say(
              'Dalyvių kvietimų nėra.',
              'No attendee invitations.'
            )
      ) +
      (
        identity.google
          ? '\n' + say(
              'Anksčiau pakviesti, dabar pašalinti dalyviai gali gauti atšaukimą.',
              'Previously invited attendees removed now may receive a cancellation.'
            )
          : ''
      );

    if (!confirm(message)) {
      return;
    }

    $('event-form').inert = true;
    document.querySelector('.workspace-tools').inert = true;
    document.querySelector('.google-panel').inert = true;

    revision(result.e);

    const saved = await GoogleCalendar.save(
      result.e,
      result.occ,
      calendar.id,
      identity,
      (index, total) => {
        $('googleStatus').textContent =
          say(
            'Atnaujinamos išimtys: ',
            'Updating exceptions: '
          ) +
          index +
          '/' +
          total;
      }
    );

    $('googleStatus').replaceChildren();

    paragraph(
      $('googleStatus'),
      say(
        'Įrašyta. Patikrinkite informaciją kalendoriuje ir išsaugokite juodraštį būsimiems pakeitimams.',
        'Saved. Verify the event in your calendar and save the draft for future updates.'
      )
    );

    if (
      saved.htmlLink &&
      new URL(saved.htmlLink).protocol === 'https:' &&
      ['www.google.com', 'calendar.google.com'].includes(
        new URL(saved.htmlLink).hostname
      )
    ) {
      const link = document.createElement('a');

      link.href = saved.htmlLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = say('Atidaryti įvykį', 'Open event');

      $('googleStatus').append(link);
    }
  } catch (err) {
    error(err, 'googleStatus');
  } finally {
    saving = false;
    $('saveGoogle').disabled = false;

    $('event-form').inert = false;
    document.querySelector('.workspace-tools').inert = false;
    document.querySelector('.google-panel').inert = false;

    preview();
  }
};

$('refreshGoogle').onclick = async () => {
  try {
    if (!identity.google) {
      throw Error('googleNoBinding');
    }

    if (
      identity.google.account !== GoogleCalendar.account?.sub
    ) {
      throw Error('accountMismatch');
    }

    const current = await GoogleCalendar.get(
      identity.google.calendar,
      identity.google.id
    );

    const message =
      say(
        'Dabartinė Google versija:\n',
        'Current Google version:\n'
      ) +
      (current.summary || '') +
      '\n' +
      JSON.stringify(
        {
          start: current.start,
          end: current.end,
          description: current.description,
          attendees: (current.attendees || []).map(
            attendee => attendee.email
          )
        },
        null,
        2
      ) +
      '\n\n' +
      say(
        'Leisti kitam įrašymui ją pakeisti šios formos duomenimis? Dabar duomenys dar nebus siunčiami.',
        'Allow the next save to replace it with this form? No data is sent now.'
      );

    if (confirm(message)) {
      identity.google.etag = current.etag;

      $('googleStatus').textContent = say(
        'Versija patvirtinta. Peržiūrėkite formą ir įrašykite iš naujo.',
        'Version acknowledged. Review the form and save again.'
      );
    }
  } catch (err) {
    error(err, 'googleStatus');
  }
};

Object.assign(words, {
  error_readerFailure: [
    'Puslapio nuskaityti nepavyko. Patikrinkite, ar domenas leistas skaitytuvo nustatymuose, arba įklijuokite tekstą.',
    'Could not read the page. Check the reader domain allowlist or paste the text.'
  ],
  error_draftChanged: [
    'Forma pasikeitė tikrinant. Pakartokite patikrą.',
    'The form changed during the check. Check again.'
  ],
  error_allDayZone: [
    'Visos dienos Google priminimams parinkite tokią pačią laiko juostą kaip pasirinktame kalendoriuje.',
    'For all-day Google reminders, select the same time zone as the selected calendar.'
  ],
  error_googleNoBinding: [
    'Šis juodraštis dar nesusietas su Google įvykiu.',
    'This draft is not linked to a Google event yet.'
  ]
});

initialize();
visibility();
language(lang);

document
  .querySelectorAll(
    'a[href="#googleIntegration"],a[href="#eventPreview"]'
  )
  .forEach(link => {
    link.addEventListener('click', () => {
      const target = document.querySelector(
        link.getAttribute('href')
      );

      target.focus({ preventScroll: true });
    });
  });
