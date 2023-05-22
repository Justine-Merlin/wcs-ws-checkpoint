import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<h1 className="bg-orange-50 text-center py-6 text-xl font-medium uppercase tracking-wider">
				About that country
			</h1>
			<Outlet />
		</>
	);
};

export default MainLayout;
