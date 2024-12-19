import PasswordInput from '/app/components/passwordinput.js';
import GithubIcon from '/app/components/github.js';

export default function Admin() {
  return (
    <>
        <div className='flex flex-col justify-center items-center custom-grid min-h-screen'>
          <h1 className='text-black text-9xl font-default'>Project Panel</h1>
           <PasswordInput className="mt-9"></PasswordInput>
        </div>
           <GithubIcon />
    </>
  );
}