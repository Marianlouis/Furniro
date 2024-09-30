/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'accent-bg': '#FFF3E3',
                primary: '#B88E2F',
                text: '#333333',
                danger: '#E97171',
                success: '#2EC1AC',
                subtext: '#9F9F9F'
            },
        },
    },
    plugins: [],
}
