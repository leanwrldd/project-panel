'use client'
import PasswordInput from '/app/components/passwordinput.js';
import GithubIcon from '/app/components/github.js';
import GoBack from '/app/components/goback.js';

export default function Admin() {
  const handlePasswordChange = (newPassword) => {
    console.log('Password changed:', newPassword);
  };
  return (
    <>
      <div className='flex flex-col justify-center items-center custom-grid min-h-screen'>
        <h1 className='text-black font-default text-9xl'>Project Panel</h1>
        <PasswordInput onPasswordChange={handlePasswordChange}/>
        <GoBack redirectTo="/" />
      </div>
      <GithubIcon />
    </>
  );
}