import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

const jsonDirectory = path.join(process.cwd(), "data");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  if (req.method === "GET") {
    try {
      await fs.readFile(`${jsonDirectory}/origin.json`, "utf-8");
      await fs.writeFile(
        `${jsonDirectory}/solutions.json`,
        JSON.stringify({}),
        {
          encoding: "utf-8"
        }
      );

      res.status(200).json([]);
    } catch {
      res.status(500).json([]);
    }
  }
}
export type ResData = {};
