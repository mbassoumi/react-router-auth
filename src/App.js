import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router}    from 'react-router-dom';
import Admin                        from "./pages/Admin";
import PrivateRoute                 from "./components/routes/PrivateRoute";
import {AuthContext}                from "./context/auth";
import Login                        from "./pages/Login";
import Signup                       from "./pages/Signup";
import NoTokenRoute                 from "./components/routes/NoTokenRoute";
import PublicRoute                  from "./components/routes/PublicRoute";
import Public                       from "./pages/Public";
import Dashboard                    from "./pages/Dashboard";


const App = () => {

    const [authTokens, setAuthTokens] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchTokens() {
            return localStorage.getItem('tokens');
        }

        fetchTokens().then((tokens) => {
            console.log('tokens');
            console.log(tokens);
            if (tokens) {
                setAuthTokens(tokens);
            }
            setIsLoading(false)
        });

    }, []);

    const setTokens = (data) => {
        if (data === undefined){
            localStorage.removeItem('tokens');
        }else {
            localStorage.setItem('tokens', JSON.stringify(data));
        }
        setAuthTokens(data);
    };


    const authContextValue = {
        authTokens,
        setAuthTokens: setTokens,
        user         : {
            displayName: 'Majd Bassoumi',
            firstName  : 'Majd',
            lastName   : 'Bassoumi',
            email      : 'mbbassoumi@gmail.com',
            birthday   : '29-6-1995',
            address: 'Ramallah / Al-Bira'
        }
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {
                !isLoading &&
                (<Router>
                    <div>
                        {/*<ul>*/}
                        {/*    <li>*/}
                        {/*        <Link to="/">Home Page</Link>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <Link to="/admin">Admin Page</Link>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <Link to="/login">Login Page</Link>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <Link to="/signup">Signup Page</Link>*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        <Link to="/public">Public Page</Link>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}

                        <PublicRoute exact={true} path="/" component={Public}/>
                        <PrivateRoute path="/dashboard" component={Dashboard}/>
                        <NoTokenRoute path="/login" component={Login}/>
                        <NoTokenRoute path="/signup" component={Signup}/>

                    </div>
                </Router>)
            }
        </AuthContext.Provider>
    );
};

export default App;
