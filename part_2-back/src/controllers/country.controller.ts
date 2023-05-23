import { dataSource } from "../lib/datasource";
import { Country, CountryInput } from "../models/Country.model";

const countries = dataSource.getRepository(Country);

const getCountries = async () => {
	return await countries.find();
};

const addCountry = async (country: CountryInput): Promise<Country> => {
	const newCountry = await countries.save(country);
	return newCountry;
};

export default { getCountries, addCountry };
