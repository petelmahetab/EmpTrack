import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage';

export const AuthContext=createContext();

function AuthProvider({children}) {

    useEffect(()=>{
        setLocalStorage();
      
        const d=getLocalStorage();
        console.log("Your Data Is ",d.employee)
      },[])//Empty array dependancy will Run only Once..
  return (
    <div>
        <AuthContext.Provider value={"Fuck u Browser"}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
