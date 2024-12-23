import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  let cachedConfig = null;
  const { password, request } = req.method === 'POST' ? req.body : req.query;
  try {
    const filePath = path.join(process.cwd(),'public','config.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    cachedConfig = JSON.parse(fileContents);
  }
  catch (error){
    console.error('Error reading config file:', error);
    return res.status(500).json({ error: "Internal Server Error, Couldn't Read Config file." });
  }
  if (request==="password"){
    if (req.method !== 'POST') {
      return res.status(405).json({ error: `Method Not Allowed: ${req.method}` });
    }
    if (password === cachedConfig.auth.password) {
      return res.status(200).json({ message: "Password verified." });
    } else {
      return res.status(401).json({ error: "Invalid password." });
    }
  }
  else if (request==="config") {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: `Method Not Allowed: ${req.method}` });
    }
    return res.status(200).json(cachedConfig.options);
  }
  else {
    console.error("Invalid Request, Request method not found.");
    return res.status(400).json({ error: "Invalid request."})
  }



}