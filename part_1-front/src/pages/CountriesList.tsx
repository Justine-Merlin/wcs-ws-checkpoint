import { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { COUNTRIES_QUERY } from "../graphql/gql";
import { ICountry } from "../types/interfaces";
import Navigation from "../components/Navigation";
import Filter from "../components/Filter";

const CountriesList = () => {
	const { continent } = useParams();

	const [research, setResearch] = useState("");
	const [languageInputValue, setLanguageInputValue] = useState("");
	const [languagesFilter, setLanguagesFilter] = useState<string[]>([]);

	const { loading, data } = useQuery(COUNTRIES_QUERY, {
		variables: {
			code: continent,
		},
	});

	const handleAddLanguageToFilter = (language: string) => {
		setLanguagesFilter((previousValue) => [...previousValue, language]);
		setLanguageInputValue("");
	};

	const handleRemoveFromFilter = (filter: string) => {
		const tempArr = languagesFilter.filter((language) => language !== filter);
		setLanguagesFilter(tempArr);
	};

	if (loading) return <h2>Data is loading ...</h2>;
	return (
		<main className="max-w-[1000px] mx-auto">
			<div className="flex justify-between">
				<Navigation continentName={data.continent.name} />
				<Filter
					value={research}
					setResearch={setResearch}
					languageInputValue={languageInputValue}
					handleAddLanguageToFilter={handleAddLanguageToFilter}
					languages={
						[
							...new Set(
								data.continent.countries.reduce(
									(acc: string[], country: ICountry) => {
										const languages: string[] = [];
										country.languages.forEach((language) =>
											languages.push(language.name),
										);
										return [...acc, ...languages];
									},
									[],
								),
							),
						] as string[]
					}
				/>
			</div>
			<div className="flex gap-8 justify-center">
				{languagesFilter.map((filter) => (
					<button
						type="button"
						key={filter}
						onClick={() => handleRemoveFromFilter(filter)}
						className="flex items-center gap-2 rounded border-2 border-green-600 p-2 text-green-600 font-medium hover:border-red-800 hover:text-red-800 transition-all"
					>
						<RxCross1 />
						<span>{filter}</span>
					</button>
				))}
			</div>
			<ul className="p-6 flex flex-wrap gap-8 justify-center">
				{data.continent.countries
					.filter(
						(country: ICountry) =>
							(country.name.toLowerCase().includes(research.toLowerCase()) ||
								research.length === 0) &&
							(country.languages.filter((language) =>
								languagesFilter.includes(language.name),
							).length ||
								languagesFilter.length === 0),
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
