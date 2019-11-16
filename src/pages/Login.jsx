import React, {useState}                        from 'react';
import {Redirect}                         from 'react-router-dom';
import axios                                    from 'axios';
import {useAuth}                                from "../context/auth";
import logoImg                                  from "../img/logo.png";
import LoginForm                                from "../components/forms/LoginForm";

const Login = (props) => {

    const onSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    const referer = (props.location.state && props.location.state.referer) || '/';

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {setAuthTokens} = useAuth();


    const postLogin = (values, {setSubmitting}) => {
        if (values.username && values.password) {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                setAuthTokens("dummy token");
                setIsLoggedIn(true);
            }, 400);
        } else {
            alert('error');
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
        <div className="py-12 px-4 sm:w-full md:w-1/2 xl:w-1/3 mx-auto ">
            <img src={logoImg} alt="Logo" className='mx-auto h-32'/>
            <div className='shadow-xl'>
                <LoginForm onSubmit={postLogin} initialValues={{}}/>
            </div>
        </div>
    );
}

export default Login;