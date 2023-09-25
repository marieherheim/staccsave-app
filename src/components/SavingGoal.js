import React, { useState } from 'react';
import { Card } from "./Card";

const SavingsGoal = ({ currentBalance, updateBalance }) => {
    const [goal, setGoal] = useState(0);
    const [amountToDeposit, setAmountToDeposit] = useState(0);

    const handleDeposit = () => {
        updateBalance(parseFloat(currentBalance) + parseFloat(amountToDeposit));
        setAmountToDeposit(0);
    }

    return (
        <Card className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
            <h2 className="font-bold text-purple-700">Sett et sparemål</h2>
            <div>
                <label htmlFor="goal" className="font-light">Hva er ditt personlige sparemål? <br/> Fyll inn her: <br/> </label>
                <input
                    className="w-[350px] text-center border-2 border-purple-200 p-1 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 hover:border-purple-500 placeholder-gray-400"
                    type="number"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
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
                    value={amountToDeposit}
                    onChange={(e) => setAmountToDeposit(e.target.value)}
                    placeholder="100"
                />
                <br/>
                <button onClick={handleDeposit} className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg mt-5">Sett inn</button>
            </div>
        </Card>
    );
}

export default SavingsGoal;
