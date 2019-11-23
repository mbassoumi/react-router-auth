import React, {useEffect, useState} from 'react';
import ReactDOM                     from 'react-dom';
import App                          from './App';
import './styles/tailwind.css';
import * as serviceWorker           from './serviceWorker';

const Index = () => {

    const [isOnline, setOnline] = useState(true);
    useEffect(() => {
        window.addEventListener('online', () => setOnline(true));
        window.addEventListener('offline', () => setOnline(false));
        return (() => {
            window.removeEventListener('online');
            window.removeEventListener('offline');
        });
    }, []);


    const offlineAlert = () => (
        <div className="m-1">
            <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                    OFFLINE
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <p>You are working offline now. any changes will be synced when you return in online state</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {!isOnline && offlineAlert()}
            <App/>
        </>
    );
};

/*
 *
 * https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
 */
ReactDOM.render(<Index/>, document.getElementById('root'));

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
// serviceWorker.unregister();
serviceWorker.register();
