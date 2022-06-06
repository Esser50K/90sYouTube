// @ts-nocheck -- mismatch between type definition and specs - MuiAppBar is missing the colorInherit property
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#f8f8f8',
        },
        background: {
            default: '#f9f9f9',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#ffffff',
                color: '#000000',
            },
        },
    },
    shape: {
        borderRadius: 0,
    },
    logo: {
        src: logo,
    },
    search: {
        border: '1px solid #cccccc',
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
    props: {
        MuiAppBar: {
            color: 'inherit',
        },
        MuiPaper: {
            variant: 'outlined',
        },
        MuiButton: {
            disableElevation: true,
            variant: 'outlined',
        },
    },
}
