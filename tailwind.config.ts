import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import defaultTheme from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/theme";

const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|progress|user|ripple|spinner|form|avatar).js"
  ],
	darkMode: "class",
	theme: {
		extend: {
			screens: {
				"pre-sm": "480px",
				"pre-lg": "820px",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				"extra-soft-gray": "#F6f6f6",
				"soft-gray": "#F8F9FD",
				"soft-blue": "#F3F5FF",
				gray: "#666",
				danger: "#FF2E49",
				pink: "#F30F8B",
				corange: "#FF6132",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				linspin: "linspin 1568.2353ms linear infinite",
				easespin:
					"easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
				"left-spin":
					"left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
				"right-spin":
					"right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both",
				"ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
				rotating: "rotating 30s linear infinite",
				topbottom: "topbottom 60s infinite alternate linear",
				bottomtop: "bottomtop 60s infinite alternate linear",
				"spin-1.5": "spin 1.5s linear infinite",
				"spin-2": "spin 2s linear infinite",
				"spin-3": "spin 3s linear infinite",
				line1: "line 10s infinite linear",
				line2: "line-revert 8s infinite linear",
				line3: "line 7s infinite linear",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		nextui({}),
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		plugin(
			function ({ addUtilities, matchUtilities, theme }) {
				matchUtilities(
					{
						"grid-auto-fit": (value: string) => ({
							gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
						}),
					},
					{ values: theme("gridAutoFit") }
				);
			},
			function () {
				return {
					theme: {
						gridAutoFit: {
							DEFAULT: "16rem",
							xs: "12rem",
							sm: "14rem",
							md: "16rem",
							lg: "18rem",
							xl: "20rem",
						},
					},
				};
			}
		),
	],
} satisfies Config;
