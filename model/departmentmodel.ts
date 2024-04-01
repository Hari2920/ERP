import { fnDbQuery } from "./psqlAPM";
export class departmentModel {
  constructor() {}
  async getDepartment() {
    let queryText = "Select * from department";
    let queryParam: any = [];
    return fnDbQuery("getdepartment", queryText);
  }
  async postDepartment(param: any) {
    let queryText = "insert into department(dept_name,short_id) values ($1,$2)";
    let queryParam: any = [param.dept_name, param.short_id];
    return fnDbQuery("postdepartment", queryText, queryParam);
  }
}
