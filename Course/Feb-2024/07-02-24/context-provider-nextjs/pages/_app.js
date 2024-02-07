"use client"
import { LanguageProvider } from '../contexts/LanguageContext';
import '../styles/globals.css'; // Or your CSS file if different

function MyApp({ Component, pageProps }) {
    return (
        <LanguageProvider>
            <Component {...pageProps} />
        </LanguageProvider>
    );
}

export default MyApp;
