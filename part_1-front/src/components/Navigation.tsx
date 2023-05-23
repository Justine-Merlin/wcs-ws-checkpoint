import { Link, useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

type Props = {
	continentName?: string;
	countryName?: string;
};

const Navigation = ({ continentName, countryName }: Props) => {
	const { continent, country } = useParams();
	return (
		<nav className="py-8 flex gap-2 h-10 items-center text-blue-400">
			<Link
				to="/"
				className="flex"
			>
				<AiFillHome size={20} />
				<span>...</span>
			</Link>
			{continent && (
				<>
					<span>{" > "}</span>
					<Link
						to={`/continents/${continent}`}
						className="text-blue-400 underline"
					>
						{continentName}
					</Link>
				</>
			)}
			{country && (
				<>
					<span>{" > "}</span>
					<Link
						to={`/continents/${continent}/country/${country}`}
						className="text-blue-400 underline"
					>
						{countryName}
					</Link>
				</>
			)}
		</nav>
	);
};

export default Navigation;
