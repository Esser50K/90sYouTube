import 'typeface-pt-sans';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#AF3F68',
        },
        secondary: {
            main: '#17C1EB',
        },
        background: {
            default: '#1E1F19',
            paper: '#231f20',
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
    // todo fix: To investigate why button doesn't refresh and keeps the gradient style when switching to theme w/out override
    // overrides: {
    //     MuiButton: {
    //         root: {
    //             background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //             border: 0,
    //             borderRadius: 3,
    //             boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    //             color: 'white',
    //             height: 48,
    //             padding: '0 30px',
    //         },
    //     },
    // },
}