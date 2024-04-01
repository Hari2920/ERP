import { departmentModel } from "../model/departmentmodel";
import { erpLogger } from "./logger";
let dept = new departmentModel();
export class DepartmentController {
  constructor() {}
  async getDepartment() {
    let startTime = process.hrtime();
    let result = await dept.getDepartment();
    let endTime = process.hrtime(startTime);
    const totalTime =
      Math.round(endTime[0] * 1000 + endTime[1] / 1000000) + "ms";
    console.log(totalTime);
    ``;
    erpLogger.log("info", "Department Details Successfully Retrieved");
    return result;
  }
  async postDepartment(param: any) {
    let result = await dept.postDepartment(param);
    erpLogger.log("info", "Department Details Successfully posted");
    return result;
  }
}
