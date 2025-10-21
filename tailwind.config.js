/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  safelist: [
    // keep your two-column arbitrary grid + variants
    "md:grid-cols-[280px,1fr]",
    { pattern: /grid-cols-\[.*\]/ },
    { pattern: /sm:grid-cols-\[.*\]/ },
    { pattern: /md:grid-cols-\[.*\]/ },
    { pattern: /lg:grid-cols-\[.*\]/ },
    { pattern: /xl:grid-cols-\[.*\]/ },
  ],
  theme: { extend: {} },
  plugins: [],
};
