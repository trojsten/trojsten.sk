/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "layouts/**/*.html",
        "assets/**/*.js",
        "content/**/*",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#1077C1",
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}

