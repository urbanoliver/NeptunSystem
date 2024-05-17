import { Tantargyak } from "../entity/Tantargyak";
import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";



export class TantargyController extends Controller{

    repository = AppDataSource.getRepository(Tantargyak);
}