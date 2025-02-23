import path from "path";
import { promises as fs } from "fs";

export async function fetchUserData() {
  try {
    const filePath = path.join(process.cwd(), "data", "users.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
}
