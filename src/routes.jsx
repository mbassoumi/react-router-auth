import React                     from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import generalRoutes             from './pages/general/routes';


const Routes = () => (
    <Router>
        {generalRoutes}
    </Router>
);

export default Routes;