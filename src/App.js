import React, {useEffect, useState} from 'react';
import {AuthContext}                from './context/auth';
import Routes                       from './routes';


const App = () => {


    const [authTokens, setAuthTokens] = useState();
    const [authUser, setAuthUser] = useState();
    const [isTokenLoading, setIsTokenLoading] = useState(true);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {

        const fetchTokens = async () => {
            return localStorage.getItem('tokens');
        };

        const fetchUserInfo = async () => {
            return localStorage.getItem('user');
        };

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
            <Routes/>
        </AuthContext.Provider>)
    );

};

export default App;
