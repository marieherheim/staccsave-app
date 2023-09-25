import React, { useState } from 'react';
import { Card } from "./Card"
import companyLogo from './assets/staccsave-long-header-logo.png';

const AccountLookUp = ( { submit }) => {
    const [name, setName] = useState('');
    const [accountId, setAccountId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        submit(name, accountId);
    }

    return (
        <div>
            <div className="flex flex-col items-center">
                <br/>
                <img src={companyLogo} alt="Company Logo" className="max-w-full h-auto"/>
            </div>
            <Card className="bg-orange-400 p-6 rounded-lg shadow-xl  max-w-lg mx-auto mt-10 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s;">
                <form
                    className="flex flex-col justify-center items-center gap-4"
                    onSubmit={handleSubmit}>
                    <label htmlFor="name" className="font-bold text-gray-700"> Fornavn: </label>
                    <input
                        className="w-[350px] text-center border-2 border-gray-200 p-2 rounded-md shadow-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-orange-500 placeholder-gray-400"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Ditt navn" // Her skal brukeren fylle inn sitt fornavn
                        required
                    />
                    <label htmlFor="accountId" className="font-bold text-gray-700"> Bruker ID: </label>
                    <input
                        className="w-[350px] text-center border-2 border-gray-200 p-2 rounded-md shadow-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-orange-500 placeholder-gray-400"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        placeholder="Din bruker ID" // Her skal brukeren fylle inn den IDen som er knyttet til kontoen
                        required
                    />
                    <button className="bg-green-400 hover:bg-green-500 text-white p-2 rounded-lg"
                            type="submit">Logg inn
                    </button>
                </form>
            </Card>
        </div>
    );


}

export default AccountLookUp;