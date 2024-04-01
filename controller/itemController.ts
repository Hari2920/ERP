import { ItemModel } from "../model/itemmodel";
import { erpLogger } from "./logger";
let item = new ItemModel();
export class ItemController {
  constructor() {}
  async getItem() {
    let result = await item.getItem();
    erpLogger.log("info", "Item Details Successfully Retrieved");
    return result;
  }
  async postItem(param: any) {
    let result = await item.postItem(param);
    erpLogger.log("info", "Item Details Successfully Posted");
    return result;
  }
}
