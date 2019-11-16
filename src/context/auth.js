import {createContext, useContext, useEffect} from 'react';

export const AuthContext = createContext();

export const useAuth = () => (
    useContext(AuthContext)
);