import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const classesDir = path.join(process.cwd(), 'public/database/classes');

  const files = fs.readdirSync(classesDir);
  const data = files.map(file => {
    const filePath = path.join(classesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
  });
  res.status(200).json(data);
}