import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/Country.resolver";

const startApolloServer = async () => {
	const schema = await buildSchema({
		resolvers: [CountryResolver],
	});

	const server = new ApolloServer({
		schema,
	});

	const { url } = await startStandaloneServer(server, {
		listen: { port: 4000 },
	});

	console.log(`🚀  Server ready at: ${url}`);
};

startApolloServer();
