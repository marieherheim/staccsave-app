import logo from './logo.svg';
// Importerer nødvendige filer og moduler:
import './App.css';
import React, {useEffect, useState} from 'react';
import AccountLookUp from "./components/AccountLookUp";
import AccountOverview from "./components/AccountOverview";
import SavingGoal from "./components/SavingGoal";
import accountsData from "./data/accounts.json";

// Oppretter App metoden med to useState hooks og handleLookUp funksjonen):
function App() {
  // accountInfo lagrer informasjon om brukeren
  const [accountInfo, setAccountInfo] = useState(null);
  // currentBalance lagrer den nåværende saldoen
  const [currentBalance, setCurrentBalance] = useState(0); // Brukes i SavingGoal

  const [transact, setTransact] = useState(null); // holder transaksjoner fra backend
  const [renderSaving, setRenderSaving] = useState(false);

  // fetch transaksjoner fra backend
  // dette kan bygges videre på og brukes i for eksempel TransactionList og SavingGoal, slik at endringene lagres selv etter utlogging
  async function transactionTest() {
    const response = await fetch('http://0.0.0.0:8081/amount');
    const transactions = await response.json();

    setTransact(transactions);

    console.log(transactions);
  }

  // kaller på transactionTest funksjonen slik at det inne i funksjonen utføres
  useEffect(() => {
    transactionTest()
  }, []);

  // handleLookUp funksjonen oppdaterer accountInfo og currentBalance basert på mottatt name og accountId.
  const handleLookUp =  (name, accountId) => {
    // Sender navn og brukerID til setAccountInfo for å oppdatere accountInfo:
    setAccountInfo({name, accountId});
    /* Henter ut brukeren sin saldo fra datasettet "accounts.json" når brukeren logger inn, og sender det til
       setCurrentBalance for å oppdatere currentBalance, som senere brukes i blandt annet SavingGoal */
    const account = accountsData.accounts.find(acc => acc.id === accountId && acc.owner === name);
    if (account) {
      console.log("Account");
      setCurrentBalance(account.balance);
      setRenderSaving(true);
    }else{
      setRenderSaving(false);
    }
  }

  /* Renderen avgjør hva som skal vises på skjermen.
  Hvis accountInfo ikke er satt, vises AccountLookUp-komponenten.
  Når en bruker er valgt, vises AccountOverview (inkl. TransactionList) og SavingGoal komponentene.*/
  return (
      <div className="App">
        {!accountInfo &&( <AccountLookUp submit={handleLookUp}/>)}
        {accountInfo && (
            <>
              <AccountOverview
                  name={accountInfo.name}
                  accountId={accountInfo.accountId}
                  currentBalance={currentBalance}
              />
              {renderSaving && (

                  <SavingGoal currentBalance={currentBalance} updateBalance={setCurrentBalance} />
              )}

              <button
                  onClick={() => setAccountInfo(null)}
                  /* Ved klikk på knappen settes accountInfo til å være null igjen.
                  Det er satt til null fordi da rendres innloggingssiden igjen og fordi brukeren sin info skal da fjernes.) */
                  className="bg-green-400 hover:bg-green-500 text-white p-2 rounded-lg mt-[20px]"
              >
                Gå tilbake
              </button>
            </>
        )}

      </div>
  );
}

// Eksporterer App for bruk andre steder
export default App;
