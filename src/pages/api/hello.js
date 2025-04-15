import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const imagePath = path.join(process.cwd(), "public", "loginPage.png"); // replace with your actual file name

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    res.setHeader("Content-Type", "image/png");
    res.status(200).send(imageBuffer);
  } catch (error) {
    res.status(500).send("Image not found or error occurred.");
  }
}
