import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
