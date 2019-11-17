import React, {useEffect} from 'react';
import {Route, Redirect}  from 'react-router-dom';
import {useAuth}          from '../../context/auth';
import PropTypes          from 'prop-types';


const NoTokenRoute = ({component: Component, ...rest}) => {
    const {authTokens} = useAuth();

    useEffect(() => {

        console.log('mount');
        return () => {
            console.log('here!');
        };
    }, []);

    return (
        <Route {...rest}
               render={(props) => (
                   authTokens ? (
                       <Redirect to="/dashboard"/>
                   ) : (
                       <Component {...props}/>
                   )
               )}/>
    );
};

NoTokenRoute.propTypes = {
    component: PropTypes.any,
};

export default NoTokenRoute;