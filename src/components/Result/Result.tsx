import React from "react"
import { Link } from "react-router-dom"
import { cx } from "classix"

import { Card, CardHeader, CardBody, CardFooter } from "../../components/Card"
import { useAppSelector } from "../../redux/hooks"
import { getResult, selectQuestions } from "../../redux/feature/quizSlice"

const buttonStyle = cx(
	"border-solid border-2 border-blue-500 rounded-md px-2 py-2",
	"w-[120px]"
)

type resultItemProps = {
	key: number
	isCorrect: boolean
	quiz: string
}
const ResultItem = (props: resultItemProps) => {
	return (
		<span
			className="text-sm text-left px-3"
			dangerouslySetInnerHTML={{
				__html: (props.isCorrect ? "+" : "-").concat(props.quiz),
			}}
		></span>
	)
}

const Result = () => {
	const { correctCount, finalResult } = useAppSelector(getResult)
	const questions = useAppSelector(selectQuestions)

	return (
		<Card>
			<CardHeader>
				<span>You scored</span>
				<div>
					<span className="mx-2">{correctCount}</span>/
					<span className="mx-2">{questions.length}</span>
				</div>
			</CardHeader>
			<CardBody>
				<div className="flex flex-col items-baseline">
					{questions.map((question, index) => (
						<ResultItem
							key={index}
							isCorrect={finalResult[index]}
							quiz={question["question"]}
						/>
					))}
				</div>
			</CardBody>
			<CardFooter>
				<Link to="/">
					<button className={buttonStyle}>PLAY AGAIN?</button>
				</Link>
			</CardFooter>
		</Card>
	)
}

export default Result
