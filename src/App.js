import React, {useEffect, useState} from 'react';
import Routes                       from './routes';
import {useSelector}                from 'react-redux';

const App = () => {

    const auth = useSelector(state => state.auth);
    console.log('App auth', auth);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

    }, []);

    return (
        !isLoading &&
        (
            <Routes/>
        )
    );

};

export default App;
