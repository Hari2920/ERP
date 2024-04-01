import { Router } from "express";
import { UserController } from "../controller/userController";

const usercontroller = new UserController();
const router = Router();

router.get("/getuser", async (req, res) => {
  let result = await usercontroller.getUser();
  console.log(result);
  res.json(result);
});

router.post("/getrolefordepartment", async (req, res) => {
  let param = req.body;
  let result = await usercontroller.getrolefordepartment(param);
  res.json(result);
});
router.post("/postuser", async (req, res) => {
  let param = req.body;
  let result = await usercontroller.postUser(param);
  res.json(result);
});

export default router;
