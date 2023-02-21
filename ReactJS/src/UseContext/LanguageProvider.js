import { useState, createContext } from 'react';
import LanguageSelector from './LanguageSelector';

export const LanguageContext = createContext();

function LanguageProvider() {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (language) => {
        setLanguage(language);
    }
    return (
        <LanguageContext.Provider value={{ language, handleLanguageChange }}>
            <LanguageSelector />
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;