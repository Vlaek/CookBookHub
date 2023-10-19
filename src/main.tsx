import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { store } from './store/store'
import Container from './containers/Container/Container.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Container>
				<App />
			</Container>
		</Provider>
	</React.StrictMode>,
)
