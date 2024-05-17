import { Hallgatok } from "../entity/Hallgatok";
import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";



export class HallgatoController extends Controller{

    repository = AppDataSource.getRepository(Hallgatok);
}