import { AiOutlineSearch } from "react-icons/ai";

type Props = {
	value: string;
	setResearch: (value: string) => void;
	languages: string[];
	handleAddLanguageToFilter: (language: string) => void;
	languageInputValue: string;
};

const Filter = ({
	value,
	setResearch,
	languages,
	handleAddLanguageToFilter,
	languageInputValue,
}: Props) => {
	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className="flex items-center gap-2"
		>
			<div>
				<label htmlFor="languages">Languages :</label>
				<select
					name="languages"
					id="languages"
					value={languageInputValue}
					onChange={(e) => handleAddLanguageToFilter(e.target.value)}
					className="py-1 px-4 border-b border-slate-300 focus:border-slate-800 outline-none"
				>
					<option hidden>Select a language ...</option>
					{languages.map((language) => (
						<option
							key={language}
							value={language}
						>
							{language}
						</option>
					))}
				</select>
			</div>
			<label htmlFor="research">
				<AiOutlineSearch size={20} />
			</label>
			<input
				type="text"
				name="research"
				id="research"
				value={value}
				onChange={(e) => setResearch(e.target.value)}
				placeholder="Enter your research ..."
				className="py-1 px-4 border-b border-slate-300 focus:border-slate-800 outline-none"
			/>
		</form>
	);
};

export default Filter;
