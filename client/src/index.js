import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import AppProvider from './contexts/AppProvider'
import './styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	// </React.StrictMode>
)