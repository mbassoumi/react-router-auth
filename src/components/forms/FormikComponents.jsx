import {ErrorMessage, Field, useField} from 'formik';
import classNames                      from 'classnames';
import React                           from 'react';
import PropTypes                       from 'prop-types';


const TextField = ({label, ...props}) => {


    const [, meta] = useField(props);
    const errors = meta.touched && meta.error;
    const classes = classNames(
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        {'border-red-500': errors},
        {'border-blue-300': !errors}
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

TextField.propTypes = {
    label: PropTypes.string,
    id   : PropTypes.string,
    name : PropTypes.string,
};


const CheckboxField = ({children, ...props}) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({...props, type: 'checkbox'});
    const errors = meta.touched && meta.error;
    const classes = classNames(
        'shadow   rounded mr-3  py-2 px-3 focus:outline-none focus:shadow-outline',
        {'border-red-500': errors},
        {'border-blue-300': !errors}
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

CheckboxField.propTypes = {
    children: PropTypes.any,
    id      : PropTypes.string,
    name    : PropTypes.string,
};


const StyledButton = (props) =>
    (
        <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline"
            {...props}
        >
            {props.children}
        </button>
    );

StyledButton.propTypes = {
    children: PropTypes.any,
};
export {TextField, CheckboxField, StyledButton};