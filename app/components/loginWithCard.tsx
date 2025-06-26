import LangSwitch from "./langSwitch";
import ToggleTheme from "./togleTheme";
import { useTranslation } from 'react-i18next';

export default function LoginWithCard() {

    const { t } = useTranslation();

    return (
        <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen p-4 transition-colors duration-300">
            <ToggleTheme />
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl transform transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white transition-colors duration-300">{t('sign_in')}</h2>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">{t('username')}</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder={t('username')}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 shadow-sm"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">{t('password')}</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200 shadow-sm"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                        >
                            {t('login')}
                        </button>
                    </div>
                </form>
                <div className="w-full h-[120px] flex justify-center items-center">
                    <LangSwitch />
                </div>
            </div>
        </div>
    );
}