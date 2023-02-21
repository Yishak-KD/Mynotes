import { useContext } from 'react';
import { languageContext } from './LanguageContext';

function LanguageSelector() {
    const [language, handleLanguageChange] = useContext(languageContext);

    const handleChange = (event) => {
        handleLanguageChange(event.target.value)
    }

    return (
        <div>
            <label htmlFor="language-selector">Language:</label>
            <select id="language-selector" value={language} onChange={handleChange}>
                <option value="en">English</option>
                <option value="es">Espanol</option>
            </select>
        </div>
    )
}

export default LanguageSelector