import React               from 'react';
import PropTypes           from 'prop-types';
import GoogleLogin         from 'react-google-login';
import {GoogleLoginButton} from 'react-social-login-buttons';


const MyGoogleLoginButton = ({onSuccess, onFailure}) => (
    <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} //CLIENTID NOT CREATED YET
        buttonText=""
        render={renderProps => (
            <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}/>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
    />
);

MyGoogleLoginButton.propTypes = {
    onFailure: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired
};


export default MyGoogleLoginButton;