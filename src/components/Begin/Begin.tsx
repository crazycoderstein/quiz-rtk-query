import React from "react"
import { Link } from "react-router-dom"
import { cx } from "classix"
import { Card, CardHeader, CardBody, CardFooter } from "../Card"

const buttonStyle = cx(
	"border-solid border-2 border-blue-500 rounded-md px-10 py-2"
)

const Begin = () => {
	return (
		<Card>
			<div className="grid grid-flow-row gap-y-32">
				<CardHeader>
					<p>Welcome to the Trivia challenge!</p>
				</CardHeader>
				<CardBody>
					<div className="grid grid-flow-row gap-y-20">
						<p>You will be presented with 10 True or False questions</p>
						<p>Can you score 100%?</p>
					</div>
				</CardBody>
				<CardFooter>
					<Link to="/quiz">
						<button className={buttonStyle}>BEGIN</button>
					</Link>
				</CardFooter>
			</div>
		</Card>
	)
}

export default Begin
