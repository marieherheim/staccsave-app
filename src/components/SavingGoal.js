// Importerer nødvendige filer og moduler:
import React, { useState } from 'react';
import { Card } from "./Card";

// Initialiserer SavingGoal komponenten (tar to props: currentBalance, updateBalance)
const SavingGoal = ({ currentBalance, updateBalance }) => {
    const [goal, setGoal] = useState(0); // Oppretter variabel og settfunksjon for brukerens sparemål
    const [amountToDeposit, setAmountToDeposit] = useState(0); // Oppretter variabel og settfunksjon for summen som skal spares/settes inn på konto

    /* Håndterer innsetting av penger på konto.
    Oppdaterer saldoen dersom brukeren setter inn penger (ny saldo = opprinnelig saldo + sum innsatt) */
    const handleDeposit = () => {
        updateBalance(parseFloat(currentBalance) + parseFloat(amountToDeposit));
        setAmountToDeposit(0); // Setter amountToDeposit tilbake til 0 slik at det er klart for ny innsetting
    }

    /* Rendrer en "Card" komponent som inneholder ulike UI komponenter der:
     1. brukeren kan inputte personlig sparemål
     2. differansen mellom brukerens saldo og sparemålet kalkuleres
     3. brukeren kan sette inn penger på kontoen for å ta et skritt mot sparemålet
     4. saldoen til brukeren oppdateres (foreløpig kun på siden og ikke i datasettet, ville egentlig gjøre begge deler)
     */
    return (
        <Card className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
            <h2 className="font-bold text-purple-700">Sett et sparemål</h2>
            <div>
                <label htmlFor="goal" className="font-light">Hva er ditt personlige sparemål? <br/> Fyll inn her: <br/> </label>
                <input
                    className="w-[350px] text-center border-2 border-purple-200 p-1 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-purple-500 placeholder-gray-400"
                    type="number"
                    value={goal} // Verdien i inputfeltet blir bundet til state via value attributtet value={goal}
                    onChange={(event) => setGoal(event.target.value)} // Setter verdien i input feltet til å være sparemålet (goal)
                    placeholder="20000"
                />
                <p className="font-light">Du har {goal - currentBalance} kr igjen for å nå målet.</p>
            </div>
            <hr />
            <div>
                <p className="font-light">Ta et skritt mot ditt sparemål i dag!</p>
                <label htmlFor="deposit" className="font-light">Sett inn beløp til sparing: </label>
                <input
                    className="w-[350px] text-center border-2 border-purple-200 p-1 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-purple-500 placeholder-gray-400"
                    type="number"
                    value={amountToDeposit} // Verdien i inputfeltet blir bundet til state via value attributtet value={amountToDeposit}
                    onChange={(event) => setAmountToDeposit(event.target.value)} // Setter verdien i input feltet til å være sum som skal settes inn
                    placeholder="100"
                />
                <br/>
                <button
                    onClick={handleDeposit} // ved klikk så settes penger inn/saldoen oppdateres
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg mt-5">

                    Sett inn

                </button>
            </div>
        </Card>
    );
}

// Eksporterer SavingGoal for bruk andre steder
export default SavingGoal;
