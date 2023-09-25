import React, { useState } from 'react';
import transactionsData from "../data/transactions.json";
import accountsData from "../data/accounts.json";
import {Card} from "./Card";

const TransactionList = ( { transactions } ) => {
    return (
        <div className="flex flex-col justify-center">
            <Card className="bg-gray-100 p-6 rounded-lg shadow-md w-[1000px] mx-auto mt-10 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;">
                <h3 className="font-bold drop-shadow-lg">Transaksjoner</h3>
                <table className="table-auto md:m-10 m-5 rounded-lg">
                    <thead>
                    <tr>
                        <th className="p-6">Dato</th>
                        <th className="p-6">Beskrivelse</th>
                        <th className="p-6">Beløp</th>
                        <th className="p-6">Saldo etter transaksjon</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction, idx) => (
                        <tr key={transaction.id}>
                            <td className="p-6">{transaction.date}</td>
                            <td className="p-6">{transaction.description}</td>
                            <td className="p-6">{transaction.amount} kr</td>
                            <td className="p-6"> {/* Plassholder for balanse etter transaksjon */}
                                {/* Denne verdien må regnes ut */}
                                TBD
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

export default TransactionList;