import React, {useState} from 'react';
import {Redirect}        from 'react-router-dom';
import {useAuth}         from '../context/auth';
import logoImg           from '../img/logo.png';
import LoginForm         from '../components/forms/LoginForm';
import PropTypes         from 'prop-types';
import FacebookLogin     from 'react-facebook-login';
import GoogleLogin       from 'react-google-login';

// import {httpRequester}   from "../http-requester";


const Login = ({location}) => {

    const responseFacebook = (response) => {
        console.log(response);
    }
    const responseGoogle = (response) => {
        console.log(response);
    }

    const referer = (location.state && location.state.referer) || '/';

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {setAuthTokens} = useAuth();


    const postLogin = (values, {setSubmitting}) => {
        if (values.username && values.password) {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                setAuthTokens('dummy token');
                setIsLoggedIn(true);
            }, 400);
        } else {
            alert('error');
        }

        // httpRequester.post('login', values)
        //              .then(result => {
        //                  console.log(result);
        //              });

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
            <FacebookLogin
                appId="2512425312375054" //APP ID NOT CREATED YET
                fields="name,email,picture"
                callback={responseFacebook}
            />
            <GoogleLogin
                clientId="248514193406-17vsigi4aqlru98n8v4so6liao8kc5bi.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
    );
};

Login.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            referer: PropTypes.object
        })
    }),
};

export default Login;