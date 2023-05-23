import { Resolver, Query, Mutation, Arg } from "type-graphql";
import countryController from "../controllers/country.controller";
import {
	Country,
	CountryCodeInput,
	CountryInput,
} from "../models/Country.model";

@Resolver()
export class CountryResolver {
	@Query(() => [Country])
	async getCountries(): Promise<Country[]> {
		return await countryController.getCountries();
	}

	@Query(() => [Country])
	async getCountry(
		@Arg("CountryCodeInput") code: CountryCodeInput,
	): Promise<Country[]> {
		return await countryController.getCountry(code);
	}

	@Mutation(() => Country)
	async addCountry(
		@Arg("countryInput") country: CountryInput,
	): Promise<Country> {
		return await countryController.addCountry(country);
	}
}
