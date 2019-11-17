import React                                    from 'react';
import * as Yup                                 from 'yup';
import {Formik, Form}                           from 'formik';
import {Link}                                   from 'react-router-dom';
import {CheckboxField, TextField, StyledButton} from './FormikComponents';
import PropTypes                                from 'prop-types';


const validate = Yup.object({
    firstName      : Yup.string()
                        .min(5, 'Must be 5 characters or grater')
                        .required('Required'),
    lastName       : Yup.string()
                        .min(5, 'Must be 5 characters or grater')
                        .required('Required'),
    email          : Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
    password       : Yup.string()
                        .min(7, 'Password must be at least 7 characters')
                        .required('Required'),
    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Passwords must match')
                        .required('Required'),
    acceptedTerms  : Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions.'),
});


const signupInitialValues = {
    firstName      : '',
    lastName       : '',
    email          : '',
    password       : '',
    confirmPassword: '',
    acceptedTerms  : false
};

const SignupForm = ({initialValues, onSubmit}) => {

    const combinedInitialValues = Object.assign(signupInitialValues, initialValues);
    return (
        <Formik
            initialValues={combinedInitialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
            <Form className=" bg-white shadow-md rounded-lg px-8 py-8 pt-8">
                <div className="flex">
                    <div className="w-1/2">
                        <TextField
                            label='First Name'
                            id='firstName'
                            name='firstName'
                            type='text'
                            placeholder='Your first name'
                        />
                    </div>
                    <div className="w-1/2">
                        <TextField
                            label='Last Name'
                            id='lastName'
                            name='lastName'
                            type='text'
                            placeholder='Your last name'
                        />
                    </div>
                </div>
                <TextField
                    label='Email'
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Your Email'
                />
                <TextField
                    label='Password'
                    id='password'
                    name='password'
                    type='password'
                    autoComplete="on"
                    placeholder='Your Password'
                />
                <TextField
                    label='Confirm Password'
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    autoComplete="on"
                    placeholder='Confirm Password'
                />

                <CheckboxField name='acceptedTerms'>
                    I accept the terms and conditions
                </CheckboxField>

                <div className="flex px-4 pb-4">
                    <div className="w-1/2 mr-2">
                        <StyledButton type='submit'>
                            Signup
                        </StyledButton>
                    </div>
                    <div className="w-1/2 ml-2">
                        <StyledButton type='reset'>
                            Reset
                        </StyledButton>
                    </div>
                </div>
                <div className='flex justify-end text-blue-400'>
                    <Link to="/login">Already have an account?</Link>
                </div>
            </Form>
        </Formik>
    );
};

SignupForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit     : PropTypes.func
};

export default SignupForm;