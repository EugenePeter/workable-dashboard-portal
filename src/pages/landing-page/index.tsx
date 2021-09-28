import React from 'react';
import { SignIn } from '../../atomic';
import { Container } from '../../global-components';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styled from 'styled-components';

const LandingPage = () => {
	return (
		<Container>
			{/* <h1>LANDING PAGE</h1> */}
				<Switch>
					<Route exact path='signin'>
						<SignInSlot>
							<SignIn />
						</SignInSlot>
					</Route>
					<Link to='signin'>sign in</Link>
				</Switch>
		</Container>
	);
};

export default LandingPage;

export const SignInSlot = styled.div`
	width: 30%;
`;
