import { fnDbQuery } from "./psqlAPM";
export class VendorModel {
  constructor() {}
  async getvendor() {
    let queryText = "select * from vendor";
    let queryParam: any = [];
    return fnDbQuery("getvendor", queryText);
  }
  async postvendor(param: any) {
    let queryText =
      "insert into vendor(vendor_name,address,phone,pan_no) values($1,$2,$3,$4)";
    let queryParam: any = [
      param.vendor_name,
      param.address,
      param.phone,
      param.pan_no,
    ];
    return fnDbQuery("postvendor", queryText, queryParam);
  }
}
