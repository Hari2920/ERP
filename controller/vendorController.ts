import { VendorModel } from "../model/vendormodel";
import { erpLogger } from "./logger";
let vendor = new VendorModel();
export class VendorController {
  constructor() {}
  async getVendor() {
    let result = await vendor.getvendor();
    erpLogger.log("info", "Vendor Details Successfully Retrieved");
    return result;
  }
  async postVendor(param: any) {
    let result = await vendor.postvendor(param);
    erpLogger.log("info", "Vendor Details Successfully Posted");
    return result;
  }
}
