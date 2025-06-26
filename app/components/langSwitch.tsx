import { useTranslation } from 'react-i18next';

export default function LangSwitch() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    const languageOptions = [
        { value: 'en', label: i18n.t('english') },
        { value: 'id', label: i18n.t('indonesia') },
        { value: 'es', label: i18n.t('espanol') },
    ];

    return (
        <select onChange={handleLanguageChange} value={i18n.language}>
            {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}