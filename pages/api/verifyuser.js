import fs from 'fs';
import path from 'path';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method Not Allowed: ${req.method}` });
  }

  const { password } = req.body;

  const filePath = path.join(process.cwd(), 'config.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { adminPassword } = JSON.parse(fileContents);

  if (password === adminPassword){
    return res.status(200).JSON({message:"Password verified."});
  }
  else {
    return res.status(401).json({error:"Invalid password."});
  }
}