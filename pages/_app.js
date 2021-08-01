import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import { RecoilRoot } from 'recoil';

const theme = extendTheme({

  styles: {
    global: {
      body: {
        bg: "#E2E8F0",
      },
    },
  },
})


function getLibrary(provider) {
  return new Web3Provider(provider);
}


export default function NextWeb3App({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
    </Web3ReactProvider>
  );
}
