import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import PrivateRoute from "./components/routes/PrivateRoute";
import {AuthContext} from "./context/auth";
import Login from "./pages/Login";


function App() {
    return (
        <AuthContext.Provider value={false}>
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
                    </ul>

                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/admin" component={Admin}/>

                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
