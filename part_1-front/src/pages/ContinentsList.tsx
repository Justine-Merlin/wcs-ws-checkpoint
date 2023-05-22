import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { CONTINENTS_QUERY } from "../graphql/gql";
import { IContinent } from "../types/interfaces";

const ContinentsList = () => {
	const { loading, data } = useQuery(CONTINENTS_QUERY);

	if (loading) return <h2>Data is loading ...</h2>;
	return (
		<main>
			<ul className="p-6 flex flex-wrap gap-8 justify-center">
				{data.continents.map((continent: IContinent) => (
					<li className="list-none py-8 px-10 text-center text-lg font-medium w-full max-w-lg rounded border border-slate-300">
						<Link to={`/${continent.code}`}>{continent.name}</Link>
					</li>
				))}
			</ul>
		</main>
	);
};

export default ContinentsList;
