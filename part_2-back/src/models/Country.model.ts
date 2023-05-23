import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Continent } from "./Continent.model";

@ObjectType()
@Entity()
export class Country {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	code: string;

	@Field()
	@Column()
	emoji: string;

	@Field(() => Continent)
	@ManyToOne(() => Continent, (continent) => continent.countries)
	continent: Continent;
}

@InputType()
export class CountryInput {
	@Field()
	name: string;

	@Field()
	code: string;

	@Field()
	emoji: string;

	@Field(() => Int)
	continent: number;
}

@InputType()
export class CountryCodeInput {
	@Field()
	code: string;
}
