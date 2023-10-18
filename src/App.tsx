import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './router/router'
import Main from './pages/Main/Main'

const App: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => (
					<Route key={index} path={route.path} element={route.element}></Route>
				))}
				<Route path='*' element={<Main />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
