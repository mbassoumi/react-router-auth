import React                                    from 'react';
import * as Yup                                 from 'yup';
import {Formik, Form}                           from 'formik';
import {TextField, StyledButton}                from './FormikComponents';
import {Link}                                   from 'react-router-dom';
import PropTypes                                from 'prop-types';
import FacebookLogin                            from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin                              from 'react-google-login';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';


const validate = Yup.object({
    username: Yup.string()
                 .email('Invalid email address')
                 .required('Required'),
    password: Yup.string()
                 .required('Required'),

});


const LoginForm = ({initialValues, onSubmit, facebookLogin, googleLogin}) => {
    const loginInitialValues = {
        username: '',
        password: ''
    };
    const combinedInitialValues = Object.assign(loginInitialValues, initialValues);

    return (
        <Formik
            initialValues={combinedInitialValues}
            validationSchema={validate}
            onSubmit={onSubmit}>
            <Form className="bg-white shadow-md rounded-lg px-8 py-8 pt-8">
                <TextField
                    label='Username'
                    id='username'
                    name='username'
                    type='email'
                    placeholder='Your Username'
                />
                <TextField
                    label='Password'
                    id='password'
                    name='password'
                    type='password'
                    autoComplete="on"
                    placeholder='Your Password'
                />
                <div className='px-4 py-2 pb-4'>

                    <StyledButton
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline"
                        type='submit'
                    >
                        Login
                    </StyledButton>
                </div>

                <div className="flex-col border-t-2 pt-4 px mx-auto">
                    <div className="px-4">
                        <FacebookLogin
                            appId={process.env.REACT_APP_FACEBOOK_APP_ID} //APP ID NOT CREATED YET
                            fields="name,email,picture,first_name,last_name"
                            callback={facebookLogin}
                            icon="fa-facebook"
                            cookie={true}
                            xfbml={true}
                            render={renderProps => (
                                <FacebookLoginButton onClick={renderProps.onClick}/>
                            )}
                        />
                    </div>
                    <div className="px-4">
                        <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} //CLIENTID NOT CREATED YET
                            buttonText=""
                            render={renderProps => (
                                <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}/>
                            )}
                            onSuccess={googleLogin}
                            onFailure={googleLogin}
                        />
                    </div>
                </div>

                <div className='flex justify-end text-blue-400'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Link to="/signup">Don't have an account?</Link>
                </div>
            </Form>
        </Formik>
    );
};

LoginForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit     : PropTypes.func,
    facebookLogin: PropTypes.func,
    googleLogin  : PropTypes.func,
};
export default LoginForm;