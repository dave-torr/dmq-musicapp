import { ObjectID } from 'mongodb';
import nextConnect from 'next-connect';
import { connectToDatabase } from "../../../utils/mongodb";

const handler = nextConnect();

handler.post(async(req, res)=>{
    const { db } = await connectToDatabase();
    let reqData = req.body
    reqData = JSON.parse(reqData);

    const editBandData = await db
    .collection("bandProfiles")
    .findOneAndUpdate(
        {"_id": ObjectID(reqData._id)},
        { $set: {
            confirmed: true,
            }}
        );

    res.status(200).json ( editBandData )

})

export default (req, res) => handler.run(req, res) 