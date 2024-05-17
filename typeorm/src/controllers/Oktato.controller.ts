import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Oktatok } from "../entity/Oktatok";


export class OktatoController extends Controller{

    repository = AppDataSource.getRepository(Oktatok);
}