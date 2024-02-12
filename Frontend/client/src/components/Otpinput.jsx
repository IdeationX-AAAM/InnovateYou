import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Otpinput = () => {
  const { user } = useAuth0();


  return (
    <>
      <div>
        <h1>{user && user.email}</h1>
      </div>
    </>
  );
}

export default Otpinput;
