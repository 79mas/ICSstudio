# ICS Studio 2.0

LT / EN kalendoriaus įvykių generatorius: tamsi tema, oranžinis akcentas, GitHub Pages.

## Paleidimas

Publikuokite šio aplanko turinį per GitHub Pages. Vietinei peržiūrai naudokite `python3 -m http.server 8080` ir atverkite `http://localhost:8080`. `.ics` generavimui nereikia npm ar serverio API. Google ir nuorodų analizė reikalauja atskiro konfigūravimo.

Visa diegimo instrukcija: **DIEGIMAS.md**. Pakeitimai ir ribos: **ATNAUJINIMAS.md**.

## Galimybės

- Pradžia artimiausią kitą pilną valandą; susieta pradžia, trukmė ir rankiniu būdu keičiama pabaiga.
- Keli priminimai pagrindinėje formoje. Minutės, valandos, faktinės ir kalendorinės dienos.
- Vasaros / žiemos laikas, neegzistuojančios ir pasikartojančios valandos, mėnesių ir keliamųjų metų taisyklės.
- Baigtinės serijos iki 5 metų ir 1000 įvykių, konkrečių datų išimtys, patikros lentelė.
- Eksperimentinis LT / EN informacijos ištraukimas be AI: tekstas, TXT, MD, CSV, HTML, JSON, DOCX, tekstinis PDF, viešos leistų domenų nuorodos.
- Privaloma duomenų patikra prieš eksportą ir priminimas patikrinti rezultatą kalendoriuje.
- Google Calendar: nuosavi kalendoriai, persidengimų patikra, sukūrimas / atnaujinimas, kvietimai tik po patvirtinimo.
- Google People: vardų ir el. paštų paieška kontaktuose, pasirinkimas į dalyvių sąrašą.
- `.icsstudio` juodraščiai su stabiliu UID ir versija. Atsisiųskite juodraštį po Google įrašymo.

## Failai

| Failas | Paskirtis |
|---|---|
| index.html / styles.css | Sąsaja ir tema |
| app.js | Formos elgsena, kalbos, patikra |
| engine.js | Laikas, pasikartojimai, ICS ir Google formatas |
| extract.js / files.js | Taisyklių analizatorius ir dokumentų skaitytuvai |
| google.js | OAuth, Calendar ir People API |
| config.js | Viešas Google kliento ID, skaitytuvo adresas |
| privacy.html | Privatumo tekstas; prieš publikavimą įrašyti savininko kontaktus |
| url-reader/ | Atskirai diegiamas Cloudflare Worker |
| tests/ | Automatinės logikos ir API imitavimo patikros |

## Patikra

Reikia Node.js 22 arba naujesnio. `node --test tests/*.test.cjs`.

Google testai naudoja imituotus atsakymus. Jie nesiunčia kvietimų. Tikras OAuth ir API įrašymas turi būti išbandytas su jūsų projektu. PDF/DOCX skaitytuvams ir Google bibliotekai reikia interneto. Naršyklės IANA laiko juostų duomenys turi būti atnaujinti.
