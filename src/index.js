import { render } from "react-dom"
import React from "react"
import { Provider } from "react-redux"

import "./app.css"

import App from "./Containers/App"
import store from "./Store/configureStore"

render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById("app")
)

require("./serviceWorker")
if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
		navigator.serviceWorker
			.register("./serviceWorker.js", { scope: "/" })
			.then(() => {
				// registration.pushManager.subscribe({ userVisibleOnly: true })
			})
			.catch(error => {
				throw error
			})
	})
}
