import { gql } from "@apollo/client";

export const CONTINENTS_QUERY = gql`
	query Continents {
		continents {
			code
			name
		}
	}
`;

export const COUNTRIES_QUERY = gql`
	query Countries($code: ID!) {
		continent(code: $code) {
			code
			name
			countries {
				name
				code
				native
				phone
				capital
				currency
				emoji
				emojiU
				languages {
					name
					code
				}
			}
		}
	}
`;
