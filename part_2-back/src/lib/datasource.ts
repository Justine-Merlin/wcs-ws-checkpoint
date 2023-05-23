import { DataSource } from "typeorm";
import { Country } from "../models/Country.model";

export const dataSource = new DataSource({
	type: "sqlite",
	database: "checkpoint-db.sql",
	entities: [Country],
	logging: ["query", "error"],
	synchronize: true,
});
