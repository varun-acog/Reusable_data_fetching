import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { component } = req.query;

  let filePath = "";
  if (component === "UserData") {
    filePath = path.join(process.cwd(), "public/data/users.json");
  } else if (component === "ProductData") {
    filePath = path.join(process.cwd(), "public/data/products.json");
  } else {
    return res.status(400).json({ error: "Invalid component" });
  }

  try {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read data file" });
  }
}
