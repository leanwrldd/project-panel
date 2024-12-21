import GoBackRedirect from '/app/components/goback-Redirect.js';
import SelectionBox from '/app/components/selectionbox.js';

export default function Home() {
  const data = ["hey1", "hey2", "hey3"];
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
      <SelectionBox data={data}/>
      </div>
    </>
  );
}