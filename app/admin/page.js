'use client'

import PasswordInput from '/app/components/passwordinput.js';
import GithubIcon from '/app/components/github.js';
import GoBack from '/app/components/goback.js';
import Button from '/app/components/buttonv1.js';
import { useState } from 'react';

export default function Admin() {
  const [password, setPassword] = useState('');
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    console.log('Password changed:', newPassword);

  };

  const HandleClick = () => {
    console.log('Clicked');
  };
  const HandleAuthentication = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/verifyuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center custom-grid min-h-screen'>
        <h1 className='text-black font-default text-9xl'>Project Panel</h1>
        <PasswordInput onPasswordChange={handlePasswordChange}/>
        <Button placeholder="Log in" onClick={HandleClick}/>
      </div>
      <GithubIcon />
      <GoBack redirectTo="/" />
    </>
  );
}