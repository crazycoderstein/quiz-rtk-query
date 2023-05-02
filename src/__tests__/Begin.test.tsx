/* eslint-disable react/react-in-jsx-scope */
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import Begin from "../components/Begin/Begin"
import { store } from "../redux/store"

describe("Begin Component", () => {
	test("loads and displays greeting", async () => {
		render(
			<Router>
				<Provider store={store}>
					<Begin />
				</Provider>
			</Router>
		)
		expect(screen.getByText(/Welcome/i)).toBeInTheDocument
		expect(screen.getByText(/BEGIN/i)).toBeInTheDocument

		await act(() => {
			userEvent.click(screen.getByText(/BEGIN/i))
		})
	})
})
