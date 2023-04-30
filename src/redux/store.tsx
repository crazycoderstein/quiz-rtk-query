import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { quizApi } from "./services/quiz"
import quizReducer from "./feature/quizSlice"

export const store = configureStore({
	reducer: {
		[quizApi.reducerPath]: quizApi.reducer,
		quiz: quizReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(quizApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
