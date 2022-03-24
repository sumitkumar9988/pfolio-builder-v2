module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#6BF178",
          2: "#FF5964",
        },
        dark: {
          1: "#1E1E1E",
          2: "#4F4F4F",
        },
      },
      fontFamily: {
        // body: '"Mulish", sans-serif',
        // mulish:'"Mulish", sans-serif',
        body: "avenir",
        title: "avenir-black",
        roman: "avenir-roman",
        span: "whippin",
        // body:'whippin'
      },
    },
  },
  plugins: [],
};
