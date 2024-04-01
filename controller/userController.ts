import { userModel } from "../model/usermodel";

import { erpLogger } from "./logger";
let user1 = new userModel();
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
export class UserController {
  constructor() {}

  async getUser() {
    let result = await user1.getuser();
    erpLogger.log("info", "User Details Successfully Retrieved");
    return result;
  }

  async getrolefordepartment(param: any) {
    let result = await user1.getrolefordepartment(param);
    erpLogger.log("info", "User Role Details Successfully Retrieved");
    return result;
  }
  async postUser(param: any) {
    try {
      const salt = crypto.randomBytes(16).toString("base64");
      console.log(salt);

      const passwordWithSalt = param.password + salt;
      const hashedPassword = crypto
        .createHash("md5")
        .update(passwordWithSalt)
        .digest("hex");

      param.password = hashedPassword;
      console.log(param.password);

      let result: any = await user1.postuser(param);

      erpLogger.log("info", "User  Details Successfully posted");
      return result;
    } catch (error) {
      erpLogger.log("error", "User  Details failed");
    }
  }
}
