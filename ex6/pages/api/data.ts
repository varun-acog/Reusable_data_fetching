import { NextApiRequest, NextApiResponse } from "next";
import { FetcherRegistry } from "../../lib/FetcherRegistry";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { component } = req.query;

  if (!component || typeof component !== "string") {
    return res.status(400).json({ error: "Component name is required" });
  }

  const fetcher = FetcherRegistry.getFetcher(component);
  if (!fetcher) {
    return res.status(404).json({ error: "Fetcher not found" });
  }

  try {
    const data = await fetcher.fetchData();
    return res.status(200).json(data);
  } catch (error) {
    console.error("❌ API Fetching Error:", error);
    return res.status(500).json({ error: "Failed to fetch data." });
  }
}
