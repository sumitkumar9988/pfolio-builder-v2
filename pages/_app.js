import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
// import theme from "./../utils/theme";
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    // ...

    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "#6BF178",
              boxShadow: "0 0 0 1px #6BF178",
            },
          },
        },
      },
    },
  },
  colors: {
    primary: {
      1: "#6BF178",
      2: "#FF5964",
      main: "#6BF178",
    },
    dark: {
      1: "#1E1E1E",
      2: "#4F4F4F",
    },
  },
  fonts: {
    body: "avenir",
    heading: "avenir-black",
    roman: "avenir-roman",
    span: "whippin",
  },
});

// 2. Extend the theme to include custom colors, fonts, etc

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
