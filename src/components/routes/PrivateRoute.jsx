import React             from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth}         from '../../context/auth';
import PropTypes         from 'prop-types';


const PrivateRoute = ({component: Component, ...rest}) => {
    const {authTokens} = useAuth();

    return (
        <Route {...rest}
               render={(props) => (
                   authTokens ? (
                       <Component {...props}/>
                   ) : (
                       <Redirect to={{pathname: '/login', state: {referer: props.location}}}/>
                   )
               )}/>
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.any,
    location : PropTypes.object
};


export default PrivateRoute;