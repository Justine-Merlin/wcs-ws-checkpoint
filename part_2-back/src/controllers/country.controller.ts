import { dataSource } from "../lib/datasource";
import {
	Country,
	CountryCodeInput,
	CountryInput,
} from "../models/Country.model";

const countries = dataSource.getRepository(Country);

const getCountries = async (): Promise<Country[]> => {
	return await countries.find();
};

const getCountry = async ({ code }: CountryCodeInput): Promise<Country[]> => {
	return await countries.find({
		where: {
			code,
		},
	});
};

const addCountry = async (country: CountryInput): Promise<Country> => {
	const newCountry = await countries.save(country);
	return newCountry;
};

export default { getCountry, getCountries, addCountry };
