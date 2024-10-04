import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Puff } from 'react-loader-spinner';


import CountryList from './components/CountryList';
import AddCountryForm from './components/AddCountryForm';
import Map from "./components/Map";
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading state

   

    const fetchCountries = async () => {
        try {
            
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/countries`);
            setCountries(response.data);
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error('Error fetching countries:', error);
            setLoading(false); // Set loading to false in case of error
        }
    };

    useEffect(() => {
        fetchCountries();
    }, []);

    const addCountry = async (name) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/countries`, { country_name: name, visited: false });
            setCountries([...countries, response.data]);
        } catch (error) {
            console.error('Error adding country:', error);
        }
    };

    const deleteCountry = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/countries/${id}`);
            setCountries(countries.filter(country => country.id !== id));
        } catch (error) {
            console.error('Error deleting country:', error);
        }
    };

    const updateVisitedStatus = async (id, visited) => {
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/countries/${id}`, { visited });
            setCountries(countries.map(country =>
                country.id === id ? { ...country, visited: response.data.visited } : country
            ));
        } catch (error) {
            console.error('Error updating visited status:', error);
        }
    };

    const uploadImage = async (file, countryId) => {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('countryId', countryId);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/pictures/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { url } = response.data;

            await axios.put(`${import.meta.env.VITE_API_URL}/countries/${countryId}`, { image_url: url });
            fetchCountries();
        } catch (error) {
            console.error('Image upload error:', error);
        }
    };

    // Show the loading spinner while data is being fetched
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Puff
                    height={100}
                    width={100}
                    color="#00BFFF"
                    ariaLabel="loading"
                />
            </div>
        );
    }

    return (
        <div>
            <Hero />
            <AddCountryForm addCountry={addCountry} />
            <CountryList countries={countries} deleteCountry={deleteCountry} updateVisitedStatus={updateVisitedStatus} uploadImage={uploadImage} />
            <Map />
            <Footer />
        </div>
    );
};

export default App;