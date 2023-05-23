import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { COUNTRIES_QUERY } from "../graphql/gql";
import { ICountry } from "../types/interfaces";
import Navigation from "../components/Navigation";
import Filter from "../components/Filter";

const CountriesList = () => {
	const { continent } = useParams();

	const [research, setResearch] = useState("");

	const { loading, data } = useQuery(COUNTRIES_QUERY, {
		variables: {
			code: continent,
		},
	});

	if (loading) return <h2>Data is loading ...</h2>;
	return (
		<main className="max-w-[1000px] mx-auto">
			<div className="flex justify-between">
				<Navigation continentName={data.continent.name} />
				<Filter
					value={research}
					setResearch={setResearch}
				/>
			</div>
			<ul className="p-6 flex flex-wrap gap-8 justify-center">
				{data.continent.countries
					.filter(
						(country: ICountry) =>
							country.name.toLowerCase().includes(research.toLowerCase()) ||
							research.length === 0,
					)
					.map((country: ICountry) => (
						<li
							key={country.code}
							className="list-none max-w-md w-full text-center text-lg font-medium rounded border border-slate-300"
						>
							<Link
								to={`/continents/${continent}/country/${country.code}`}
								className="block py-8 px-10 hover:bg-orange-50 transition-all"
							>
								<p
									role="img"
									aria-label="emoji"
								>
									{country.emoji}
								</p>
								{country.name}
							</Link>
						</li>
					))}
			</ul>
		</main>
	);
};

export default CountriesList;
