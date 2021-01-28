import React, { createContext, useContext, useEffect, useState } from 'react';
import {Autentication } from '../configFirestore/config'

// creamos el contexto
export const myContext = createContext()

// exportar el contexto a toda la aplicacion 
export const AuthMycontext = ()=> useContext(myContext)

function AuthContext({ children}) {
    const [currentUser,setCurrentUser] = useState()

    // funcion de login de firebase
    const login = (email,password)=>{
        return Autentication.signInWithEmailAndPassword(email,password)
    }

    const logout = ()=>{
        return Autentication.signOut()
    }
    useEffect(()=>{
        // verificamos si hay un usuario auntenticado y lo mandamos al contexto
        const unsuscribe = Autentication.onAuthStateChanged(user=>{
            setCurrentUser(user)
        })

        return unsuscribe
    },[])


    const value = {
        currentUser,
        login,
        logout
    }


    return (
        <myContext.Provider value={value}>
            {children}
        </myContext.Provider>
    );
}

export default AuthContext;