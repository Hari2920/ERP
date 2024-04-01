import { fnDbQuery } from "./psqlAPM";
export class grnModel {
  constructor() {}
  async getgrn(param: any) {
    let queryText, queryParam: any;
    if (param.role == "Manager SS") {
      queryText =
        "SELECT g.grn_id, v.vendor_name, g.po_number, pl.plant_name, s.store_name, g.supplied_on, g.gatepass FROM grn g JOIN purchase_order p ON g.po_number = p.po_number JOIN Vendor v ON p.vendor_id = v.vendor_id JOIN plant_master pl ON p.plant_id = pl.plant_id JOIN store_master s ON pl.plant_id = s.plant_id ";

      queryParam = [];
    } else {
      queryText =
        "SELECT g.grn_id, v.vendor_name, g.po_number, pl.plant_name, s.store_name, g.supplied_on, g.gatepass FROM grn g JOIN purchase_order p ON g.po_number = p.po_number JOIN Vendor v ON p.vendor_id = v.vendor_id JOIN plant_master pl ON p.plant_id = pl.plant_id JOIN store_master s ON pl.plant_id = s.plant_id where created_by=$1";
      queryParam = [param.created_by];
    }
    return fnDbQuery("getgrn", queryText, queryParam);
  }
  async getdetails(param: any) {
    let queryText =
      "select v.vendor_name,pl.plant_name,v.vendor_id,s.store_id,s.store_name from vendor v join purchase_order p on v.vendor_id=p.vendor_id join plant_master pl on p.plant_id=pl.plant_id join store_master s on pl.plant_id=s.plant_id where po_number=$1";
    let queryParam = [param.po_number];
    return fnDbQuery("getDetails", queryText, queryParam);
  }
  async postgrn(param: any) {
    let queryText =
      "insert into grn(po_number,supplied_on,gatepass)values($1,$2,$3)";
    let queryParam = [param.po_number, param.supplied_on, param.gatepass];
    return fnDbQuery("postgrn", queryText, queryParam);
  }
  async getgrnID() {
    let queryText = "select grn_id from grn";
    let queryparam = [];
    return fnDbQuery("getgrn", queryText);
  }
  async getAllDetails(param: any) {
    let queryText =
      "select i.item_name,l.quantity,l.l_id from grn g join lineitem l ON g.po_number = l.po_number join item_master i ON l.item_code = i.item_code where g.grn_id = $1";
    let queryParam = [param.grn_id];
    return fnDbQuery("getAllDetails", queryText, queryParam);
  }
  async postGrnLine(param: any) {
    let queryText =
      "insert into grn_lineitem(grn_id,l_id,quantity,quantity_supplied) values($1,$2,$3,$4)";
    let queryParam = [
      param.grn_id,
      param.l_id,
      param.quantity,
      param.quantity_supplied,
    ];
    return fnDbQuery("postGrnLine", queryText, queryParam);
  }
  async getgrndetails(param: any) {
    let queryText = "select * from grn_lineitem where grn_id=$1";
    let queryParam = [param.grn_id];
    return fnDbQuery("getgrndetails", queryText, queryParam);
  }
  async getGrnPurchase() {
    let queryText =
      "select purchase_order.po_number,purchase_order.po_date,vendor.vendor_name,purchase_order.required_date ,plant_master.plant_name  ,user_details.username from purchase_order join plant_master on purchase_order.plant_id=plant_master.plant_id join vendor on vendor.vendor_id=purchase_order.vendor_id join user_details on user_details.user_id=purchase_order.created_by";
    return fnDbQuery("getGrnPurchase", queryText);
  }
}
