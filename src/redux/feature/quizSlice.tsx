import { createSelector, createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { Question } from "../types"

interface QuizState {
	quizIndex: number
	answers: boolean[]
	questions: Question[]
}

const initialState: QuizState = {
	quizIndex: 0,
	answers: [],
	questions: [],
}

export const quizSlice = createSlice({
	name: "quiz",
	initialState,
	reducers: {
		postQuestions: (state, action) => {
			state.questions = action.payload
		},
		postAnswer: (state, action) => {
			state.answers[state.quizIndex] = action.payload
			state.quizIndex += 1

			if (state.quizIndex === 10) {
				state.quizIndex = 0
			}
		},
		init: (state) => {
			state.questions = []
			state.answers = []
			state.quizIndex = 0
		},
		before: (state) => {
			state.quizIndex -= 1
		},
	},
})

const selectQuestion = (state: RootState) => state.quiz

export const getResult = createSelector(selectQuestion, (state) => {
	const { questions, answers } = state
	let correctCount = 0
	let incorrectCount = 0
	const finalResult = questions.map((question, index) => {
		const sampleAnswer = question["correct_answer"] === "True" ? true : false
		if (sampleAnswer === answers[index]) {
			correctCount += 1
			return true
		} else {
			incorrectCount++
			return false
		}
	})
	return {
		correctCount,
		incorrectCount,
		finalResult,
	}
})

export const selectQuestions = createSelector(
	selectQuestion,
	(state) => state.questions
)

export const selectAnswers = createSelector(
	selectQuestion,
	(state) => state.answers
)

export const { postAnswer, postQuestions, before, init } = quizSlice.actions

export const selectQuizIndex = (state: RootState) => state.quiz.quizIndex

export default quizSlice.reducer
