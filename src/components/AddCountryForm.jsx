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
            <h1 className="mb-8 mt-20 text-4xl font-extrabold">My Countries</h1>
            <div classname="flex gap-4 ">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto  flex gap-4">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        className="peer h-full w-full outline-none text-md text-gray-700 pr-2"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter country name"
                    />
                </div>
                <button type="submit" className="btn-primary mt-4 p-6 h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Add Country
                </button>
            </form>
            </div>
        </>
    );
};

export default AddCountryForm;

// import React, { useState } from 'react';

// const AddCountryForm = ({ addCountry }) => {
//     const [name, setName] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (name) {
//             addCountry(name);
//             setName('');
//         }
//     };

//     return (
//         <><h1 className="mb-8 mt-20 text-4xl font-extrabold ">My Countries</h1>
//         <div className="m-l5 mt-20" style={{ textAlign: 'left', paddingLeft: '20px' }}>
        
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//                 placeholder="Enter country name" 
//             />
//             <button type="submit">Add Country</button>
//         </form>
//         </div>
//         </>
//     );
// };

// export default AddCountryForm;