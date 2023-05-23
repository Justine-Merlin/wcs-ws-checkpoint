import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

@InputType()
export class CountryInput {
	@Field()
	name: string;

	@Field()
	code: string;

	@Field()
	emoji: string;
}

@InputType()
export class CountryCodeInput {
	@Field()
	code: string;
}
