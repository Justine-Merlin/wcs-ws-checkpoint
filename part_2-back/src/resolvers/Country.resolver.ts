import { Resolver, Query } from "type-graphql";

@Resolver()
export class CountryResolver {
	@Query(() => String)
	hello() {
		return "hello";
	}
}
