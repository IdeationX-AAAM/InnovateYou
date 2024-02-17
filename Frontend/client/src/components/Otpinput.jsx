import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Otpinput = () => {
  const { user } = useAuth0();

  return (
    <div className="container mx-auto mt-48 border h-64 w-64 border-gray-300 rounded-md">
      <div className="text-center p-4">
        <h1 className="mb-4">Otp has been sent to {user && user.email}</h1>
        <input type="password" placeholder="Enter your 4 digit OTP" className="border border-gray-300 px-4 py-2 mb-4" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Verify Now</button>
      </div>
    </div>
  );
}

export default Otpinput;
