import { Router } from "express";

import { DepartmentController } from "../controller/departmentController";
//import { verifyToken } from "../Middleware/verifyToken";
const router = Router();
const department = new DepartmentController();
router.post("/insertdepartment", async (req, res) => {
  let param = req.body;
  let result = await department.postDepartment(param);
  //nsole.log(req)
  res.json(result);
});
router.get("/getdepartment", async (req, res) => {
  //console.log(req.headers);
  let result = await department.getDepartment();
  console.log(result);
  res.send(result);
});

export default router;
