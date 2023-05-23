import { ObjectType } from "type-graphql";

@ObjectType()
export class Country {
	id: number;
	name: string;
	emoji: string;
}
