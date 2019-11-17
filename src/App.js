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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function fetchTokens() {
            return localStorage.getItem('tokens');
        }

        fetchTokens().then((tokens) => {
            if (tokens) {
                setAuthTokens(tokens);
            }
            setIsLoading(false);

        });
    }, []);

    const setTokens        = (data) => {

              if (data === undefined) {

                  localStorage.removeItem('tokens');

              } else {

                  localStorage.setItem('tokens', JSON.stringify(data));

              }
              setAuthTokens(data);

          },


          authContextValue = {
              authTokens,
              'setAuthTokens': setTokens,
              'user'         : {
                  'displayName': 'Majd Bassoumi',
                  'firstName'  : 'Majd',
                  'lastName'   : 'Bassoumi',
                  'email'      : 'mbbassoumi@gmail.com',
                  'birthday'   : '29-6-1995',
                  'address'    : 'Ramallah / Al-Bira'
              }
          };

    return (
        !isLoading &&
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
