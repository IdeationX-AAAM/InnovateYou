import React, { useState } from 'react';
import Navbar from './Navbar';
import ambulance from '../assets/ambulance.png';
import escort from '../assets/escort.png';
import mechanic from '../assets/mechanic.png';
import { Link, useNavigate } from 'react-router-dom';


const Helpothers = () => {
    const [callInitiated, setCallInitiated] = useState(false);
    const navigate = useNavigate();

    // const handleCallInitiation = async () => {
    //     try {
    //         const accountSid = "AC9c4fca9a095a4130f6dfaf1356644c1d";
    //         const authToken = process.env.TWILIO_AUTH_TOKEN;
    //         const client = require("twilio")(accountSid, authToken);
            
    //         client.calls.create({
    //           url: "http://demo.twilio.com/docs/voice.xml",
    //           to: "+919172406138",
    //           from: "+16187163083",
    //         })
    //         .then(call => console.log(call.sid));
    
    //         // Set callInitiated to true after successfully initiating the call
    //         setCallInitiated(true);
    
    //         // Wait for 14 seconds before redirecting to the '/send-email' path
    //         setTimeout(() => {
    //             navigate('/send-email');
    //         }, 14000);
    //     } catch (error) {
    //         console.error('Error initiating call:', error);
    //         // Handle errors
    //     }
    // };

    return (
        <>
            <h1 className='font-bold text-4xl text-center mt-36'>Choose An Emergency</h1>
            <div className='flex flex-row justify-center gap-12 mt-20'>
                <div  style={{ cursor: 'pointer' }}>
                    <div className='border-gray-300 border w-64 p-2 h-80 rounded-md hover:shadow-red-300 hover:shadow-xl transform hover:translate-y-[-10px] transition-all duration-300'>
                        <img src={ambulance} className='h-40 w-40 mx-auto' alt="Ambulance"></img>
                        <h2 className='text-xl font-bold text-center mt-2'>Medical Emergency</h2>
                        <p className='w-40 mt-3 text-justify mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>

                <Link to='/roadside-assistance-to'>
                    <div className='border-gray-300 border w-64 p-2 h-80 rounded-md hover:shadow-yellow-300 hover:shadow-xl transform hover:translate-y-[-10px] transition-all duration-300'>
                        <img src={mechanic} className='h-40 w-40 mx-auto' alt="Mechanic"></img>
                        <h2 className='text-xl font-bold text-center mt-2'>Roadside Assistance</h2>
                        <p className='w-40 mt-3 text-justify mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </Link>

                <Link to='/safety-escort-to'>
                    <div className='border-gray-300 border w-64 p-2 h-80 rounded-md hover:shadow-green-300 hover:shadow-xl transform hover:translate-y-[-10px] transition-all duration-300'>
                        <img src={escort} className='h-40 w-40 mx-auto' alt="Escort"></img>
                        <h2 className='text-xl font-bold text-center mt-2'>Personal Safety Escort</h2>
                        <p className='w-40 mt-3 text-justify mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Helpothers;
