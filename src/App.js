import React, {useState} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import PrivateRoute from "./components/routes/PrivateRoute";
import {AuthContext} from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoTokenRoute from "./components/routes/NoTokenRoute";
import PublicRoute from "./components/routes/PublicRoute";
import Public from "./pages/Public";


const App = () => {

    const [authTokens, setAuthTokens] = useState();

    const setTokens = (data) => {
        localStorage.setItem('tokens', JSON.stringify(data));
        setAuthTokens(data);
    };

    const authContextValue = {
        authTokens,
        setAuthTokens: setTokens
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home Page</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin Page</Link>
                        </li>
                        <li>
                            <Link to="/login">Login Page</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup Page</Link>
                        </li>
                        <li>
                            <Link to="/public">Public Page</Link>
                        </li>
                    </ul>

                    <PrivateRoute exact={true} path="/" component={Home}/>
                    <NoTokenRoute path="/login" component={Login}/>
                    <NoTokenRoute path="/signup" component={Signup}/>
                    <PrivateRoute path="/admin" component={Admin}/>
                    <PublicRoute path="/public" component={Public}/>

                </div>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
