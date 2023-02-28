import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    // console.log(req.body)
    for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        army: req.body[i].army,
        slug: req.body[i].slug,
        study: req.body[i].study,
        gender: req.body[i].gender,
        title: req.body[i].title,
        title_age: req.body[i].title_age,
        title_qualification: req.body[i].title_qualification,
        title_eligibility: req.body[i].title_eligibility,
        title_post: req.body[i].title_post,
        // availableQty: req.body[i].availableQty,
      });
      await p.save();
    }
    res.status(200).json({ success: "Succes ..." });
  } else {
    res.status(400).json({ error: "This method is not allowed ..." });
  }
};

export default connectDb(handler);
