import { PlantModel } from "../model/plantmodel";
import { erpLogger } from "./logger";
let plant = new PlantModel();
export class PlantController {
  constructor() {}
  async getPlant() {
    let result = await plant.getplant();
    erpLogger.log("info", "Plant Details Successfully Retrieved");
    return result;
  }
  async postPlant(param: any) {
    let result = await plant.postplant(param);
    erpLogger.log("info", "Plant Details Successfully Posted");
    return result;
  }
}
