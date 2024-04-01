import { Router } from "express";

import { ApplicantController } from "../controller/applicantController";
const app = new ApplicantController();
const router = Router();
router.get("/getapplicant", async (req, res) => {
  let param = req.body;
  let result = await app.getapplicant();
  res.json(result);
});
router.post("/postapplicant", async (req, res) => {
  let param = req.body;
  let result = await app.postapplicant(param);
  res.json(result);
});

export default router;
