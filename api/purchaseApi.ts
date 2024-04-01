import { Router } from "express";
import { PurchaseController } from "../controller/purchaseController";
const purchase = new PurchaseController();
const router = Router();
router.post("/getpurchase", async (req, res) => {
  let param = req.body;
  let result = await purchase.getPurchase(param);
  res.json(result);
});
router.post("/postpurchase", async (req, res) => {
  let param = req.body;
  let result = await purchase.postPurchase(param);
  res.json(result);
});
router.post("/getLineItems", async (req, res) => {
  let param = req.body;
  let result = await purchase.getLineItems(param);
  res.json(result);
});
router.post("/addLineItems", async (req, res) => {
  let param = req.body;
  let result = await purchase.addLineItems(param);
  res.json(result);
});

export default router;
