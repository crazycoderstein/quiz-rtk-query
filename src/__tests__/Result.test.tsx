/* eslint-disable react/react-in-jsx-scope */
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import Result from "../components/Result/Result"
import { store } from "../redux/store"

describe("Result Component", () => {
	test("loads and displays greeting", async () => {
		render(
			<Router>
				<Provider store={store}>
					<Result />
				</Provider>
			</Router>
		)
		expect(screen.getByText(/You scored/i)).toBeInTheDocument
		expect(screen.getByText(/PLAY AGAIN/i)).toBeInTheDocument

		await act(() => {
			userEvent.click(screen.getByText(/PLAY AGAIN/i))
		})
	})
})
