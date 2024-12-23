import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method Not Allowed: ${req.method}` });
  }

  const { password } = req.body;

  try {
    const filePath = path.join(process.cwd(),'public','config.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const config = JSON.parse(fileContents);
    const adminPassword = config.auth.password;

    if (password === adminPassword) {
      return res.status(200).json({ message: "Password verified." });
    } else {
      return res.status(401).json({ error: "Invalid password." });
    }
  } catch (error) {
    console.error('Error reading config file:', error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}