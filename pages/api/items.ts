import type { NextApiRequest, NextApiResponse } from "next";
import { Item, ItemList } from "../../data/items";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Item>>
) {
  res.status(200).json(ItemList);
}
