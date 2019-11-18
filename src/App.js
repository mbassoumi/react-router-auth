import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router}    from 'react-router-dom';
import PrivateRoute                 from './components/routes/PrivateRoute';
import {AuthContext}                from './context/auth';
import Login                        from './pages/Login';
import Signup                       from './pages/Signup';
import NoTokenRoute                 from './components/routes/NoTokenRoute';
import PublicRoute                  from './components/routes/PublicRoute';
import Public                       from './pages/Public';
import Dashboard                    from './pages/Dashboard';


const App = () => {

    const [authTokens, setAuthTokens] = useState();
    const [authUser, setAuthUser] = useState();
    const [isTokenLoading, setIsTokenLoading] = useState(true);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {

        async function fetchTokens() {
            return localStorage.getItem('tokens');
        }

        async function fetchUserInfo() {
            return localStorage.getItem('user');
        }

        fetchTokens().then((tokens) => {
            if (tokens) {
                setAuthTokens(tokens);
            }
            setIsTokenLoading(false);

        });

        fetchUserInfo().then((user) => {
            if (user) {
                setAuthUser(JSON.parse(user));
            }
            setIsUserLoading(false);
        });
    }, []);


    const setTokens = (data) => {

        if (data === undefined) {
            localStorage.removeItem('tokens');
        } else {
            localStorage.setItem('tokens', JSON.stringify(data));
        }
        setAuthTokens(data);

    };

    const setAuthUserInfo = (user) => {
        if (user === undefined) {
            localStorage.removeItem('user');
        } else {
            localStorage.setItem('user', JSON.stringify(user));
        }
        setAuthUser(user);
    };

    const authContextValue = {
        authTokens,
        setAuthTokens: setTokens,
        authUser,
        setAuthUser  : setAuthUserInfo
    };

    return (
        !isTokenLoading && !isUserLoading &&
        (<AuthContext.Provider value={authContextValue}>

            <Router>
                <div>
                    <PublicRoute exact={true} path="/" component={Public}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <NoTokenRoute path="/login" component={Login}/>
                    <NoTokenRoute path="/signup" component={Signup}/>

                </div>
            </Router>
        </AuthContext.Provider>)
    );

};

export default App;
