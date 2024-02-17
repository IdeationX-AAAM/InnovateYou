import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Otpinput = () => {
  const { user } = useAuth0();


  return (
    <>
      <div>
        <h1>Otp has been sent to {user && user.email}</h1>
        <input>Enter your 4 digit one time password here</input>
        <button>Verify Now</button>
      </div>
    </>
  );
}

export default Otpinput;
