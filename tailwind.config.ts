import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            maxWidth: {
                "8xl": "1440px"
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                primary: {
                    100: "#c21d03",
                    200: "#fd5732",
                    300: "#ffb787"
                },
                accent: {
                    100: "#393939",
                    200: "#bebebe"
                },
                text: {
                    100: "#232121",
                    200: "#4b4848"
                },
                bg: {
                    100: "#fbfbfb",
                    200: "#f1f1f1",
                    300: "#c8c8c8"
                }
            }
        }
    },
    plugins: []
};
export default config;
