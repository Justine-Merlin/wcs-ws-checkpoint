import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { CONTINENTS_QUERY } from "../graphql/gql";
import { IContinent } from "../types/interfaces";
import { colorPerContinent } from "../utils/colors";

const ContinentsList = () => {
	const { loading, data } = useQuery(CONTINENTS_QUERY);

	if (loading) return <h2>Data is loading ...</h2>;
	return (
		<main>
			<ul className="p-6 flex flex-wrap gap-8 justify-center">
				{data.continents.map((continent: IContinent) => (
					<li
						key={continent.code}
						className={colorPerContinent(continent.code)}
					>
						<Link
							to={`/continents/${continent.code}`}
							className="block py-8 px-10"
						>
							{continent.name}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
};

export default ContinentsList;
