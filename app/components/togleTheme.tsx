import React, { useState, useEffect } from 'react';

export default function ToggleTheme() {

    const [theme, setTheme] = useState(() => {

        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {

            return storedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {

        const htmlElement = document.documentElement;

        if (theme === 'dark') {

            htmlElement.classList.add('dark');
        } else {

            htmlElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {

        console.log(`Toggling theme from ${theme} to ${theme === 'light' ? 'dark' : 'light'}`);
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

            <button
                onClick={toggleTheme}
                className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                <i className={`${theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'} text-gray-800 dark:text-gray-200 text-lg`}></i>
            </button>
        </>
    );
}