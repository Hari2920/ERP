import { fnDbQuery } from "./psqlAPM";
export class ApplicantModel {
  constructor() {}
  async getApplicant() {
    // const{u_id,role}=body;
    // if(role)
    //{ }
    //else
    // {
    //   let queryText="select a.firstname,a.lastname,a.email,a.phone_no,a.exp,a.city,a.previous_company,a.previous_salary,a.expected_salary,a.notice_period.a.data_of_availability,a.pin from application a join user_details u on u.user_id=a.user_id"
    //      let queryParam=[param.user_id];
    // }
    let queryText = "select * from application";
    return fnDbQuery("getapplicant", queryText);
  }
  async postApplicant(param: any) {
    let queryText =
      "insert into application(firstname,lastname,email,phone_no,exp,city,previous_company,previous_salary,expected_salary,notice_period,data_of_availability,pin) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)";
    let queryParam = [
      param.firstname,
      param.lastname,
      param.email,
      param.phone_no,
      param.exp,
      param.city,
      param.previous_company,
      param.previous_salary,
      param.expected_salary,
      param.notice_period,
      param.data_of_availability,
      param.pin,
    ];
    return fnDbQuery("postapplicant", queryText, queryParam);
  }
}
