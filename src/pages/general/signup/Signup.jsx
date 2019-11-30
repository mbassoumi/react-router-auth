import React, {useState} from 'react';
import logoImg           from '../../../img/logo.png';
import SignupForm        from './components/SignupForm';
import {signupApi}       from './apis/signup';
import {Link, Redirect}  from 'react-router-dom';
import {useDispatch}     from 'react-redux';
import {LOGIN}           from '../../../auth/constants/action-types';

const Signup = () => {

    const dispatch = useDispatch();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const siignup = (values, {setSubmitting}) => {
        const {status, result} = signupApi(values);
        if (status === 200) {
            dispatch({type: LOGIN});
            setSubmitting(false);
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
            <Link to="/">
                <img src={logoImg} alt="Logo" className='mx-auto h-32'/>
            </Link>
            <div className='shadow-xl'>
                <SignupForm onSubmit={siignup} initialValues={{}}/>
            </div>
        </div>
    );
};

export default Signup;
