import React, {useState, useEffect} from 'react';
import * as Yup                     from 'yup';
import {Formik, Form}               from 'formik';
import {TextField, StyledButton}    from '../../../../components/forms/FormikComponents';
import {Link}                       from 'react-router-dom';
import PropTypes                    from 'prop-types';
import MyFacebookLoginButton        from './MyFacebookLoginButton';
import MyGoogleLoginButton          from './MyGoogleLoginButton';
import ServerErrors                 from './ServerErrors';


const validate = Yup.object({
    username: Yup.string()
                 .email('Invalid email address')
                 .required('Required'),
    password: Yup.string()
                 .required('Required'),

});


const LoginForm = ({initialValues, serverErrors, onSubmit, facebookLogin, googleLogin, facebookLoginFailure, googleLoginFailure}) => {
    const loginInitialValues = {
        username: '',
        password: ''
    };
    const combinedInitialValues = Object.assign(loginInitialValues, initialValues);

    const [showServerErrors, setShowServerErrors] = useState(false);
    useEffect(() => {
        setShowServerErrors(serverErrors !== undefined);
    }, [serverErrors]);

    console.log('serverErrors', serverErrors);
    console.log('showServerErrors', showServerErrors);
    return (
        <Formik
            initialValues={combinedInitialValues}
            validationSchema={validate}
            onSubmit={onSubmit}>
            <div className="bg-white shadow-md rounded-lg px-8 py-8 pt-8">
                <Form>
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
                    {showServerErrors &&
                    <ServerErrors errors={serverErrors} onClose={() => setShowServerErrors(false)}/>}
                </Form>

                <div className="flex-col border-t-2 pt-4 px mx-auto">
                    <div className="px-4">
                        <MyFacebookLoginButton
                            callback={facebookLogin}
                            onFailure={facebookLoginFailure}/>
                    </div>
                    <div className="px-4">
                        <MyGoogleLoginButton
                            onFailure={googleLoginFailure}
                            onSuccess={googleLogin}/>
                    </div>
                </div>

                <div className='flex justify-end text-blue-400'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Link to="/signup">Don't have an account?</Link>
                </div>
            </div>
        </Formik>
    );
};

LoginForm.propTypes = {
    facebookLogin       : PropTypes.func.isRequired,
    facebookLoginFailure: PropTypes.func.isRequired,
    googleLogin         : PropTypes.func.isRequired,
    googleLoginFailure  : PropTypes.func.isRequired,
    initialValues       : PropTypes.object.isRequired,
    onSubmit            : PropTypes.func.isRequired,
    serverErrors        : PropTypes.array.isRequired
};

export default LoginForm;