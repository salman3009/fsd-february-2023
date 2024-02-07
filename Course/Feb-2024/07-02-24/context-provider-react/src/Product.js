import {UseAuth} from './LanguageContext'

export const Product=()=>{

    const {getLanguage} = UseAuth();
   
    
    return <>
       <h2>Product Component</h2>
       <h3>{getLanguage}</h3>
     </>
}