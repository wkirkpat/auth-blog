import * as express from "express";
import config from "../../config";
const Stripe = require("stripe");

const router = express.Router();

const stripe = new Stripe(config.stripe.sk);

const charge = (token: string, amt: number) => {
  return stripe.charges.create({
    amount: amt * 100,
    currency: "usd",
    source: token,
    description: "Statement Description",
  });
};

router.post("/", async (req, res, next) => {
  try {
    let data = await charge(req.body.token.id, req.body.amount);
    console.log(data);
    res.send("Charged");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
