export default function Button({placeholder, onClick}){
    return (

        <button 
        onClick={onClick}
        className="bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer shadow-md lato-regular m-3 w-36 h-10 text-white text-2xl" >
            {placeholder}
        </button>
    )
}   