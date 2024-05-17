import "reflect-metadata"
import { DataSource } from "typeorm"
import { Oktatok } from "./entity/Oktatok"
import { Hallgatok } from "./entity/Hallgatok"
import { Kurzusok } from "./entity/Kurzusok"
import { Tantargyak } from "./entity/Tantargyak"
import { Erdemjegyek } from "./entity/Erdemjegyek"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "neptun_by_hepmiu",
    synchronize: true,
    logging: true,
    entities: [Oktatok, Hallgatok, Tantargyak, Erdemjegyek, Kurzusok],
    migrations: [],
    subscribers: [],
})
