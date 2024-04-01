import { Router } from "express";
import { PlantController } from "../controller/plantController";
//import { verifyToken } from "../Middleware/verifyToken";
const router = Router();
const plant = new PlantController();
router.get("/getplant", async (req, res) => {
  let result = await plant.getPlant();
  console.log(result);
  res.json(result);
});
router.post("/insertplant", async (req, res) => {
  let param = req.body;
  let result = await plant.postPlant(param);
  res.json(result);
});
export default router;
