// Importerer nødvendige filer og moduler:
import React, { useState, useEffect } from 'react';
import accountsData from '../data/accounts.json';
import transactionsData from "../data/transactions.json";
import TransactionList from "./TransactionList";
import {Card} from "./Card";

// Initialiserer AccountOverview komponenten (tar tre props: name, accountId, og currentBalance)
const AccountOverview = ({name, accountId, currentBalance}) => {

    // Oppretter depositAmount og transactions, og funksjoner for å oppdatere disse.
    const [depositAmount, setDepositAmount] = useState(0);
    const [transactions, setTransactions] = useState(null);

    // Finner riktig brukerkonto basert på name og accountId (søker gjennom kontoer i "accounts.json")
    const account = accountsData.accounts.find(
        (acc) => acc.id === accountId && acc.owner === name
    );

    // Filtrerer og henter ut transaksjoner for en spesifikk bruker (den innloggede brukeren) fra "transactions.json":
    const getTransactions = (accountId) => {
        return transactionsData.transactions.filter(trans => trans.account_id === account.id);
    }
    // Hvis brukeren finnes: useEffect setter accTransactions til å inneholde transaksjonene som ble hentet ut i getTransactions.
    useEffect(() => {
        // Sjekker om account er tilgjengelig og henter ut transaksjoner knyttet til den nåværende kontoen.
        if(account){
            // Lagrer transaksjonene i accTransactions.
            const accTransactions = getTransactions(account.id);
            /* Bruker setTransactions(() => accTransactions) for å oppdatere verdien av statevariabelen transactions,
            med transaksjonene knyttet til brukeren, som er hentet fra datasettet "transactions.json".
            Dette vil oppdatere verdien av transactions og re-rendre komponenten:*/
            setTransactions(() => accTransactions);
            // Oppdaterer account.balance med currentBalance
            account.balance = currentBalance;
        };

        /* [account, currentBalance] Sikrer reaksjon på endring i relevante data og unødvendig re-rendringer:
       Koden kjøres når komponenten først rendres (mount), og deretter hver gang enten account eller currentBalance endres,
       fordi de er avhengighetene i avhengighetslisten til useEffect hooken: */
    }, [account, currentBalance])
    const handleDeposit = () => {

    }

    // Koden innenfor {} (JSX-blokken) rendrer UI-elementer avhengig av om brukerkontoen eksisterer eller ikke.

    // Først: Sjekker om account er falsy, og returnerer en feilmelding dersom den er det.
    if (!account) {
        return <p>Kunne ikke finne bruker. <br /> Vennligst sjekk at du har riktig informasjon og prøv igjen.</p>;
    }

    /* Dersom informasjonen er tilstede og riktig, (account ikke falsy) så
    rendres kontooversikt, og TransactionList hvis det finnes transaksjoner: */
    return (
        <>
            <Card className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;">
                <h2 className="font-bold drop-shadow-lg">Kontooversikt for {account.owner}</h2>
                <div className="flex justify-start w-[450px] bg-orange-200 rounded-lg shadow-md">

                    <p className="p-4">Kontonummer: {account.account_number}</p>

                    <p className="p-4">Saldo: {account.balance} kr</p>

                    <p className="p-4">Kontotype: {account.account_type}</p>
                </div>
            </Card>

            {transactions && (
                <TransactionList transactions={transactions} />
                /* Når TransactionList komponenten skal rendres så mottar den transactions som en prop,
                (transaksjonene til brukeren ble hentet ut og lagret i transactions tidligere i denne filen) */
            )}

        </>
    );

}

// Eksporterer AccountOverview for bruk andre steder
export default AccountOverview;