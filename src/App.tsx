import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Layout from "./components/Layout"
import Routes from "./routes"

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Layout>
					<Routes />
				</Layout>
			</Provider>
		</BrowserRouter>
	)
}

export default App
