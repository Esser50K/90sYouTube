// @ts-nocheck -- mismatch between type definition and specs - MuiAppBar is missing the colorInherit property
import 'typeface-pt-sans';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#F935BA',
        },
        background: {
            default: '#B1C5ED',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"PT Sans", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
    },
    videoThumbnail: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    overrides: {
        // todo fix: To investigate why button doesn't refresh and keeps the gradient style when switching to theme w/out override
        // MuiButton: {
        //     root: {
        //         background: 'linear-gradient(45deg, #F935BA 30%, #6885F1 90%)',
        //         border: 0,
        //         borderRadius: 0,
        //         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //         color: 'white',
        //         height: 48,
        //         padding: '0 30px',
        //     },
        // },
    },
    shape: {
        borderRadius: 0,
    },
    logo: {
        src: logo,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 2280,
        },
    },
}

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#B1C5ED',
        },
        secondary: {
            main: '#F935BA',
        },
        background: {
            default: '#2C1849',
            paper: '#372254',
        },
    },
    typography: {
        fontFamily: '"PT Sans", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
    },
    shape: {
        borderRadius: 0,
    },
    videoThumbnail: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    logo: {
        src: logo,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 2280,
        },
    },
    overrides: {
        // todo fix: To investigate why button doesn't refresh and keeps the gradient style when switching to theme w/out override
        // MuiButton: {
        //     root: {
        //         background: 'linear-gradient(45deg, #F935BA 30%, #6885F1 90%)',
        //         border: 0,
        //         borderRadius: 0,
        //         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //         color: 'white',
        //         height: 48,
        //         padding: '0 30px',
        //     },
        // },
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#5215B7',
                color: '#fff',
            },
        },
    },
    props: {
        MuiAppBar: {
            color: 'inherit',
        },
    },
}