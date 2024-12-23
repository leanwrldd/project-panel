'use client'
// Components
import GithubIcon from '/app/components/github.js';
import GoBackRedirect from '/app/components/goback-redirect.js';
import Button from '/app/components/buttonv1.js';
import PasswordInput from '/app/components/passwordinput.js';
// React
import { useState,  useEffect} from 'react';
import { useRouter,} from 'next/navigation';

export default function Admin() {
  // User States
  const [password, setPassword] = useState('');
  // Router
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('isAuthorized', 'false');
    }
);
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const HandleClick = async () => {
    const response = await fetch('/api/readConfig', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('isAuthorized', 'true');
      router.push('/admin/dashboard');
    } else {
      alert(data.error);
      localStorage.setItem('isAuthorized', 'false');
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center custom-grid min-h-screen'>
        <h1 className='text-black lato-thin text-9xl'>Project Panel</h1>
        <PasswordInput onPasswordChange={handlePasswordChange} />
        <Button placeholder="Log in" onClick={HandleClick} />
      </div>
      <GithubIcon />
      <GoBackRedirect redirectTo="/" />
    </>
  );
}