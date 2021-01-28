import React from 'react';
import { AuthMycontext } from '../../context/AuthContext'
import  PageError from '../../PageError/PageError'

 const PrivateRoutes = ({component:Component,...rest}) => {
    const { currentUser } = AuthMycontext();
    return (
        currentUser ? 
        <Component {...rest}/> :<PageError></PageError> 
    );
};

export default PrivateRoutes;