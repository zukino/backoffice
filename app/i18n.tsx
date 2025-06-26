import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    welcome: 'Welcome to our app!',
                    greeting: 'Hello, {{name}}!',
                    login: 'Login',
                    sign_in: 'Sign in',
                    username: 'Username',
                    password: 'Password',
                },
            },
            id: {
                translation: {
                    welcome: 'Selamat datang di aplikasi kami!',
                    greeting: 'Apa kabar, {{name}}!',
                    login: 'Masuk',
                    sign_in: 'Masuk Akun',
                    username: 'Nama Pengguna',
                    password: 'Kata Sandi',
                },
            },
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'lang',
        },
        //lng: 'id',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;