import { fnDbQuery } from "./psqlAPM";
export class LoginModel {
  constructor() {}
  async getValidation(param: any) {
    console.log(param.username);
    let queryText =
      "select user_details.user_id,user_details.username,user_details.password,role.role_name from user_details join role on user_details.role_id=role.role_id where username=$1";
    let queryParam: any = [param.username];
    return fnDbQuery("getValidation", queryText, queryParam);
  }
}
