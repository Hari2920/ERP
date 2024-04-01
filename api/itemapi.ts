import { Router } from "express";
import { ItemController } from "../controller/itemController";
//import { verifyToken } from "../Middleware/verifyToken";
const router = Router();
const item = new ItemController();
router.get("/getItem", async (req, res) => {
  let result = await item.getItem();
  res.json(result);
});
router.post("/postItem", async (req, res) => {
  let param = req.body;
  let result = await item.postItem(param);
  res.json(result);
});
export default router;
