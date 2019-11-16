import React                                         from 'react';
import * as Yup                                      from 'yup';
import {Formik, Field, useField, Form, ErrorMessage} from 'formik';
import classNames                                    from 'classnames'
import {Link}                                        from "react-router-dom";

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


const TextField = ({label, ...props}) => {


    const [, meta] = useField(props);
    const errors = meta.touched && meta.error;
    const classes = classNames(
        "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
        {"border-red-500": errors},
        {"border-blue-300": !errors}
    );
    return (
        <div className='field-container px-4 pb-4'>
            <label htmlFor={props.id} className='text-sm block font-bold  pb-2'>{label} </label>
            <Field name={props.name}
                   {...props}
                   className={classes}/>

            <div className="text-red-500 text-xs italic">
                <ErrorMessage name={props.name}/>
            </div>
        </div>
    );
};

const CheckboxField = ({children, ...props}) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({...props, type: 'checkbox'});
    const errors = meta.touched && meta.error;
    const classes = classNames(
        "shadow   rounded mr-3  py-2 px-3 focus:outline-none focus:shadow-outline",
        {"border-red-500": errors},
        {"border-blue-300": !errors}
    );

    return (
        <div className='field-container px-4 pb-4'>
            <label className="checkbox">
                <input type="checkbox" {...field} {...props} className={classes}/>
                {children}
            </label>
            <div className="text-red-500 text-xs italic">
                <ErrorMessage name={props.name}/>
            </div>
        </div>
    );
};

const signupInitialValues = {
    firstName      : '',
    lastName       : '',
    email          : '',
    password       : '',
    confirmPassword: '',
    acceptedTerms  : false
};

const SignupForm = ({initialValues, onSubmit}) => {

    const renderButton = (type, label) => (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline"
            type={type}>{label}
        </button>
    );

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
                    placeholder='Your Password'
                />
                <TextField
                    label='Confirm Password'
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                />

                <CheckboxField name='acceptedTerms'>
                    I accept the terms and conditions
                </CheckboxField>

                <div>
                    {renderButton('submit', 'Sign up')}
                    {renderButton('reset', 'Reset')}
                </div>
                <div className='flex justify-end text-blue-400'>
                    <Link to="/login">Already have an account?</Link>
                </div>
            </Form>
        </Formik>
    )
};


export default SignupForm;