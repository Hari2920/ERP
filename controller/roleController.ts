import { RoleModel } from "../model/rolemodel";
import { erpLogger } from "./logger";
let role = new RoleModel();
export class RoleController {
  constructor() {}
  async getRoles() {
    let result = await role.getRoles();
    erpLogger.log("info", "Role Details Successfully Retrieved");

    return result;
  }
  async postRole(param: any) {
    let result = await role.postrole(param);
    erpLogger.log("info", "Role Details Successfully Posted");
    return result;
  }
}
