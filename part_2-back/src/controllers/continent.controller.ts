import { dataSource } from "../lib/datasource";
import {
	Continent,
	ContinentCodeInput,
	ContinentInput,
} from "../models/Continent.model";

const continents = dataSource.getRepository(Continent);

const getContinents = async (): Promise<Continent[]> => {
	return await continents.find({
		relations: {
			countries: true,
		},
	});
};

const getContinent = async ({
	code,
}: ContinentCodeInput): Promise<Continent[]> => {
	return await continents.find({
		where: {
			code,
		},
		relations: {
			countries: true,
		},
	});
};

const addContinent = async (continent: ContinentInput): Promise<Continent> => {
	const newContinent = await continents.save(continent);
	return newContinent;
};

export default { getContinent, getContinents, addContinent };
