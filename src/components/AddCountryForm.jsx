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
        <><h1 className="mb-8 mt-20 text-4xl font-extrabold ">My Countries</h1>
        <div className="m-l5 mt-20" style={{ textAlign: 'left', paddingLeft: '20px' }}>
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter country name" 
            />
            <button type="submit">Add Country</button>
        </form>
        </div>
        </>
    );
};

export default AddCountryForm;