import logo from './logo.svg';
import './App.css';
import React, { useState } from'react';
import AccountLookUp from "./components/AccountLookUp";
import AccountOverview from "./components/AccountOverview";
import SavingGoal from "./components/SavingGoal";
import accountsData from "./data/accounts.json";

function App() {
  const [accountInfo, setAccountInfo] = useState(null);
  const [currentBalance, setCurrentBalance] = useState(0); // Brukes til å sette inn sparepenger på sparemålsiden


  const handleLookUp =  (name, accountId) => {
    setAccountInfo({name, accountId});
    // Registrerer brukeren sin saldo når den logger inn
    const account = accountsData.accounts.find(acc => acc.id === accountId && acc.owner === name);
    setCurrentBalance(account.balance);
  }

  /* Dersom navn og bruker ID ikke er hentet enda så aktiveres AccountLookUp,
   når det er hentet så kommer man til Account Overview siden. */
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

              <SavingGoal currentBalance={currentBalance} updateBalance={setCurrentBalance} />

              <button
                  onClick={() => setAccountInfo(null)}
                  className="bg-green-400 hover:bg-green-500 text-white p-2 rounded-lg mt-[20px]"
              >
                Gå tilbake
              </button>
            </>
        )}

      </div>
  );
}

export default App;
