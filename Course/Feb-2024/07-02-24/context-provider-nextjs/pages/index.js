"use client"
import LanguageSwitcher from '../components/LanguageSwitcher';
import {useLanguage} from '../contexts/LanguageContext';

const Home = () => {
    
     const {languge} = useLanguage();
    const content = {
        en: {
            welcome: 'Welcome to Next.js!'
        },
        fr: {
            welcome: 'Bienvenue à Next.js!'
        },
        es: {
            welcome: '¡Bienvenido a Next.js!'
        }
        // ... add other languages and translations as needed
    };

    return (
        <div>
            <h1>{content[languge].welcome}</h1>
            <LanguageSwitcher />
        </div>
    );
};

export default Home;
