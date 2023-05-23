import { AiOutlineSearch } from "react-icons/ai";

type Props = {
	value: string;
	setResearch: (value: string) => void;
};

const Filter = ({ value, setResearch }: Props) => {
	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className="flex items-center gap-2"
		>
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
