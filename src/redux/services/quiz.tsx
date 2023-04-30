import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const quizApi = createApi({
	reducerPath: "quizApi",
	baseQuery: fetchBaseQuery({
		baseUrl:
			"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
	}),
	endpoints: (builder) => ({
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getQuestions: builder.query<any, void>({
			query: () => "",
		}),
	}),
})

export const { useGetQuestionsQuery, useLazyGetQuestionsQuery } = quizApi
