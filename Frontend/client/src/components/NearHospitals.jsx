import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NearHospitals = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        // Function to get user's location
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const location = {
                            lat: pos.coords.latitude,
                            lon: pos.coords.longitude // Changed from log to lon to match the URL
                        };
                        setUserLocation(location);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            } else {
                console.log("No geolocation");
            }
        };

        getUserLocation();
    }, []);

    useEffect(() => {
        if (userLocation) {
            getNearestHospitals();
        }
    }, [userLocation]);

    async function getNearestHospitals() {
        const { lat, lon } = userLocation;
    
        const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = `https://atlas.mappls.com/api/places/nearby/json?keywords=hospital&refLocation=${lat},${lon}&region=IND&sortBy=dist%3Aasc&searchBy=dist`;
        const url = corsAnywhereUrl + apiUrl;
        const token = "05f1dc35-14bf-42cd-9ef2-d7187954429e"
    
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Origin': 'http://localhost:5173', 
            'X-Requested-With': 'XMLHttpRequest'
        };
    
        try {
            //const response = await axios.get(url, { headers });
            console.log(response.data);
            setHospitals(response.data.suggestedLocations) 
            
        } catch (error) {
            console.error('Error fetching hospitals:', error);
        }
    }
    
    // Function to render hospital details
    const renderHospitalDetails = (hospital) => {
        return (
            <div key={hospital.eLoc} className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">{hospital.placeName}</h2>
                <p className="text-gray-600 mb-2"><span className="font-semibold">Distance:</span> {hospital.distance} meters</p>
                <p className="text-gray-600"><span className="font-semibold">Address:</span> {hospital.placeAddress}</p>
                {/* Add more details as needed */}
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Nearest Hospitals</h1>
            {hospitals.map(renderHospitalDetails)}
        </div>
    );
}

export default NearHospitals;
