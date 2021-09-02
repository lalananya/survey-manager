import {createContext} from 'react';

const LoginContext = createContext({
    _status : 'default',
    _setStatus : ()=>{},
});

export default LoginContext;