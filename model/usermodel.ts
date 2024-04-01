import { fnDbQuery } from "./psqlAPM";
export class userModel {
  constructor() {}

  async getuser() {
    let queryText =
      "select u.user_id,u.username,d.dept_name,r.role_name from user_details u inner join Department d on u.dept_id=d.dept_id inner join Role r on u.role_id=r.role_id";
    let queryParam: any = [];
    return fnDbQuery("getuser", queryText);
  }

  async getrolefordepartment(param: any) {
    let queryText = "select role_id ,role_name from role where dept_id=$1";
    let queryParam: any = [param.dept_id];
    return fnDbQuery("getrolefordepartment", queryText, queryParam);
  }
  async postuser(param: any) {
    let queryText =
      "insert into user_details(username,dept_id,role_id) values ($1,$2,$3)";
    let queryParam: any = [param.username, param.dept_id, param.role_id];
    return fnDbQuery("postuser", queryText, queryParam);
  }
}
