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
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter country name" 
            />
            <button type="submit">Add Country</button>
        </form>
    );
};

export default AddCountryForm;