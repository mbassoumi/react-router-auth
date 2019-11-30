import React, {useEffect, useState} from 'react';
import Routes                       from './routes';
import {useDispatch}                from 'react-redux';

const App = () => {

    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch()
    }, []);

    return (
        !isLoading &&
        (
            <Routes/>
        )
    );

};

export default App;
