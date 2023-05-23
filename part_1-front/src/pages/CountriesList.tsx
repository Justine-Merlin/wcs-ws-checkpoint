import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { COUNTRIES_QUERY } from "../graphql/gql";
import { ICountry } from "../types/interfaces";

const CountriesList = () => {
	const { continent } = useParams();

	const { loading, data } = useQuery(COUNTRIES_QUERY, {
		variables: {
			code: continent,
		},
	});
	console.log(data);

	if (loading) return <h2>Data is loading ...</h2>;
	return (
		<main>
			<ul className="p-6 flex flex-wrap gap-8 justify-center">
				{data.continent.countries.map((country: ICountry) => (
					<li
						key={country.code}
						className="list-none max-w-lg w-full text-center text-lg font-medium rounded border border-slate-300"
					>
						<Link
							to={`/continents/${continent}/country/${country.code}`}
							className="block py-8 px-10"
						>
							<p
								role="img"
								aria-label="emoji"
							>
								{String.fromCodePoint(
									parseInt(
										country.emojiU
											.substring(0, country.emojiU.indexOf(" "))
											.replace(/U\+1/i, "0x"),
									),
								)}
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
