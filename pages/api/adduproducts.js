import Uproduct from "@/models/Uproduct";
import connectDb from "@/middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let p = new Uproduct({
        slug: req.body[i].slug,
        title: req.body[i].title,
        title_age: req.body[i].title_age,
        title_qualification: req.body[i].title_qualification,
        title_eligibility: req.body[i].title_eligibility,
        title_post: req.body[i].title_post,
      });
      await p.save();
    }
    res.status(200).json({ success: "Succes ..." });
  } else {
    res.status(400).json({ error: "This method is not allowed ..." });
  }
};

export default connectDb(handler);
