import { PurchaseModel } from "../model/purchasemodel";
import { erpLogger } from "./logger";
let purchase = new PurchaseModel();
export class PurchaseController {
  constructor() {}
  async getPurchase(param: any) {
    console.log(param);
    let result: any = await purchase.getpurchase(param);
    erpLogger.log("info", "Purchase Details Successfully Retrieved");
    return result;
  }
  async postPurchase(param: any) {
    let result: any = await purchase.postpurchase(param);
    erpLogger.log("info", "Purchase Details Successfully posted");
    return result;
  }
  async getLineItems(param: any) {
    let result = await purchase.getLineItems(param);
    erpLogger.log("info", "Purchase LineItems Details Successfully Retrieved");
    return result;
  }
  async addLineItems(param: any) {
    let result;
    param.map(async (el: any) => {
      result = await purchase.addLineItems(el);
    });
    erpLogger.log("info", "Purchase LineItems Details Successfully posted");
    return result;
  }
}
