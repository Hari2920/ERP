import { fnDbQuery } from "./psqlAPM";
export class ItemModel {
  constructor() {}

  async getItem() {
    let queryText = "select * from item_master";
    let queryParam: any = [];
    return fnDbQuery("getItem", queryText);
  }
  async postItem(param: any) {
    let queryText =
      "insert into Item_master(item_name,iteam_type,price,current_discount,uom) values($1,$2,$3,$4,$5)";
    let queryParam: any = [
      param.item_name,
      param.iteam_type,
      param.price,
      param.current_discount,
      param.uom,
    ];
    return fnDbQuery("postItem", queryText, queryParam);
  }
}
