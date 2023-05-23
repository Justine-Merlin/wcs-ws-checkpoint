import { Resolver, Query, Mutation, Arg } from "type-graphql";
import continentController from "../controllers/continent.controller";
import {
	Continent,
	ContinentCodeInput,
	ContinentInput,
} from "../models/Continent.model";

@Resolver()
export class ContinentResolver {
	@Query(() => [Continent])
	async getContinents(): Promise<Continent[]> {
		return await continentController.getContinents();
	}

	@Query(() => [Continent])
	async getContinent(
		@Arg("ContinentCodeInput") code: ContinentCodeInput,
	): Promise<Continent[]> {
		return await continentController.getContinent(code);
	}

	@Mutation(() => Continent)
	async addContinent(
		@Arg("ContinentInput") continent: ContinentInput,
	): Promise<Continent> {
		return await continentController.addContinent(continent);
	}
}
