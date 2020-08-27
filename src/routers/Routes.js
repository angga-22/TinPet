import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import SearchResult from '../pages/SearchResult';
import Notification from '../pages/Notification';
import Message from '../pages/Message';
import LandingPage from '../pages/LandingPage';
// import PrivateRoute from './PrivateRoute';


const Routes = () => {
    return (
        <Fragment>
            <Route path='/' exact component={LandingPage} />
            <Route path='/register' exact component={RegisterPage} />
            <Route path='/login' exact component={LoginPage} />
            <Route path='/homepage' exact component={HomePage} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/searchresult' exact component={SearchResult} />
            <Route path='/notif' exact component={Notification} />
            <Route path='/message' exact component={Message} />
        </Fragment>
    )
}

export default Routes;
        // <PrivateRoute path="/login" exact component={RegisterPage} />