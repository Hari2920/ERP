import { Router } from "express";
import { GrnController } from "../controller/grnController";
const router = Router();
const grnController = new GrnController();
router.post("/getgrn", async (req, res) => {
  let param = req.body;
  let result = await grnController.getGrn(param);
  res.json(result);
});
router.post("/getdetails", async (req, res) => {
  let param = req.body;
  let result = await grnController.getDetails(param);
  res.json(result);
});
router.post("/postgrn", async (req, res) => {
  let param = req.body;
  let result = await grnController.postGrn(param);
  res.json(result);
});
router.get("/getgrnID", async (req, res) => {
  let param = req.body;
  let result = await grnController.getGrnID();
  res.json(result);
});
router.post("/getAllDetails", async (req, res) => {
  let param = req.body;
  let result = await grnController.getAllDetails(param);
  res.json(result);
});
router.post("/postGrnLine", async (req, res) => {
  let param = req.body;
  let result = await grnController.postGrnLine(param);
  res.json(result);
});
router.post("/getgrndetails", async (req, res) => {
  let param = req.body;
  let result = await grnController.getgrndetails(param);
  res.json(result);
});
router.get("/getGrnPurchase", async (req, res) => {
  let result = await grnController.getGrnPurchase();
  res.json(result);
});

export default router;
