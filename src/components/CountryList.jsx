import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import defaultImage from "../assets/default-image.jpg";

const CountryList = ({ countries, updateVisitedStatus, deleteCountry, uploadImage }) => {
    const toVisitCountries = countries.filter(country => !country.visited);
    const visitedCountries = countries.filter(country => country.visited);

    const handleImageUpload = (event, countryId) => {
        const file = event.target.files[0];
        uploadImage(file, countryId);
    };

    const handleImageClick = (countryId) => {
        document.getElementById(`file-input-${countryId}`).click();
    };

    return (
        <div>
            <h1 className="font-bold"style={{ textAlign: 'left', paddingLeft: '75px',paddingTop:"60px" }}>To Visit</h1>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[90%]"
            >
                {toVisitCountries.map(country => (
                    <SwiperSlide key={country.id}>
                        <div className="card flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl">
                            <h1 className="card-title">{country.country_name}</h1>
                            <div className="image-container">
                                <img 
                                    src={country.image_url || defaultImage} 
                                    alt={country.country_name} 
                                    onClick={() => handleImageClick(country.id)}
                                    className="country-image"
                                    style={{ cursor: "pointer"}}
                                />
                                <input 
                                    id={`file-input-${country.id}`} 
                                    type="file" 
                                    onChange={(e) => handleImageUpload(e, country.id)} 
                                    style={{ display: 'none' }} 
                                />
                            </div>
                            <div className="button-line mt-4 flex justify-between">
                                <button className="btn-primary" onClick={() => updateVisitedStatus(country.id, true)}>
                                    Visited
                                </button>
                                <button className="btn-remove" onClick={() => deleteCountry(country.id)}>
                                    <span>Remove</span>
                                    <div className="icon">
                                        <i className="fa fa-remove"></i>
                                        <i className="fa fa-check"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <h1 className="font-bold"style={{ textAlign: 'left', paddingLeft: '75px',paddingTop:"60px" }} >Visited</h1>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[90%]"
            >
                {visitedCountries.map(country => (
                    <SwiperSlide key={country.id}>
                        <div className="card flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl">
                            <h1 className="card-title">{country.country_name}</h1>
                            <div className="image-container">
                                <img 
                                    src={country.image_url || defaultImage} 
                                    alt={country.country_name} 
                                    onClick={() => handleImageClick(country.id)}
                                    style={{ cursor: "pointer"}}
                                    className="country-image"
                                />
                                <input 
                                    id={`file-input-${country.id}`} 
                                    type="file" 
                                    onChange={(e) => handleImageUpload(e, country.id)} 
                                    style={{ display: 'none' }} 
                                    
                                />
                            </div>
                            <div className="button-line mt-4">
                                <button className="btn-primary" 
                                        onClick={() => updateVisitedStatus(country.id, false)}>
                                    Mark as Unvisited
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CountryList;


// const CountryList = ({ countries, updateVisitedStatus, deleteCountry, uploadImage }) => {
//     const toVisitCountries = countries.filter(country => !country.visited);
//     const visitedCountries = countries.filter(country => country.visited);

//     const handleImageUpload = (event, countryId) => {
//         const file = event.target.files[0];
//         console.log('File selected:', file);
//         console.log('Country ID:', countryId);
//         uploadImage(file, countryId);
//     };

//     const handleImageClick = (countryId) => {
//         document.getElementById(`file-input-${countryId}`).click();
//     };

//     return (
//         <div>
//             <h2>To Visit</h2>
//             <Swiper
//                 breakpoints={{
//                     340: {
//                         slidesPerView: 2,
//                         spaceBetween: 15,
//                     },
//                     700: {
//                         slidesPerView: 3,
//                         spaceBetween: 15,
//                     },
//                     1024: {
//                         slidesPerView: 4,
//                         spaceBetween: 20,
//                     },
//                 }}
//                 freeMode={true}
//                 pagination={{ clickable: true }}
//                 modules={[FreeMode, Pagination]}
//                 className="max-w-[90%] lg:max-w-[80%]"
//             >
//                 {toVisitCountries.map(country => (
//                     <SwiperSlide key={country.id}>
//                         <div className="card flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl">
//                             <h1>{country.country_name}</h1>
//                             <img 
//                                 src={country.image_url || defaultImage} 
//                                 alt={country.country_name} 
//                                 onClick={() => handleImageClick(country.id)}
//                                 style={{ cursor: "pointer", width: '100%', height: 'auto' }}
//                             />
//                             <input 
//                                 id={`file-input-${country.id}`} 
//                                 type="file" 
//                                 onChange={(e) => handleImageUpload(e, country.id)} 
//                                 style={{ display: 'none' }} 
//                             />
//                             <div className="button-line mt-4 flex justify-between">
//                                 <button className="btn-primary" onClick={() => updateVisitedStatus(country.id, true)}>
//                                     Visited
//                                 </button>
//                                 <button className="btn-remove" onClick={() => deleteCountry(country.id)}>
//                                     <span>Remove</span>
//                                     <div className="icon">
//                                         <i className="fa fa-remove"></i>
//                                         <i className="fa fa-check"></i>
//                                     </div>
//                                 </button>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             <h2>Visited</h2>
//             <Swiper
//                 breakpoints={{
//                     340: {
//                         slidesPerView: 2,
//                         spaceBetween: 15,
//                     },
//                     700: {
//                         slidesPerView: 3,
//                         spaceBetween: 15,
//                     },
//                     1024: {
//                         slidesPerView: 4,
//                         spaceBetween: 20,
//                     },
//                 }}
//                 freeMode={true}
//                 pagination={{ clickable: true }}
//                 modules={[FreeMode, Pagination]}
//                 className="max-w-[90%] lg:max-w-[80%]"
//             >
//                 {visitedCountries.map(country => (
//                     <SwiperSlide key={country.id}>
//                         <div className="card flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl">
//                             <h1>{country.country_name}</h1>
//                             <img 
//                                 src={country.image_url || defaultImage} 
//                                 alt={country.country_name} 
//                                 onClick={() => handleImageClick(country.id)}
//                                 style={{ cursor: "pointer", width: '100%', height: 'auto' }}
//                             />
//                             <input 
//                                 id={`file-input-${country.id}`} 
//                                 type="file" 
//                                 onChange={(e) => handleImageUpload(e, country.id)} 
//                                 style={{ display: 'none' }} 
//                             />
//                             <div className="button-line mt-4">
//                                 <button className="btn-primary" onClick={() => updateVisitedStatus(country.id, false)}>
//                                     Mark as Unvisited
//                                 </button>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default CountryList;


// import React from 'react';
// import defaultImage from "../assets/default-image.jpg"

// const CountryList = ({ countries, updateVisitedStatus, deleteCountry, uploadImage }) => {
//     const toVisitCountries = countries.filter(country => !country.visited);
//     const visitedCountries = countries.filter(country => country.visited);

//     // Functionality to upload picture:
//     const handleImageUpload = (event, countryId) => {
//         const file = event.target.files[0];
//         console.log('File selected:', file);
//         console.log('Country ID:', countryId);
//         uploadImage(file, countryId);
//     };

//     // Function to handle image click
//     const handleImageClick = (countryId) => {
//         document.getElementById(`file-input-${countryId}`).click();
//     };

  
//     return (
//         <div>
//             <h2>To Visit</h2>
//             <ul>
//                 {toVisitCountries.map(country => (
//                     <div className="card flex mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
//                     <li key={country.id}>
//                         <h1>{country.country_name}</h1>
                        
//                         <img 
//                             src={country.image_url || defaultImage} 
//                             alt={country.country_name} 
//                             onClick={() => handleImageClick(country.id)}
//                             style={{cursor:"pointer"}}
                            
//                         />
                       
//                         <input 
//                             id={`file-input-${country.id}`} 
//                             type="file" 
//                             onChange={(e) => handleImageUpload(e, country.id)} 
//                             style={{ display: 'none' }} 
//                         />
//                         <div className="button-line">
//                             <button className="btn-primary"
//                             onClick={() => updateVisitedStatus(country.id, true)}>Visited
//                             </button>
//                              <button className="btn-remove" onClick={() => deleteCountry(country.id)}>
//                                 <span>remove</span>
//                                 <div className="icon">
//                                     <i className="fa fa-remove"></i>
//                                     <i className="fa fa-check"></i>
//                                 </div>
//                             </button>
//                             </div>
//                         {/* <button className="btn-remove"
//                             onClick={() => deleteCountry(country.id)}>Delete</button> */}
//                     </li>
//                     </div>
//                 ))}
//             </ul>
//             <h2>Visited</h2>
//             <ul>
//                 {visitedCountries.map(country => (
//                     <div className="card flex mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
//                     <li key={country.id}>
//                         <h1>{country.country_name}</h1>
//                         <img 
//                             src={country.image_url || defaultImage} 
//                             alt={country.country_name} 
//                             onClick={() => handleImageClick(country.id)}
//                             style={{cursor:"pointer"}}
//                         />
//                         <input 
//                             id={`file-input-${country.id}`} 
//                             type="file" 
//                             onChange={(e) => handleImageUpload(e, country.id)} 
//                             style={{ display: 'none' }} 
//                         />
//                         <button className="btn-primary"
//                             onClick={() => updateVisitedStatus(country.id, false)}>Mark as Unvisited</button>
//                     </li>
//                     </div>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CountryList;