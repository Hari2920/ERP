import { Router } from "express";

import { LoginController } from "../controller/loginController";
const router = Router();
const login = new LoginController();
router.post("/login", async (req, res) => {
  let param = req.body;
  console.log(param);
  let result = await login.getValidation(param);
  res.json(result);
});
export default router;
