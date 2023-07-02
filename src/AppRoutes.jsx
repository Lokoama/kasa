import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Housing from "./Pages/Housing/Housing"
import Error404 from "./Pages/Error404/Error404"
function AppRoutes () {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/housing/:id" element={<Housing />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	)
}

export default AppRoutes