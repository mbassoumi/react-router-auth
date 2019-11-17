import React     from 'react';
import {Route}   from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({component: Component, ...rest}) => {

    return (
        <Route {...rest}
               render={(props) => (
                   <Component {...props}/>
               )}/>
    );
};

PublicRoute.propTypes = {
    component: PropTypes.any
};


export default PublicRoute;