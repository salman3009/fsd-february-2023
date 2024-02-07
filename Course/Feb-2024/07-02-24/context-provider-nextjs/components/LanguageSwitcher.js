"use client"
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    
    const {language,setLanguageHandler} = useLanguage();

    return (
        <select value={language} onChange={setLanguageHandler} >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
        </select>
    );
};

export default LanguageSwitcher;
