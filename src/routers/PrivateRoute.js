import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, authed, ... rest }) => {
	return(
		<Route
			{...rest}
			render={(props) => (
			  authed 
			 ? <Component {...props}/> 
			 : <Redirect to="/RegisterPage" />
			)}
		/>
	)
}

export default PrivateRoute;