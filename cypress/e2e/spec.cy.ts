describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/")

		cy.get("p").contains("Welcome")

		cy.intercept("/quiz").as("getQuizs")
		cy.visit("/quiz")
		cy.wait("@getQuizs")

		cy.url().should("include", "/quiz")

		cy.get("button").click()

		cy.get("button").should("have.length", 2)

		cy.get("button").first().contains("BEFORE")

		cy.get("button").contains("NEXT").click()

		cy.get("button").contains("NEXT").click()

		cy.get("button").contains("NEXT").click()

		cy.get("button").contains("NEXT").click()

		cy.get("button").contains("NEXT").click()

		cy.get("button").contains("NEXT").click()

		cy.get("input").first().click()

		cy.get("button").contains("BEFORE").click()

		cy.get("input").first().should("not.checked")

		cy.get("input").last().click()

		cy.contains("NEXT").click()

		cy.get("input").last().should("not.checked")

		cy.contains("NEXT").click()

		cy.contains("NEXT").click()

		cy.contains("NEXT").click()

		cy.contains("PLAY AGAIN?").click()

		cy.contains("BEGIN")
	})
})
