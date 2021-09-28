import { useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import { Home, LandingPage } from './pages';
import './App.css';

import ProtectedRoute from './protected-routes';

function App() {
	const [user, setUser] = useState(true);

	const handleLogin = (e: any) => {
		e.preventDefault();
		setUser(true);
	};

	const handleLogout = (e: any) => {
		e.preventDefault();
		setUser(false);
	};
	return (
		<div className='App'>
			<Switch>
				<ProtectedRoute exact path='/' />
				<Route exact path='/s'>
					<h1>SOME OTHER PAGE</h1>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
