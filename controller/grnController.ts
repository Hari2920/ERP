import { grnModel } from "../model/grnmodel";
import { erpLogger } from "./logger";
let grn = new grnModel();
export class GrnController {
  constructor() {}
  async getGrn(param: any) {
    let result = await grn.getgrn(param);
    erpLogger.log("info", "GRN Details Successfully Retrieved");
    return result;
  }
  async getDetails(param: any) {
    let result = await grn.getdetails(param);
    erpLogger.log("info", "GRN Details Successfully Retrieved");
    return result;
  }
  async postGrn(param: any) {
    let result = await grn.postgrn(param);
    erpLogger.log("info", "GRN Details Successfully Posted");
    return result;
  }
  async getGrnID() {
    let result = await grn.getgrnID();
    erpLogger.log("info", "GRN ID Details Successfully Retrieved");
    return result;
  }
  async getAllDetails(param: any) {
    let result = await grn.getAllDetails(param);
    erpLogger.log("info", "GRN Details Successfully Retrieved");
    return result;
  }
  async postGrnLine(param: any) {
    let result;
    param.map(async (el: any) => {
      result = await grn.postGrnLine(el);
    });
    erpLogger.log("info", " GRN  Details Successfully Posted");
    return result;
  }
  async getgrndetails(param: any) {
    let result = await grn.getgrndetails(param);
    erpLogger.log("info", "Item Details Successfully Retrieved");
    return result;
  }
  async getGrnPurchase() {
    let result = await grn.getGrnPurchase();
    erpLogger.log("info", "GRN Purchase Details Successfully Retrieved");
    return result;
  }
}
