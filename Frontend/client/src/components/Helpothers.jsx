import React from 'react';
import Navbar from './Navbar';
import ambulance from '../assets/ambulance.png';
import escort from '../assets/escort.png';
import mechanic from '../assets/mechanic.png';
import { Link } from 'react-router-dom';

const Helpothers = () => {
    return (
        <>
            <h1 className='font-bold text-4xl text-center mt-36'>Choose An Emergency</h1>
              <div className='flex flex-row justify-center gap-12 mt-20'>
               <Link to='/medical-emergency-to'>
                    <div className='border-gray-300 border w-64 p-2 h-80 rounded-md hover:shadow-red-300 hover:shadow-xl  transform hover:translate-y-[-10px] transition-all duration-300'>
                            <img src={ambulance} className='h-40 w-40 mx-auto'></img>
                            <h2 className='text-xl font-bold text-center mt-2'>Medical Emergency</h2>
                            <p className='w-40 mt-3 text-justify mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </Link>

                <Link to='/roadside-assistance-to'>
                <div className='border-gray-300 border w-64 p-2 h-80 rounded-md hover:shadow-yellow-300 hover:shadow-xl  transform hover:translate-y-[-10px] transition-all duration-300'>
                    <img src={mechanic} className='h-40 w-40 mx-auto'></img>
                    <h2 className='text-xl font-bold text-center mt-2'>Roadside Assistance</h2>
                    <p className='w-40 mt-3 text-justify mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                </Link>

                <Link to='/safety-escort-to'><div className='border-gray-300 border w-64 p-2 h-80 rounded-md hover:shadow-green-300 hover:shadow-xl  transform hover:translate-y-[-10px] transition-all duration-300'>
                    <img src={escort} className='h-40 w-40 mx-auto'></img>
                    <h2 className='text-xl font-bold text-center mt-2'>Personal Safety Escort</h2>
                    <p className='w-40 mt-3 text-justify mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                </Link>
            </div>
        </>
    )
}

export default Helpothers;
