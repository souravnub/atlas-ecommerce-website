/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            borderWidth: {
                DEFAULT: "1.5px",
            },
            fontFamily: {
                body: "Montserrat, sans-serif",
            },
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(var(--gradient-color-stops))",
            },
            colors: {
                gray: {
                    150: "#f0f0f0",
                },
            },
        },
    },
    plugins: [],
};
