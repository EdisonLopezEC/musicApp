import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { AppRoute } from './routes/AppRoute';


const theme = extendTheme({
    colors: {
      purple: {
        100: '#535089',
        200: '#1d1c23',
        300: '#0d0d0d',
        400: '#535062'
      },
    },
  })

export const AppMusic = () => {
    return (

            <ChakraProvider theme={theme}>
                <AppRoute />
            </ChakraProvider>
          
    )
}
