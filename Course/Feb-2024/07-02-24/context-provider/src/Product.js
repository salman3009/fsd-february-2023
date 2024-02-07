import {UserLanguage} from './App';
import { useContext } from 'react';

export const Product=()=>{
   
    const {getLanguage} = useContext(UserLanguage);

    return <>
       <h2>Product Component</h2>
       <h3>{getLanguage}</h3>
     </>
}