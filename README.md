# ICS Studio 1.1

Minimalistinis LT / EN kalendoriaus įvykių (.ics) generatorius, paruoštas GitHub Pages.

## Paleidimas

Atidarykite `index.html` naršyklėje arba publikuokite šio aplanko turinį per GitHub Pages:
**Settings → Pages → Deploy from a branch → main → /(root) → Save**.

Nereikia Node.js, npm, API raktų, serverio ar išorinių bibliotekų. Visi keliai santykiniai, todėl veikia ir repozitorijos poaplankyje.

## Galimybės

- LT / EN kalbos perjungimas, tamsi tema, oranžinis akcentas.
- Pavadinimas, aprašymas, vieta, nuoroda, datos, laikas ir visos dienos įvykiai.
- 10 laiko juostų, numatytoji Europe/Vilnius.
- Keli priminimai pagrindinėje formoje su minučių, valandų ir dienų pasirinkimu.
- Susieta pradžia, trukmė ir pabaiga; rankinis pabaigos koregavimas.
- Kasdienis, savaitinis, mėnesinis ar metinis kartojimas; intervalas, savaitės dienos, kartų skaičius arba pabaigos data.
- Organizatoriaus ir dalyvių el. paštai, privatumas, užimtumas, būsena.
- Vietinė peržiūra ir failo atsisiuntimas. Kvietimai el. paštu nesiunčiami.

## Privatumas

Forma nesiunčia įvestų duomenų į serverį ir neišsaugo įvykių po puslapio uždarymo. `localStorage` saugoma tik pasirinkta kalba. Svetainės prieglobos paslaugai siunčiamos įprastos puslapio užklausos. Atsisiųstas .ics yra nešifruotas tekstinis failas; PRIVATE ar CONFIDENTIAL nėra prieigos apsauga.

## Failai

| Failas | Paskirtis |
| --- | --- |
| index.html | Formos struktūra |
| styles.css | Tema ir prisitaikymas ekranams |
| app.js | Kalbos, peržiūra ir atsisiuntimas |
| time.js | Trukmės ir laiko skaičiavimas |
| calendar.js | iCalendar serializavimas ir laiko juostos |
| favicon.svg | Svetainės piktograma |
| .nojekyll | Tiesioginis statinių failų publikavimas |
| tests/calendar.test.cjs | Generatorius: datos, Unicode, kartojimas, validacija |

## Techninės ribos

Palaikomos įvykio datos: 2007–2099. Pasirinktos Europos ir JAV zonos aprašomos dabartinėmis sezoninio laiko taisyklėmis; pasikeitus teisės aktams reikia atnaujinti `calendar.js`. Pasikartojimo be pabaigos taisyklė neturi dirbtinės galutinės datos, tačiau remiasi tuo pačiu sezoninio laiko modeliu. Vienkartiniai įvykiai eksportuojami UTC; kartojami — su TZID ir VTIMEZONE (išskyrus UTC ir visos dienos įvykius). Laikrodžiui sukantis atgal dukart pasikartojantis laikas reiškia pirmą pasitaikymą, kaip numatyta RFC 5545. Neegzistuojantis pradžios arba pabaigos laikas pavasarį atmetamas.

Mėnesio 31-osios kartojimas praleidžia mėnesius be tokios dienos. Kasmetinė vasario 29-oji pasikartoja tik keliamaisiais metais. Savaitinio kartojimo pasirinktos dienos turi apimti pirmojo įvykio savaitės dieną. COUNT apima pirmąjį įvykį. Visos dienos pabaigos data formoje yra įskaityta, faile DTEND — kita diena.

Kiekvienas atsisiuntimas sukuria naują UID ir naują įvykį. Pakartotinis importas gali sukurti dublikatus. Tai failo kūrimo įrankis, ne kalendorių sinchronizavimo ar kvietimų siuntimo sistema. Priminimų, dalyvių ir privatumo importas priklauso nuo kalendoriaus programos.

## Testai (tik kūrėjams)

Turint Node.js 20 ar naujesnį:

```bash
node --test tests/*.test.cjs
```

Testų paleidimas nereikalingas svetainei naudoti ar publikuoti.

## Standartai

- [RFC 5545 — iCalendar](https://www.rfc-editor.org/rfc/rfc5545)
- [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Atlikta patikra

- 19 automatinių generatoriaus ir laiko testų — sėkmingi.
- Visų 9 sezoninių laiko juostų VTIMEZONE aprašai patikrinti nepriklausomu Python dateutil skaitytuvu prieš sistemos tzdata.
- Patikrinta JavaScript sintaksė, HTML identifikatoriai, laukų etiketės ir nuorodos į vietinius failus.
- Vaizdinė ir sąveikos patikra tikroje naršyklėje šioje rengimo aplinkoje neatlikta: nepavyko atsisiųsti Chromium. Faktinis importas į Google Calendar, Outlook ar Apple Calendar nebuvo tikrintas. Po publikavimo išbandykite savo naršyklėje ir kalendoriuje.
