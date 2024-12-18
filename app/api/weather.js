export default async function handler(req, res) {
    // req as in request thats took from the front end and res is the response to give back
    if (req.method !== "POST"){
        return res.status(405).json({ message: "Not a POST request"});
    }
    const { city } = req.body; // extracts the city var from the requests body
    if (!city){
        return res.status(400).json({message:"City is required"});
    }
    const apiKey = "7d28242529208521e4d2e8697f85ddb6";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},TR&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        return res.status(500).json({message:"API Responde: ${response.status}}"});
      }
      const data = await response.json();
      res.status(200).json(data.main.temp); // Send data to the frontend
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  