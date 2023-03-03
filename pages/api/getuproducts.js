import Uproduct from "@/models/Uproduct";
import connectDb from "@/middleware/mongoose";
const handler = async (req, res) => {
  let uproducts = await Uproduct.find();
  res.status(200).json({ uproducts });
};

export default connectDb(handler);
