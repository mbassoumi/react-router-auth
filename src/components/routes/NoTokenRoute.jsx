import React             from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes         from 'prop-types';
import {useSelector}     from 'react-redux';


const NoTokenRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(state => state.auth);
    console.log('disable-div');
    console.log('auth && auth.token', auth, auth.token);
    return (
        <Route {...rest}
               render={(props) => (
                   (auth && auth.token) ? (
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
