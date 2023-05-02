import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { cx } from "classix"

import { Card, CardHeader, CardBody, CardFooter } from "../../components/Card"
import { useGetQuestionsQuery } from "../../redux/services/quiz"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { selectQuizIndex, selectAnswers } from "../../redux/feature/quizSlice"
import {
	postAnswer,
	postQuestions,
	before,
} from "../../redux/feature/quizSlice"

const buttonStyle = cx(
	"border-solid",
	"border-2 border-blue-500 rounded-md",
	"px-5 py-1",
	"w-50"
)

const Quiz = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const quizIndex = useAppSelector(selectQuizIndex)
	const answers = useAppSelector(selectAnswers)

	const { data, error, isLoading, isFetching } = useGetQuestionsQuery(
		undefined,
		{
			refetchOnMountOrArgChange: true,
		}
	)

	const [tBtn, setTBtn] = useState<boolean>(true)
	const [fBtn, setFBtn] = useState<boolean>(false)

	useEffect(() => {
		let v1 = true,
			v2 = false
		if (answers[quizIndex] === true) (v1 = true), (v2 = false)
		if (answers[quizIndex] === false) (v2 = true), (v1 = false)
		setTBtn(v1)
		setFBtn(v2)
	}, [quizIndex])

	useEffect(() => {
		if (data) dispatch(postQuestions(data.results))
	}, [data, dispatch])

	const handleClick = () => {
		if (quizIndex === 9) {
			navigate("/result")
		}
		dispatch(postAnswer(tBtn))
	}

	const results = data ? (
		<div className="flex flex-col justify-between px-2">
			<CardHeader>
				<p>{data.results[quizIndex].category}</p>
			</CardHeader>
			<CardBody>
				<div className="border-2 border-black h-[14rem] flex flex-col justify-center px-2">
					<p
						dangerouslySetInnerHTML={{
							__html: data.results[quizIndex].question,
						}}
					></p>
				</div>
				<p>{quizIndex + 1} of 10</p>
				<div className="flex align-middle justify-evenly mt-4">
					<div className="grid gap-2 grid-flow-col">
						<span>True</span>
						<input
							type="radio"
							name="choice"
							checked={tBtn}
							onChange={() => {
								setTBtn(true)
								setFBtn(false)
							}}
						/>
					</div>
					<div className="grid gap-2 grid-flow-col">
						<span>False</span>
						<input
							type="radio"
							name="choice"
							checked={fBtn}
							onChange={() => {
								setFBtn(true)
								setTBtn(false)
							}}
						/>
					</div>
				</div>
			</CardBody>
			<CardFooter>
				<div className="flex justify-center gap-4">
					{quizIndex !== 0 && (
						<button
							className={buttonStyle}
							onClick={() => {
								dispatch(before())
								setTBtn(false)
								setFBtn(false)
							}}
						>
							BEFORE
						</button>
					)}
					<button className={buttonStyle} onClick={handleClick}>
						NEXT
					</button>
				</div>
			</CardFooter>
		</div>
	) : (
		""
	)

	const errorMessage = (
		<div className="flex flex-col justify-center">
			<p>something went wrong!</p>
		</div>
	)

	const loadingMessage = (
		<div className="flex flex-col justify-center">
			<p>please wait, loading...</p>
		</div>
	)

	let cardContent
	if (error) cardContent = errorMessage
	else if (isLoading || isFetching) cardContent = loadingMessage
	else cardContent = results

	return <Card>{cardContent}</Card>
}

export default Quiz
