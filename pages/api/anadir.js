import nextConnect from 'next-connect';
import { connectToDatabase } from "../../utils/mongodb";

const handler = nextConnect();

handler.post(async(req, res)=>{
  const { db } = await connectToDatabase();
    let reqData = req.body
    reqData = JSON.parse(reqData);

  const BandRegistry = await db
    .collection("bandProfiles")
    .insertOne(reqData);
    res.status(200).json( BandRegistry )
})

export default (req, res) => handler.run(req, res) 