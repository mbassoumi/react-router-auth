import React        from 'react';
import PublicRoute  from '../../components/routes/PublicRoute';
import LandingPage  from './landing/LandingPage';
import PrivateRoute from '../../components/routes/PrivateRoute';
import Dashboard    from './dashboard/Dashboard';
import NoTokenRoute from '../../components/routes/NoTokenRoute';
import Login        from './login/Login';
import Signup       from './signup/Signup';


export default (
    <>
        <PublicRoute key="home" exact={true} path="/" component={LandingPage}/>
        <PrivateRoute key="dashboard" path="/dashboard" component={Dashboard}/>
        <NoTokenRoute key="login" path="/login" component={Login}/>
        <NoTokenRoute key="signup" path="/signup" component={Signup}/>
    </>
);