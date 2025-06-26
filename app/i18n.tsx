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
                },
            },
            id: {
                translation: {
                    welcome: 'Selamat datang di aplikasi kami!',
                    greeting: 'Apa kabar, {{name}}!',
                },
            },
            es: {
                translation: {
                    welcome: '¡Bienvenido a nuestra aplicación!',
                    greeting: '¡Hola, {{name}}!',
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