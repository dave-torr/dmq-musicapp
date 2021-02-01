import { connectToDatabase } from "../../utils/mongodb";

// Route used exclusively with SWR to have real time update of all departure dates.
export default async (req, res) => {
  const { db } = await connectToDatabase();

  const ListadoDeBandas = await db
    .collection("bandProfiles")
    .find({})
    .toArray();
  res.json(ListadoDeBandas);
};