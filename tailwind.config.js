/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'sm': '576px',
            // => @media (min-width: 576px) { ... }

            'md': '960px',
            // => @media (min-width: 960px) { ... }

            'lg': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            colors: {
                lightPick: 'hsl(275, 100%, 97%)',
                purple: {
                    grayish: 'hsl(292, 16%, 49%)',
                    dark: 'hsl(292, 42%, 14%)'
                },
                pinkish: 'hsl(281, 83%, 54%)'
            },
            fontSize: {
                '2.5xl': ['32px'],
                '4xl': ['56px'],
            },
            fontFamily: {
                'workSans': 'Work Sans, sans-serif'
            }
        },
    },
    plugins: [],
}

