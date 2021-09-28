import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import { Home, LandingPage } from '../pages';
import { ProtectedRoutesContext } from './ProtectedRoutesProvider';

const ProtectedRouteConsumer: React.FC<any> = (props) => {
	const { ...rest } = props;
	const protectedRoutesContext = useContext(ProtectedRoutesContext);
	const { user, actionsProp } = protectedRoutesContext;

	return <Route {...rest}>{user ? <Home /> : <LandingPage />}</Route>;
};

export default ProtectedRouteConsumer;
