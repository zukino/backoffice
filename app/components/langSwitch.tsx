import { useTranslation } from 'react-i18next';

export default function LangSwitch() {

    const { i18n } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        console.log('Language changed to:', event.target.value);

        i18n.changeLanguage(event.target.value);

        localStorage.setItem('lang', event.target.value);
    };

    const languageOptions = [
        { value: 'en', label: i18n.t('English') },
        { value: 'id', label: i18n.t('Indonesia') }
    ];

    return (
        <select onChange={handleLanguageChange} value={i18n.language} className="text-gray-900 p-2 border rounded dark:text-white">
            {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}