import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContinentsList from "./pages/ContinentsList";
import CountriesList from "./pages/CountriesList";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<MainLayout />}
				>
					<Route
						path="/"
						element={<ContinentsList />}
					/>
					<Route
						path="/continents/:continent"
						element={<CountriesList />}
					/>
					<Route
						path="/continents/:continent/country/:country"
						element={<p>Country Page</p>}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
