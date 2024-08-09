import React, { useState } from 'react';

const AddCountryForm = ({ addCountry }) => {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name) {
            addCountry(name);
            setName('');
        }
    };

    return (
        <>
            <h1 className="mb-8 mt-10 text-4xl font-extrabold">My Countries</h1>
            <div className=" ">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto  flex gap-4">
                <div className="relative flex items-center w-full h-14 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-14 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        className=" h-full w-full outline-none text-lg text-gray-700 pr-2"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter country name"
                    />
                </div>
                <button type="submit" className="btn-primary mt-4 p-6  text-white rounded-lg whitespace-nowrap flex-shrink-0 w-auto">
                    Add Country
                </button>
            </form>
            </div>
        </>
    );
};

export default AddCountryForm;

