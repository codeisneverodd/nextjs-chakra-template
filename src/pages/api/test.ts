import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  if (req.method === "GET") {
    try {
      res.status(200).json([]);
    } catch {
      res.status(500).json([]);
    }
  }
}
export type ResData = {};
