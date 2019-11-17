import React      from 'react';
import logoImg    from '../img/logo.png';
import SignupForm from '../components/forms/SignupForm';


const Signup = () => {
    const onSubmit = (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };
    return (
        <div className="py-12 px-4 sm:w-full md:w-1/2 xl:w-1/3 mx-auto ">
            <img src={logoImg} alt="Logo" className='mx-auto h-32'/>
            <div className='shadow-xl'>
                <SignupForm onSubmit={onSubmit} initialValues={{}}/>
            </div>
        </div>
    );
};

export default Signup;
