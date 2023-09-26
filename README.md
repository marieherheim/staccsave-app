## Introduksjon
Jeg har startet på en web applikasjon for sparing, kalt StaccSave. Har blant annet brukt React/JavaScript/Tailwind/JSON/node.js/express server.

Hadde aldri jobbet med de fleste av disse før, så det har vært en bratt læringskurve de siste dagene. 
Dette reflekteres kanskje i kvaliteten, og det er mye mer jeg gjerne skulle ha implementert og endret, men det er en start :)

## Kommentarer i koden
Det er veldig mye kommentarer i koden, dette er fordi jeg ønsker å forklare tankegangen min i alt jeg gjør, slik som på et teknisk intervju. Jeg tenkte at dette gjorde det lettere for dere å vurdere meg og koden min.

## Om oppgaven
Før jeg fikk oppgaven på torsdag så hadde jeg kun brukt litt JavaScript i ett fag på skolen. Hadde aldri brukt React eller Tailwind før, hadde heller aldri forsøkt å lage en server eller gjøre noe annet i backend.

(Brukte Tailwind fordi jeg leste at dette var populært og bra å bruke, og fordi da lærte jeg noe nytt i tillegg til CSS, som jeg kan litt fra før.)

Til tross for at jeg ikke har mye kunnskap om de ulike verktøyene/rammeverkene/kodespråkene enda, så føler jeg at jeg har lært mye på kort tid under arbeidet med dette prosjektet. Det er mye jeg skulle gjort bedre og annerledes, men jeg er sikker på at jeg med litt mer tid kan klare å bruke disse verktøyene og rammeverkene/språkene på en god måte.

## Hva jeg ville gjort annerledes med mer tid og erfaring:

Backenden er ikke veldig funksjonell enda, og jeg skulle gjerne ha hatt mer tid til å jobbe med den og koble den til ulike deler av frontend koden min. Blant annet ville jeg ha lagt inn backend slik at det ble brukt allerede i innloggingen, kanskje også med et hashet passord, slik at det blir sjekket at brukeren faktisk skal ha autorisert adgang. Etter å ha implementert backend så ser jeg altså at jeg ville ha bygd opp frontend delen av applikasjonen på en litt annen måte dersom jeg skulle gjort det på nytt.

Ville ha brukt transactions som jeg hentet fra backend i frontend, istedenfor å hente dataen rett fra json filen i frontend. Ville da ha oppdatert saldoen der det står TBD ved hjelp av backend. I tillegg ville jeg ha laget sparemål funksjonen slik at det faktisk oppdaterer saldoen i datasettet, ikke bare saldoen på nettsiden.

Ønsker altså videre å koble frontend til backend på en slik måte at jeg kan oppdatere og gjenhente datasettet og lage flere og kulere sparefunksjoner på nettsiden.

Siden dere utfordret meg på å prøve meg på både frontend og backend så valgte jeg å prioritere å få til litt av begge deler. Dersom jeg hadde hatt mer tid så ville jeg ha fokusert mer på å lage en finere og mer brukervennlig frontend.

## Konkrete ting jeg ønsket å endre, men ikke fikk tid til:

Navnet man skriver inn når man logger inn bør også kunne skrives med liten forbokstav uten at det blir feil, kan gjøres ved å bruke charAt på index 0 i input stringen, bruke slice metoden, og så bruke toUpperCase metoden på bokstaven, før man merger alt sammen igjen og sender det til «sjekking».

På kontooversiktssiden: Fikse mer mellomrom mellom «Gå tilbake» knappen og bunnen av nettsiden.

Hatt en knapp for å «gå tilbake» når en bruker ikke er funnet, og en annen knapp for «logg ut» når man er inne på brukeren, akkurat nå er det samme knappen (ligger i app.js). Ønsker at knappen skal kunne gjøre ulike ting avhengig av ulike conditions.

Dersom det var et større prosjekt som skulle ut på en server, eller sensitiv informasjon på backend, så ville jeg ha fikset de svakhetene som det advares mot (v/hjelp av audit fix), men siden det er et mindre prosjekt så ønsket jeg ikke å bruke for mye tid på feilsøking og oppdatering.

I Safari så kommer det en feilmelding når brukeren ikke finnes, har ikke helt funnet ut hvordan jeg fikser den enda, men det funker i Chrome.

## How to run
`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

For å få alt til å kjøre riktig, så må man også laste ned mitt andre repository: «staccsave-backend». Les også readme filen som ligger der, for å se hva som må gjøres for å få den til å kjøre rett.



