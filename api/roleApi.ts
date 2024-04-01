import { Router } from "express";
import { RoleController } from "../controller/roleController";
//import { verifyToken } from "../Middleware/verifyToken";
const router = Router();
const role = new RoleController();
router.get("/getroles", async (req, res) => {
  let result = await role.getRoles();
  res.send(result);
});
router.post("/insertroles", async (req, res) => {
  let param = req.body;
  let result = await role.postRole(param);
  //nsole.log(req)
  res.json(result);
});
export default router;
