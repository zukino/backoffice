import { useState } from 'react';
import LangSwitch from "./langSwitch";
import ToggleTheme from "./togleTheme";
import { useTranslation } from 'react-i18next';
import Logo from "../assets/images/logo.png";
import Bg from "../assets/images/bg.jpg";

export default function LoginWithCard2() {

    const { t } = useTranslation();

    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`bg-[url('')] bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url('${Bg}')` }}>
            <ToggleTheme />
            <div className="w-full h-screen flex items-center justify-center dark:bg-gray-900">
                <div className="w-[300px] h-[500px] md:w-[500px] md:h-[600px] bg-gray-100 rounded-lg flex flex-col items-center shadow-lg dark:bg-gray-800">
                    <img className="w-[128px] h-[128px]" src={Logo} alt="logo" />
                    <div className="w-full h-auto flex items-center justify-center">
                        <h1 className="text-gray-900 dark:text-white">ADMIN LOGIN</h1>
                    </div>
                    <input type="text" placeholder={t('username')} className="w-[80%] md:w-[60%] h-[40px] mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-300 text-gray-900 dark:bg-gray-700 dark:placeholder-gray-500 dark:text-white" />
                    <input type={showPassword ? 'text' : 'password'} placeholder={showPassword ? t('password') : '********'} className="w-[80%] md:w-[60%] h-[40px] mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-gray-300 text-gray-900 dark:bg-gray-700 dark:placeholder-gray-500 dark:text-white" />
                    <div className="w-[80%] md:w-[60%] mt-4 h-auto flex items-center justify-start">
                        <input type="checkbox" className="bg-white mr-3" onChange={togglePasswordVisibility} />
                        <label htmlFor="rememberMe" className="text-gray-900 dark:text-white">{t('show_password')}</label>
                    </div>
                    <button className="text-gray-100 w-[80%] md:w-[60%] h-[140px] md:h-[120px] mt-4 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-600 dark:text-white">
                        {t('login')}
                    </button>
                    <div className="w-full h-full flex items-center justify-center mt-4">
                        <LangSwitch />
                    </div>
                </div>
            </div>
        </div>
    );
}