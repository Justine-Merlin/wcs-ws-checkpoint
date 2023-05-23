import { Resolver, Query, Mutation, Arg } from "type-graphql";
import countryController from "../controllers/country.controller";
import { Country, CountryInput } from "../models/Country.model";

@Resolver()
export class CountryResolver {
	@Query(() => [Country])
	async getCountries() {
		return await countryController.getCountries();
	}

	@Mutation(() => Country)
	async addCountry(
		@Arg("countryInput") country: CountryInput,
	): Promise<Country> {
		return await countryController.addCountry(country);
	}
}
