import { fnDbQuery } from "./psqlAPM";
export class PurchaseModel {
  constructor() {}
  async getpurchase(param: any) {
    if (param.role == "Manager ACC") {
      let queryText =
        "select purchase_order.po_number,purchase_order.po_date,vendor.vendor_name,purchase_order.required_date ,plant_master.plant_name  ,user_details.username from purchase_order join plant_master on purchase_order.plant_id=plant_master.plant_id join vendor on vendor.vendor_id=purchase_order.vendor_id join user_details on user_details.user_id=purchase_order.created_by";
      let queryParam: any = [];
      return fnDbQuery("getpurchase", queryText, queryParam);
    } else {
      let queryText =
        "select purchase_order.po_number,purchase_order.po_date,vendor.vendor_name,purchase_order.required_date ,plant_master.plant_name  ,user_details.username from purchase_order join plant_master on purchase_order.plant_id=plant_master.plant_id join vendor on vendor.vendor_id=purchase_order.vendor_id join user_details on user_details.user_id=purchase_order.created_by where user_id=$1";
      let queryParam: any = [param.user_id];
      return fnDbQuery("getpurchase", queryText, queryParam);
    }
  }
  async postpurchase(param: any) {
    let queryText =
      " insert into purchase_order(vendor_id,required_date,plant_id,created_by) values ($1,$2,$3,$4)";
    let queryParam: any = [
      param.vendor_id,
      param.required_date,
      param.plant_id,
      param.user_id,
    ];
    return fnDbQuery("postpurchase", queryText, queryParam);
  }
  async getLineItems(param: any) {
    let queryText =
      "select purchase_order.po_number,item_master.item_name,lineitem.quantity,lineitem.status,item_master.iteam_type,item_master.price,item_master.current_discount,item_master.uom from lineitem join item_master on item_master.item_code = lineitem.item_code join purchase_order on purchase_order.po_number = lineitem.po_number  where purchase_order.po_number = $1";

    let queryParam = [param.po_number];
    return fnDbQuery("getRoles", queryText, queryParam);
  }
  async addLineItems(param: any) {
    let queryText =
      "insert into lineitem (po_number,item_code,quantity) values ($1,$2,$3)";
    let queryParam = [param.po_number, param.item_code, param.quantity];
    // console.log(body);
    return fnDbQuery("getRoles", queryText, queryParam);
  }
}
