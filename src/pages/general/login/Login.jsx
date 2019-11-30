import React, {useState}                           from 'react';
import {Link, Redirect}                            from 'react-router-dom';
import logoImg                                     from '../../../img/logo.png';
import LoginForm                                   from './components/LoginForm';
import PropTypes                                   from 'prop-types';
import {loginApi}                                  from './apis/loginApi';
import {googleLoginApi, googleLoginFailureApi}     from './apis/googleLoginApi';
import {facebookLoginApi, facebookLoginFailureApi} from './apis/facebookLoginApi';
import {useSelector, useDispatch}                  from 'react-redux';
import {LOGIN}                                     from '../../../auth/constants/action-types';
import {loginAction}                               from './actions';


const Login = () => {


    const dispatch = useDispatch();
    const withServerError = useSelector(state => state.auth.withServerError);
    const serverErrors = useSelector(state => state.auth.serverErrors);
    const isServerLoading = useSelector(state => state.auth.loading);


    const login = (values, {setSubmitting}) => {


        // const {status, result} = loginApi(values.username, values.password);
        // if (status === 200) {
        dispatch(loginAction(values.username, values.password));
        // } else {
        //     alert('error in login api');
        // }
        setSubmitting(false);
    };


    const facebookLogin = (response) => {
        const {status, result} = facebookLoginApi(response);
        if (status === 200) {
            dispatch({type: LOGIN});
        } else {
            alert('error in facebookLogin api');
            // eslint-disable-next-line no-console
            console.log('error in facebookLogin api', response);
        }
    };

    const facebookLoginFailure = (response) => {
        facebookLoginFailureApi(response);
        // eslint-disable-next-line no-console
        console.log('error in facebookLoginFailure api', response);
    };

    const googleLogin = (response) => {
        const {status, result} = googleLoginApi(response);
        if (status === 200) {
            dispatch({type: LOGIN});
        } else {
            alert('error in googleLogin api');
            // eslint-disable-next-line no-console
            console.log('error in googleLogin api', response);
        }
    };

    const googleLoginFailure = (response) => {
        googleLoginFailureApi(response);
        // eslint-disable-next-line no-console
        console.log('error in googleLoginFailure api', response);
    };

    return (
        <div className={isServerLoading ? 'disable-div' : ''}>
            <div className="py-12 px-4 sm:w-full md:w-1/2 xl:w-1/3 mx-auto ">
                <Link to="/">
                    <img src={logoImg} alt="Logo" className='mx-auto h-32'/>
                </Link>
                <div className='shadow-xl'>
                    <LoginForm
                        onSubmit={login}
                        initialValues={{}}
                        facebookLogin={facebookLogin}
                        facebookLoginFailure={facebookLoginFailure}
                        googleLogin={googleLogin}
                        googleLoginFailure={googleLoginFailure}
                        serverErrors={withServerError ? serverErrors : undefined}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
