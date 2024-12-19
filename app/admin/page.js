import PasswordInput from '/app/components/passwordinput.js';
import GithubIcon from '/app/components/github.js';
import GoBack from '/app/components/goback.js';

export default function Admin() {
  return (
    <>
      <div className='flex flex-col justify-center items-center custom-grid min-h-screen'>
        <h1 className='text-black font-default text-9xl'>Project Panel</h1>
        <PasswordInput />
        <GoBack redirectTo="/" />
      </div>
      <GithubIcon />
    </>
  );
}