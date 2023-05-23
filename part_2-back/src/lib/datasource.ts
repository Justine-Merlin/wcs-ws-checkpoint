import { DataSource } from "typeorm";
import { Country } from "../models/Country.model";
import { Continent } from "../models/Continent.model";

export const dataSource = new DataSource({
	type: "sqlite",
	database: "checkpoint-db.sql",
	entities: [Country, Continent],
	logging: ["query", "error"],
	synchronize: true,
});
