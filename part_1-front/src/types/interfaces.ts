export interface IContinent {
	name: string;
	code: string;
}

export interface ICountry {
	name: string;
	code: string;
	native: string;
	phone: string;
	capital: string;
	currency: string;
	emoji: string;
	emojiU: string;
	languages: ILanguage[];
}

export interface ILanguage {
	name: string;
	code: string;
}
