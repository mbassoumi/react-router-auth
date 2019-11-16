import React        from "react";
import {Link}       from 'react-router-dom';
import logoImg      from "../img/logo.png";
import {Card, Logo} from '../components/AuthForm';
import SignupForm   from "../components/Signup/SignupForm";


const Signup = () => {
    const onSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };
    return (
        <Card>
            <Logo src={logoImg}/>
            <SignupForm onSubmit={onSubmit} initialValues={{}}/>
            <Link to="/login">Already have an account?</Link>
        </Card>
    );
};

export default Signup;