import React from "react"
import { Routes as Switch, Route } from "react-router-dom"

import Begin from "../components/Begin"
import Quiz from "../components/Quiz"
import Result from "../components/Result"

const Routes = () => {
	return (
		<Switch>
			<Route path="/" element={<Begin />} />
			<Route path="/quiz" element={<Quiz />} />
			<Route path="/result" element={<Result />} />
		</Switch>
	)
}

export default Routes
