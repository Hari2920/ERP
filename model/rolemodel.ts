import { fnDbQuery } from "./psqlAPM";
export class RoleModel {
  constructor() {}
  async getRoles() {
    let queryText =
      "select role_id, role_name ,dept_name from role  join department on role.dept_id=department.dept_id";
    let queryParam: any = [];
    return fnDbQuery("getroles", queryText);
  }
  async postrole(param: any) {
    let queryText = "insert into role(role_name,dept_id) values($1,$2)  ";
    let queryParam: any = [param.role_name, param.dept_id];
    return fnDbQuery("postrole", queryText, queryParam);
  }
}
