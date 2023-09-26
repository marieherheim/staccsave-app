// Importerer nødvendige filer og moduler:
import React, { useState } from 'react';
import { Card } from "./Card"
import companyLogo from './assets/staccsave-long-header-logo.png';

/* Oppretter to useState-kroker:
useState hooks blir brukt for å opprette state variabler (i dette tilfellet name og accountId),
med tilhørende setter funksjoner (setName og setAccountId).*/
const AccountLookUp = ( { submit }) => {
    const [name, setName] = useState(''); // empty string som startverdi
    const [accountId, setAccountId] = useState(''); // empty string som startverdi

    // forhindrer skjemaet i å bli sendt inn ved full side reload (standard praksis i single-page applications)
    const handleSubmit = (event) => {
        event.preventDefault();
        submit(name, accountId);
    }
    // Rendrer logo og innloggingsskjemaet:
    return (
        <div>
            <div className="flex flex-col items-center">
                <br/>
                <img src={companyLogo} alt="Company Logo" className="max-w-full h-auto"/>
            </div>
            <Card className="bg-orange-400 p-6 rounded-lg shadow-xl  max-w-lg mx-auto mt-10 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s;">
                <form
                    className="flex flex-col justify-center items-center gap-4"
                    // Håndterer innsending av input fra brukeren: (Trigges av "Logg inn" knappen nederst i koden)
                    onSubmit={handleSubmit}>
                    <label htmlFor="name" className="font-bold text-gray-700"> Fornavn: </label>
                    <input
                        className="w-[350px] text-center border-2 border-gray-200 p-2 rounded-md shadow-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-orange-500 placeholder-gray-400"
                        // Verdien i inputfeltet blir bundet til state via value attributtet value={name}
                        value={name}
                        /* Når brukeren skriver inn noe i inputfeltet, vil onChange eventen fyre av,
                        og setName funksjonen vil bli kalt med den nye verdien (hentet v/hjelp av event.target.value).
                        En endring i input vil endre variabelen name, ved hjelp av setName funksjonen og argumentet event.target.value.
                        event.target.value gir deg verdien av inputfeltet som utløste hendelsen.
                        */
                        onChange={(event) => setName(event.target.value)} //event.target er selve inputfeltet, value er verdien av inputfeltet. I et tekst-inputfelt er verdien den tekststrengen som brukeren har skrevet inn.
                        placeholder="Ditt navn" // eksempel/forklaring på hva som kan stå i feltet
                        required // brukeren må skrive inn input for å gå videre
                    />
                    <label htmlFor="accountId" className="font-bold text-gray-700"> Bruker ID: </label>
                    <input
                        className="w-[350px] text-center border-2 border-gray-200 p-2 rounded-md shadow-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-orange-500 placeholder-gray-400"
                        // Verdien i inputfeltet blir bundet til state via value attributtet value={accountId}
                        value={accountId}
                        /* Når brukeren skriver inn noe i inputfeltet, vil onChange eventen fyre av,
                        og setAccountId funksjonen vil bli kalt med den nye verdien (hentet v/hjelp av event.target.value).
                        En endring i input vil endre variabelen accountId, ved hjelp av setAccountId funksjonen og argumentet event.target.value.
                        event.target.value gir deg verdien av inputfeltet som utløste hendelsen.
                        */
                        onChange={(event) => setAccountId(event.target.value)} //event.target er selve inputfeltet, value er verdien av inputfeltet. I et tekst-inputfelt er verdien den tekststrengen som brukeren har skrevet inn.
                        placeholder="Din bruker ID" // eksempel/forklaring på hva som kan stå i feltet
                        required // brukeren må skrive inn input for å gå videre
                    />

                    <button
                        /* Denne knappen trigger innsendingen av skjemaet når den klikkes på.
                           Når skjemaet sendes inn, vil event handleren (handleSubmit) som er knyttet til skjemaets
                           onSubmit-attributt bli kalt på. */

                        /* knappen har en submit funksjon som trigger innsendingen av skjemaet og kaller på handleSubmit (fra onSubmit) */
                        className="bg-green-400 hover:bg-green-500 text-white p-2 rounded-lg"
                        type="submit">Logg inn
                    </button>
                </form>
            </Card>
        </div>
    );


}

// Eksporterer AccountLookUp for bruk andre steder
export default AccountLookUp;