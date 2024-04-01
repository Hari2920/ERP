import { StoreModel } from "../model/storemodel";
import { erpLogger } from "./logger";
let store = new StoreModel();
export class StoreController {
  constructor() {}
  async getStore() {
    let result = await store.getstore();
    erpLogger.log("info", "Store Details Successfully Retrieved");
    return result;
  }
  async postStore(param: any) {
    let result = await store.poststore(param);
    erpLogger.log("info", "Store Details Successfully posted");
    return result;
  }
}
