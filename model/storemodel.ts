import { fnDbQuery } from "./psqlAPM";
export class StoreModel {
  constructor() {}
  async getstore() {
    let queryText = "select * from store_master";
    let queryparm: any = [];
    return fnDbQuery("getstore", queryText);
  }
  async poststore(param: any) {
    let queryText =
      "insert into store_master(store_name,plant_id) values ($1,$2)";
    let queryparam: any = [param.store_name, param.plant_id];
    return fnDbQuery("poststore", queryText, queryparam);
  }
}
