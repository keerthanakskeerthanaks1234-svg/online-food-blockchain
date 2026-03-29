/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: '#FC8019',
                'primary-dark': '#e07312',
                secondary: '#E23744',
                'bg-light': '#F2F2F2',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}