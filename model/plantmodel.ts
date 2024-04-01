import { fnDbQuery } from "./psqlAPM";
export class PlantModel {
  constructor() {}
  async getplant() {
    let queryText = "Select * from plant_master";
    let queryParam: any = [];
    return fnDbQuery("getdepartment", queryText);
  }
  async postplant(param: any) {
    let queryText =
      "insert into plant_master(plant_name,address) values ($1,$2)";
    let queryParam: any = [param.plant_name, param.address];
    return fnDbQuery("postplant", queryText, queryParam);
  }
}
