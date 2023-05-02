/* eslint-disable react/react-in-jsx-scope */
import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Card, CardHeader, CardBody, CardFooter } from "../components/Card"

describe("Card Test", () => {
	test("Card", async () => {
		render(
			<Card>
				<CardHeader>Cake</CardHeader>
				<CardBody>Pizza</CardBody>
				<CardFooter>Bread</CardFooter>
			</Card>
		)

		expect(screen.getByText("Cake")).toBeInTheDocument
		expect(screen.getByText("Pizza")).toBeInTheDocument
		expect(screen.getByText("Bread")).toBeInTheDocument
	})
})
