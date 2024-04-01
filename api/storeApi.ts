import { Router } from "express";
import { StoreController } from "../controller/storeController";
//import { verifyToken } from "../Middleware/verifyToken";
const store = new StoreController();
const router = Router();
router.get("/getstore", async (req, res) => {
  let result = await store.getStore();
  res.json(result);
});
router.post("/insertstore", async (req, res) => {
  let param = req.body;
  let result = await store.postStore(param);
  res.json(result);
});
export default router;
