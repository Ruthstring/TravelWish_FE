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
                    <div className="card flex mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <li key={country.id}>
                        <h1>{country.country_name}</h1>
                        
                        <img 
                            src={country.image_url || defaultImage} 
                            alt={country.country_name} 
                            onClick={() => handleImageClick(country.id)}
                            style={{cursor:"pointer"}}
                            
                        />
                       
                        <input 
                            id={`file-input-${country.id}`} 
                            type="file" 
                            onChange={(e) => handleImageUpload(e, country.id)} 
                            style={{ display: 'none' }} 
                        />
                        <div className="button-line">
                            <button className="btn-primary"
                            onClick={() => updateVisitedStatus(country.id, true)}>Visited
                            </button>
                             <button className="btn-remove" onClick={() => deleteCountry(country.id)}>
                                <span>remove</span>
                                <div className="icon">
                                    <i className="fa fa-remove"></i>
                                    <i className="fa fa-check"></i>
                                </div>
                            </button>
                            </div>
                        {/* <button className="btn-remove"
                            onClick={() => deleteCountry(country.id)}>Delete</button> */}
                    </li>
                    </div>
                ))}
            </ul>
            <h2>Visited</h2>
            <ul>
                {visitedCountries.map(country => (
                    <div className="card flex mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                    <li key={country.id}>
                        <h1>{country.country_name}</h1>
                        <img 
                            src={country.image_url || defaultImage} 
                            alt={country.country_name} 
                            onClick={() => handleImageClick(country.id)}
                            style={{cursor:"pointer"}}
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
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;