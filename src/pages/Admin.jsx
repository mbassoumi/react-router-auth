import React     from 'react';
import {Button}  from "../components/AuthForm";
import {useAuth} from "../context/auth";
import {Link}    from "react-router-dom";

const Admin = () => {
    const {setAuthTokens} = useAuth();

    const logOut = () => {
        setAuthTokens();
    };

    return (
        <div>
            <div>Admin Page</div>
            <Button onClick={logOut}>Log out</Button>
            <Link to='/dashboard'>Dashboard</Link>
        </div>
    );
};

export default Admin;