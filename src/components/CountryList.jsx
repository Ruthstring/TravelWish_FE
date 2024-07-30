import React from 'react';
import defaultImage from "../assets/default-image.jpg"

const CountryList = ({ countries, updateVisitedStatus, deleteCountry, uploadImage }) => {
    const toVisitCountries = countries.filter(country => !country.visited);
    const visitedCountries = countries.filter(country => country.visited);

    // Functionality to upload picture:
    const handleImageUpload = (event, countryId) => {
        const file = event.target.files[0];
        console.log('File selected:', file);
        console.log('Country ID:', countryId);
        uploadImage(file, countryId);
    };

    // Function to handle image click
    const handleImageClick = (countryId) => {
        document.getElementById(`file-input-${countryId}`).click();
    };

  
    return (
        <div>
            <h2>To Visit</h2>
            <ul>
                {toVisitCountries.map(country => (
                    <div className="card relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <li key={country.id}>
                        {country.country_name}
                        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                        <img 
                            src={country.image_url || defaultImage} 
                            alt={country.country_name} 
                            style={{ width: '100px', height: 'auto', cursor: 'pointer' }} 
                            onClick={() => handleImageClick(country.id)}
                        />
                        </div>
                        <input 
                            id={`file-input-${country.id}`} 
                            type="file" 
                            onChange={(e) => handleImageUpload(e, country.id)} 
                            style={{ display: 'none' }} 
                        />
                        <button className="btn-primary"
                            onClick={() => updateVisitedStatus(country.id, true)}>Mark as Visited</button>
                             <button className="btn-remove" onClick={() => deleteCountry(country.id)}>
                                <span>remove</span>
                                <div className="icon">
                                    <i className="fa fa-remove"></i>
                                    <i className="fa fa-check"></i>
                                </div>
                            </button>
                        {/* <button className="btn-remove"
                            onClick={() => deleteCountry(country.id)}>Delete</button> */}
                    </li>
                    </div>
                ))}
            </ul>
            <h2>Visited</h2>
            <ul>
                {visitedCountries.map(country => (
                    <li key={country.id}>
                        {country.country_name}
                        <img 
                            src={country.image_url || defaultImage} 
                            alt={country.country_name} 
                            style={{ width: '100px', height: 'auto', cursor: 'pointer' }} 
                            onClick={() => handleImageClick(country.id)}
                        />
                        <input 
                            id={`file-input-${country.id}`} 
                            type="file" 
                            onChange={(e) => handleImageUpload(e, country.id)} 
                            style={{ display: 'none' }} 
                        />
                        <button className="btn-primary"
                            onClick={() => updateVisitedStatus(country.id, false)}>Mark as Unvisited</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;