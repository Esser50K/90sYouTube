import 'typeface-open-sans';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";

const thumbnailBorderRadius = 6

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#2CAAAA',
        },
        secondary: {
            main: '#ED8796',
        },
        background: {
            default: '#ECF7F9',
        },
    },
    typography: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
    },
    shape: {
        borderRadius: 9,
    },
    videoThumbnail: {
        borderTopRightRadius: thumbnailBorderRadius,
        borderBottomRightRadius: thumbnailBorderRadius,
        borderBottomLeftRadius: thumbnailBorderRadius,
        borderTopLeftRadius: thumbnailBorderRadius,
    },
    logo: {
        src: logo,
    },
    search: {
        border: 'none',
    },
    shadows: [
        'none',
        '3px 3px 0 0 #474237',
        '3px 3px 0 0 #474237',
        '4px 4px 0 0 #474237',
        '4px 4px 0 0 #474237',
        '5px 5px 0 0 #474237',
        '5px 5px 0 0 #474237',
        '6px 6px 0 0 #474237',
        '6px 6px 0 0 #474237',
        '6px 6px 0 0 #474237',
        '7px 7px 0 0 #474237',
        '8px 8px 0 0 #474237',
        '9px 9px 0 0 #474237',
        '10px 10px 0 0 #474237',
        '11px 11px 0 0 #474237',
        '12px 12px 0 0 #474237',
        '13px 13px 0 0 #474237',
        '14px 14px 0 0 #474237',
        '15px 15px 0 0 #474237',
        '16px 16px 0 0 #474237',
        '17px 17px 0 0 #474237',
        '18px 18px 0 0 #474237',
        '19px 19px 0 0 #474237',
        '20px 20px 0 0 #474237',
        '21px 21px 0 0 #474237',
    ],
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
        MuiButton: {
            containedSecondary: {
                color: 'white',
            },
        },
    },
}

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#2CAAAA',
        },
        secondary: {
            main: '#ED8796',
        },
        background: {
            default: '#474237',
            paper: '#35322d',
        },
    },
    typography: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
    },
    shape: {
        borderRadius: 9,
    },
    videoThumbnail: {
        borderTopRightRadius: thumbnailBorderRadius,
        borderBottomRightRadius: thumbnailBorderRadius,
        borderBottomLeftRadius: thumbnailBorderRadius,
        borderTopLeftRadius: thumbnailBorderRadius,
    },
    logo: {
        src: logo,
    },
    search: {
        border: 'none',
    },
    shadows: [
        'none',
        '3px 3px 0 0 #fff',
        '3px 3px 0 0 #fff',
        '4px 4px 0 0 #fff',
        '4px 4px 0 0 #fff',
        '5px 5px 0 0 #fff',
        '5px 5px 0 0 #fff',
        '6px 6px 0 0 #fff',
        '6px 6px 0 0 #fff',
        '6px 6px 0 0 #fff',
        '7px 7px 0 0 #fff',
        '8px 8px 0 0 #fff',
        '9px 9px 0 0 #fff',
        '10px 10px 0 0 #fff',
        '11px 11px 0 0 #fff',
        '12px 12px 0 0 #fff',
        '13px 13px 0 0 #fff',
        '14px 14px 0 0 #fff',
        '15px 15px 0 0 #fff',
        '16px 16px 0 0 #fff',
        '17px 17px 0 0 #fff',
        '18px 18px 0 0 #fff',
        '19px 19px 0 0 #fff',
        '20px 20px 0 0 #fff',
        '21px 21px 0 0 #fff',
    ],
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
        MuiButton: {
            containedSecondary: {
                color: 'white',
            },
        },
    },
}