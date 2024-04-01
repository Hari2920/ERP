import { LoginModel } from "../model/loginmodel";
import { erpLogger } from "./logger";
const jwt = require("jsonwebtoken");

let user1 = new LoginModel();
export class LoginController {
  constructor() {}
  async getValidation(param: any) {
    let result: any = await user1.getValidation(param);
    console.log(result);
    try {
      //const hashedPassword = result.rows[0].password;
      //const passwordMatch = await bcrypt.compare(param.password, hashedPassword);
      if (result.rows[0].password == param.password) {
        erpLogger.log("info", "successfully login");
        // const token = jwt.sign(
        //   { username: result.rows[0].username },
        //   "sudhohsgoes",
        //   { expiresIn: "1h" }
        // );
        // console.log(token);
        return result;
      } else {
        erpLogger.log("error", " login failed");
        return { success: false, Message: "Invalid User or Password" };
      }
    } catch (error) {
      erpLogger.log("error", " login failed");
      return { success: false, Message: "Invalid User or password" };
    }
  }
}
