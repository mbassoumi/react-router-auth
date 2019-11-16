import React                               from 'react';
import * as Yup                            from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';

const validate = Yup.object({
    firstName: Yup.string()
                  .min(5, 'Must be 5 characters or grater')
                  .required('Required'),
    lastName       : Yup.string()
                        .min(5, 'Must be 5 characters or grater')
                        .required('Required'),
    email          : Yup.string()
                        .email('Invalid email address`')
                        .required('Required'),
    password       : Yup.string()
                        .min(7, 'Password must be at least 7 characters')
                        .required('Required'),
    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Required'),
    // acceptedTerms  : Yup.boolean()
    //                     .required('Required')
    //                     .oneOf([true], 'You must accept the terms and conditions.'),
});

const signupInitialValues = {
    firstName: '',
    lastName       : '',
    email          : '',
    password       : '',
    confirmPassword: '',
    // acceptedTerms  : false
};

const SignupForm = ({initialValues, onSubmit}) => {

    const combinedInitialValues = Object.assign(signupInitialValues, initialValues);
    return (
        <Formik
            initialValues={combinedInitialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
            <Form>
                <div className='field-container'>
                    <label htmlFor="firstName">First Name</label>
                    <Field name='firstName' id="firstName" type="text"/>
                    <ErrorMessage name="firstName"/>
                </div>
                <div className='field-container'>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name='lastName' id="lastName" type="text"/>
                    <ErrorMessage name="lastName"/>
                </div>
                <div className='field-container'>
                    <label htmlFor="email">Email</label>
                    <Field name='email' id="email" type="email"/>
                    <ErrorMessage name="email"/>
                </div>
                <div className='field-container'>
                    <label htmlFor="password">Password</label>
                    <Field name='password' id="password" type="text"/>
                    <ErrorMessage name="password"/>
                </div>
                <div className='field-container'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field name='confirmPassword' id="confirmPassword" type="text"/>
                    <ErrorMessage name="confirmPassword"/>
                </div>
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </Form>
        </Formik>
    )
};


export default SignupForm;