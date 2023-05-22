import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ContinentsList from "./pages/ContinentsList";

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
						path="/:continent"
						element={<p>continent page</p>}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
