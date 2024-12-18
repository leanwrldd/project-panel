import { useState } from "react";

export default function main(){
    const [weatherdata, setweatherdata] = useState("");
    const city = "Kilis"
    const handleSubmit = async (e) => {
        e.preventDefault();
   
        try {
            const res = await fetch("./api/weather.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({city}),
            });
            const data = await res.json();

        }
        catch(err) {
            alert("Error occured, are you sure you're online?")
        }
    }

    return (
        <>
        <div className="bg-black">
            <p>hey gang</p>
        </div>
        </>
    )
}
