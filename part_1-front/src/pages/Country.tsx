import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { COUNTRY_QUERY } from "../graphql/gql";
import { ILanguage } from "../types/interfaces";

const Country = () => {
	const { country } = useParams();

	const { loading, data } = useQuery(COUNTRY_QUERY, {
		variables: {
			code: country,
		},
	});

	if (loading) return <h2>Data is loading ...</h2>;
	return (
		<main className="max-w-[1000px] mx-auto">
			<div className="py-8 text-center">
				<h2 className="text-2xl">{data.country.name}</h2>
				<p>{data.country.native}</p>
			</div>
			<h3 className="text-center text-xl">Informations :</h3>
			<ul>
				<li className="py-4 list-none text-lg font-medium">
					Capital :{" "}
					<span className="font-normal text-base">{data.country.capital}</span>
				</li>
				<li className="py-4 list-none text-lg font-medium">
					Currency :{" "}
					<span className="font-normal text-base">{data.country.currency}</span>
				</li>
				<li className="py-4 list-none text-lg font-medium">
					Phone prefix :{" "}
					<span className="font-normal text-base">+{data.country.phone}</span>
				</li>
			</ul>
			<h3 className="text-center text-xl">Languages :</h3>
			<ul className="py-8 flex gap-4 justify-center">
				{data.country.languages.map((language: ILanguage) => (
					<li
						key={language.code}
						className="py-4 px-8 rounded border border-slate-300"
					>
						{language.name}
					</li>
				))}
			</ul>
		</main>
	);
};

export default Country;
