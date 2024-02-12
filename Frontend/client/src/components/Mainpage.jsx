import React from 'react';
import Navbar from './Navbar';
import './custom.css'
import commit from '../assets/ian-taylor-WyAKyPBs5Q8-unsplash.jpg'
import assistance from '../assets/examination.png'
import tfseven from '../assets/24-hours.png'
import siren from '../assets/siren.png'
import Timeline from './Timeline';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";



const Mainpage= ()=>{
    const{isAuthenticated,loginWithRedirect} = useAuth0();
    return(
        <>
            
            <div className='mt-48 ml-32'>
                <h1 className='' id='service-text'>Trust in Emergency</h1>
                <p className='ml-3'>In critical times rely on Tiru’s Emergency SOS Services.</p>
                <p className='ml-3'> We are here to provide immediate assistance in Pune , MH. </p>
                {isAuthenticated ? (
                    <>
                        <Link to='/help-me'>
                            <button className='help-me mt-10 ml-4'>Request Help For Me!</button>
                        </Link>
                        <Link to='/help-others'>
                            <button className='help-me mt-10 ml-4'>Request Help For Others!</button>
                        </Link>
                        <Link to='/hospital-near-me'>
                            <button className='help-me mt-10 ml-4'>Hospitals Near Me</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <button className='help-me mt-10 ml-4' onClick={() => loginWithRedirect()}>Request Help for Me!</button>
                        <button className='help-me mt-10 ml-4' onClick={() => loginWithRedirect()}>Request Help for Others!</button>
                        <button className='help-me mt-10 ml-4' onClick={() => loginWithRedirect()}>Hospitals Near Me</button>
                    </>
                )}
            </div>

            <div>
                <div className='mt-28 ml-32 flex flex-row '>
                    <img src={commit}  id='img1'></img>
                    <div className='ml-16'>
                        <div className='flex flex-row '>
                            <h2 className='text-xl text-green-400' id='about-us'>About Us</h2>
                            <div className='h-1 w-36 bg-green-400 mt-4 ml-2'></div>
                        </div>

                        <h1 id='commited'>Commited to Exceptional</h1>
                        <div className='w-96 mt-5'>
                        <p>Introducing Tiru, the leading provider of emergency SOS solutions is Pune, MH. Our innovative technology and quick response team ensure that help is just one click away. </p>
                    </div></div>
                </div>
            </div>
            

            <div className='flex flex-row mt-20 ml-32'>
                <h2 className='text-xl text-green-400' id='about-us'>YOUR SAFETY, OUR PRIORITY</h2>
                <div className='h-1 w-36 bg-green-400 mt-4 ml-2'></div>
            </div>

             <h1 id='services' className='pl-32'>Our Services</h1>
             <hr className="border-t-4 border-blue-500 bg-blue-500 rounded-full w-40 ml-32" />

            <div className='ml-32 mt-8' id='our-services'>
             <p>At all in one transportation , we specialize in providing top-notch 24x7 emergency medical transportation services in Pune and in surrounding areas. We understand the importance of safe and comfortable transportation for individuals with medical needs. Our dedicated team is commited to ensuring a seamless experience from pickup to drop-off, offering the following services.  </p>
            </div>


            <div className='flex flex-row justify-center mr-64'>
                <div>
                    <img src={commit} className='ml-32 mt-16' id='img2'></img>
                    <h1 className='ml-32 mt-4 font-bold text-xl'>Medical Emergency Response</h1>
                    <hr className='border-t-2 border-red-500 w-36 mt-1 ml-32'></hr>
                    <p className='ml-32 w-72 mt-4' >Our team is trained to handle medical emergencies professionally and efficiently providing immediate care and transportation to the nearest medical facility </p>
                </div>

                <div>
                    <img src={commit} className='ml-32 mt-16' id='img2'></img>
                    <h1 className='ml-32 mt-4 font-bold text-xl'>Roadside Assistance</h1>
                    <hr className='border-t-2 border-red-500 w-36 mt-1 ml-32'></hr>
                    <p className='ml-32 w-72 mt-4' >We offer 24 x 7 road assitance, including tire changes ,jump starts and etc  </p>
                </div>

                <div>
                <img src={commit} className='ml-32 mt-16' id='img2'></img>
                    <h1 className='ml-32 mt-4 font-bold text-xl'>Personal Safety Escort</h1>
                    <hr className='border-t-2 border-red-500 w-36 mt-1 ml-32'></hr>
                    <p className='ml-32 w-72 mt-4'>We also provid personal escort service to individuals ensuring that individuals feel secure and protected during travelling</p>
                </div>
            </div>

            
             <h1 className='text-center text-3xl font-bold mt-32'> Why Choose Us? </h1>
             <hr className='border-t-4 border-purple-500 rounded-lg w-36 mt-2 mx-auto'></hr>
             <div className='flex flex-row justify-center mt-12 gap-20'>
                <div className='flex flex-row justify-center gap-4'>
                    <img src={assistance} className='h-16 w-16'></img>
                    <h1 className='mt-5 font-bold'>Patient First Policy</h1>
                </div>

                <div className='flex flex-row justify-center gap-4'>
                    <img src={siren} className='h-16 w-16'></img>
                    <h1 className='w-32 font-bold'>Emergency Assistance of 15 mins or less</h1>
                </div>

                <div className='flex flex-row justify-center gap-4'>
                    <img src={tfseven} className='h-16 w-16 '></img>
                    <h1 className='mt-5 font-bold'>24 x 7 Support </h1>
                </div>
             </div>


             <h1 className='text-center mt-48 text-3xl font-bold'> How We Work? </h1>
             <hr className='border-t-4 border-green-400 rounded-lg w-36 mt-2 mx-auto'></hr>

             <Timeline/>
           

        
        </>
    )
}

export default Mainpage; 