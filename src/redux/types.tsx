interface Question {
	category: string
	type: boolean
	difficulty: string
	question: string
	correct_answer: string
	incorrect_answers: string[]
}

export type { Question }
