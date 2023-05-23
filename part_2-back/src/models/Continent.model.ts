import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "./Country.model";

@ObjectType()
@Entity()
export class Continent {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	code: string;

	@Field(() => [Country])
	@OneToMany(() => Country, (country) => country.continent)
	countries: Country[];
}

@InputType()
export class ContinentInput {
	@Field()
	name: string;

	@Field()
	code: string;
}

@InputType()
export class ContinentCodeInput {
	@Field()
	code: string;
}
