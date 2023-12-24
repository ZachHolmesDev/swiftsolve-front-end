import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
	const navigate = useNavigate();

	const isAuthenticated = () => {
		const token = localStorage.getItem("jwt");
		return token != null;
	};

	useEffect(() => {
		if (!isAuthenticated()) {
			navigate("/login");
		}
	}, [navigate]);

	return isAuthenticated() ? children : null;
};

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/"
					element={
						<PrivateRoute>
							<HomePage />
						</PrivateRoute>
					}
				/>
				<Route path="*" element={<div>404 Not Found</div>} />
			</Routes>
		</Router>
	);
}

export default App;
