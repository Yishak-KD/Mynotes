import { useState } from 'react';
import { languageContext } from './LanguageContext';

function LanguageProvider(children) {
    const [language, setLanguage] = useState('en');

    const handleLanguageChange = (language) => {
        setLanguage(language);
    }
    return (
        <languageContext.Provider value={{ language, handleLanguageChange }}>
            {children}
        </languageContext.Provider>
    )
}

export default LanguageProvider;