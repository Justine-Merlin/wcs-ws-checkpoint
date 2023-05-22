import { gql } from "@apollo/client";

export const CONTINENTS_QUERY = gql`
	query Continents {
		continents {
			code
			name
		}
	}
`;
