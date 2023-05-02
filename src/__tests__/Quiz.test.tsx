/* eslint-disable react/react-in-jsx-scope */
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import Quiz from "../components/Quiz/Quiz"
import { store } from "../redux/store"

describe("Quiz Component", () => {
	test("loads and displays greeting", async () => {
		render(
			<Router>
				<Provider store={store}>
					<Quiz />
				</Provider>
			</Router>
		)

		expect(screen.getByText(/wait/i)).toBeInTheDocument
		await (() => {
			screen.findByText(/True/i)
			expect(screen.getByText(/NEXT/i)).toBeInTheDocument
		})
	})
})
