import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/tailwind.css';

/*
 *
 * https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
 */
ReactDOM.render(<App />, document.getElementById('root'));

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
// serviceWorker.unregister();
