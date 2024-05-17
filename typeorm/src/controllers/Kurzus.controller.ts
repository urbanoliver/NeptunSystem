import { Kurzusok } from "../entity/Kurzusok";
import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";



export class KurzusController extends Controller{

    repository = AppDataSource.getRepository(Kurzusok);
}