import React, {useState} from 'react';
import {Redirect}        from 'react-router-dom';
import {useAuth}         from '../context/auth';
import logoImg           from '../img/logo.png';
import LoginForm         from '../components/forms/LoginForm';
import PropTypes         from 'prop-types';


// import {httpRequester}   from "../http-requester";


const Login = ({location}) => {

    const {setAuthTokens, setAuthUser} = useAuth();


    const responseFacebook = (response) => {
        const user = {
            loggedFrom : 'facebook',
            id         : response.id,
            displayName: response.name,
            email      : response.email,
            birthday   : response.name,
            address    : response.name,
            picture    : response.picture.data.url,
            firstName  : response.first_name,
            lastName   : response.last_name,
        };
        setAuthUser(user);
        setAuthTokens(response.accessToken);
    };
    const responseGoogle = (response) => {
        console.log(response);
        const profileObject = response.profileObj;
        if (profileObject !== undefined) {
            const user = {
                loggedFrom : 'google',
                id         : profileObject.googleId,
                displayName: profileObject.name,
                email      : profileObject.email,
                birthday   : profileObject.name,
                address    : profileObject.name,
                picture    : profileObject.imageUrl,
                firstName  : profileObject.givenName,
                lastName   : profileObject.familyName,
            };
            setAuthUser(user);
            setAuthTokens(response.accessToken);
        }
    };

    const referer = (location.state && location.state.referer) || '/';

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const setAuthContext = (token, user) => {
        setAuthUser(user);
        setAuthTokens(token);
    };


    const postLogin = (values, {setSubmitting}) => {
        if (values.username && values.password) {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                const user = {
                    displayName: values.username + ' Name',
                    firstName  : values.username + ' first name',
                    lastName   : values.username + ' last name',
                    email      : values.username,
                    birthday   : values.username + ' birthday',
                    address    : values.username + ' address'
                };
                setAuthContext('dummy token', user);
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
                <LoginForm
                    onSubmit={postLogin}
                    initialValues={{}}
                    facebookLogin={responseFacebook}
                    googleLogin={responseGoogle}
                />
            </div>
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