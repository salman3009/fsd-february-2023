import  { useState,createContext, useContext } from 'react';

export const UserLanguage = createContext();

export const UseAuth=()=>{
    return useContext(UserLanguage);
}


export const LanguageContext = ({children})=>{
    const [getLanguage,setLanguage] = useState("en");

    const setLanguageHandler=(event)=>{
      setLanguage(event.target.value)
    }

     return (<UserLanguage.Provider value={{getLanguage,setLanguageHandler}}>
        {children}
      </UserLanguage.Provider>)
}