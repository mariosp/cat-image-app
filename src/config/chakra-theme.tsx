import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
      primary: {
        // main: "##D5BF86",
        50: '#fbf5e2',
        100: '#ece1c2',
        200: '#decd9f',
        300: '#d1b97a',
        400: '#c4a556',
        500: '#aa8b3d',
        600: '#856c2e',
        700: '#5f4d20',
        800: '#3a2e10',
        900: '#170e00',
      },
      secondary: {
        // main: "#F1F0CC",
        50: '#fbf9e6',
        100: '#efedc3',
        200: '#e4e29e',
        300: '#d9d677',
        400: '#ceca52',
        500: '#b4b139',
        600: '#8c892b',
        700: '#64621e',
        800: '#3c3b10',
        900: '#141400',
      },
      tertiary: 
      {
        50: '#fef0e6',
        100: '#e3d8cc',
        200: '#cec0b0',
        300: '#b8a793',
        400: '#a38d76',
        500: '#89745c',
        600: '#6c5a47',
        700: '#4d4031',
        800: '#30271b',
        900: '#150c00',
      }
    }
  },
  withDefaultColorScheme({ colorScheme: 'tertiary'}),);