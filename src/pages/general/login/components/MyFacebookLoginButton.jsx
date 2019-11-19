import React                 from 'react';
import FacebookLogin         from 'react-facebook-login/dist/facebook-login-render-props';
import PropTypes             from 'prop-types';
import {FacebookLoginButton} from 'react-social-login-buttons';


const MyFacebookLoginButton = ({callback, onFailure}) => (
    <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID} //APP ID NOT CREATED YET
        fields="name,email,picture,first_name,last_name"
        callback={callback}
        onFailure={onFailure}
        scope="public_profile, email, user_birthday"
        icon="fa-facebook"
        cookie={true}
        xfbml={true}
        render={renderProps => (
            <FacebookLoginButton onClick={renderProps.onClick}/>
        )}
    />
);

MyFacebookLoginButton.propTypes = {
    callback : PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired
};


export default MyFacebookLoginButton;