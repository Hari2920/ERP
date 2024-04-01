import { ApplicantModel } from "../model/applicantmodel";
import { erpLogger } from "./logger";
const app = new ApplicantModel();

export class ApplicantController {
  constructor() {}
  async getapplicant() {
    let startTime = process.hrtime();
    let result = await app.getApplicant();

    let endTime = process.hrtime(startTime);
    const totalTime =
      Math.round(endTime[0] * 1000 + endTime[1] / 1000000) + "ms";
    console.log(totalTime);
    erpLogger.log("info", "Applicant Details Successfully Retrieved");
    return result;
  }
  async postapplicant(param: any) {
    let result = await app.postApplicant(param);
    erpLogger.log("info", "Applicant Details Successfully Posted");
    return result;
  }
}
