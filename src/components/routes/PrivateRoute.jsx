import React             from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes         from 'prop-types';
import {useSelector}     from 'react-redux';

const PrivateRoute = ({component: Component, ...rest}) => {

    const auth = useSelector(state => state.auth);

    return (
        <Route {...rest}
               render={(props) => (
                   (auth && auth.token) ? (
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
