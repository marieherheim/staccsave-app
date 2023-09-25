import React, { useState, useEffect } from 'react';
import accountsData from '../data/accounts.json';
import transactionsData from "../data/transactions.json";
import TransactionList from "./TransactionList";
import {Card} from "./Card";

const AccountOverview = ({name, accountId, currentBalance}) => {

    const [depositAmount, setDepositAmount] = useState(0);
    const [transactions, setTransactions] = useState(null);

    const account = accountsData.accounts.find(
        (acc) => acc.id === accountId && acc.owner === name
    );

    const getTransactions = (accountId) => {
        return transactionsData.transactions.filter(trans => trans.account_id === account.id);
    }

    useEffect(() => {
        if(account){
            const accTransactions = getTransactions(account.id);
            setTransactions(() => accTransactions);
            console.log(transactions)
            account.balance = currentBalance;
        };
    }, [account, currentBalance])
    const handleDeposit = () => {

    }

    if (!account) {
        return <p>Kunne ikke finne bruker. <br /> Vennligst sjekk at du har riktig informasjon og prøv igjen.</p>;
    }

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
            )}

        </>
    );



}

export default AccountOverview;