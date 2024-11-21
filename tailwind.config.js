const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['selector', '[class*="app-dark"]'],
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    plugins: [
        require('tailwindcss-primeui'),
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme('fontSize.2xl'), fontWeight: 'bold' },
                h2: { fontSize: theme('fontSize.xl'), fontWeight: 'bold' },
                h3: { fontSize: theme('fontSize.lg'), fontWeight: 'bold' }
            });
        })
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        }
    }
};
