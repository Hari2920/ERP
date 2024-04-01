import { Router } from "express";
import { VendorController } from "../controller/vendorController";
// import { verifyToken } from "../Middleware/verifyToken";
const router = Router();
const vendor = new VendorController();
router.get("/getvendor", async (req, res) => {
  let result = await vendor.getVendor();
  res.json(result);
});

router.post("/postvendor", async (req, res) => {
  let param = req.body;
  let result = await vendor.postVendor(param);
  res.json(result);
});
export default router;
