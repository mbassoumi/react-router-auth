import React, {useState} from 'react';
import logoImg           from '../../../img/logo.png';
import SignupForm        from './components/SignupForm';
import {signupApi}       from './apis/signup';
import {useAuth}         from '../../../context/auth';
import {Redirect}        from 'react-router-dom';


const Signup = () => {

    const {setAuthTokens, setAuthUser} = useAuth();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const siignup = (values, {setSubmitting}) => {
        const {status, result} = signupApi(values);
        if (status === 200) {
            setSubmitting(false);
            setAuthUser(result.user);
            setAuthTokens(result.token);
            setIsLoggedIn(true);
        } else {
            alert('error in Signup api');
        }
    };

    if (isLoggedIn) {
        return <Redirect to='/dashboard'/>;
    }
    return (
        <div className="py-12 px-4 sm:w-full md:w-1/2 xl:w-1/3 mx-auto ">
            <img src={logoImg} alt="Logo" className='mx-auto h-32'/>
            <div className='shadow-xl'>
                <SignupForm onSubmit={siignup} initialValues={{}}/>
            </div>
        </div>
    );
};

export default Signup;
