import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {useAuth} from "../context/auth";
import logoImg from "../img/logo.png";
import {Card, Logo, Form, Input, Button, Error} from '../components/AuthForm';

const Login = (props) => {

    const referer = (props.location.state && props.location.state.referer) || '/';

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const {setAuthTokens} = useAuth();


    const postLogin = () => {
        if (userName && password) {
            setAuthTokens("dummy token");
            setIsLoggedIn(true);
            setIsError(false);
        } else {
            setIsError(true);
        }

        // axios.post("http://127.0.0.1:8080/token", {
        //     userName,
        //     password
        // }).then(result => {
        //     if (result.status === 200) {
        //         console.log(result);
        //         // setAuthTokens(result.data);
        //         // setIsLoggedIn(true);
        //     } else {
        //         setIsError(true);
        //     }
        // }).catch(e => {
        //     setIsError(true);
        // });

    };

    if (isLoggedIn) {
        return <Redirect to={referer}/>;
    }


    return (
        <Card>
            <Logo src={logoImg}/>
            <Form>
                <Input
                    type="username"
                    value={userName}
                    onChange={event => setUserName(event.target.value)}
                    placeholder="username"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="password"
                />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
            {isError && <Error>The username or password provided were incorrect!</Error>}
        </Card>
    );
}

export default Login;