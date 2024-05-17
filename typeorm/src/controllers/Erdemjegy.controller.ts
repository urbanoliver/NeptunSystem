import { Erdemjegyek } from "../entity/Erdemjegyek";
import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";



export class ErdemjegyController extends Controller{

    repository = AppDataSource.getRepository(Erdemjegyek);

}