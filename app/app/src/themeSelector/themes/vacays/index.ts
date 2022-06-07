import 'typeface-lato';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";

const thumbnailBorderRadius = 12

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#F27D59',
        },
        secondary: {
            main: '#FCDA95',
        },
        background: {
            default: '#FFF0E5',
            paper: '#fffcf6',
        },
    },
    typography: {
        fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
    },
    shape: {
        borderRadius: 16,
    },
    videoThumbnail: {
        borderTopRightRadius: thumbnailBorderRadius,
        borderBottomRightRadius: thumbnailBorderRadius,
        borderBottomLeftRadius: 0,
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
        '3px 3px 0 0 #3E3543',
        '3px 3px 0 0 #3E3543',
        '4px 4px 0 0 #3E3543',
        '4px 4px 0 0 #3E3543',
        '5px 5px 0 0 #3E3543',
        '5px 5px 0 0 #3E3543',
        '6px 6px 0 0 #3E3543',
        '6px 6px 0 0 #3E3543',
        '6px 6px 0 0 #3E3543',
        '7px 7px 0 0 #3E3543',
        '8px 8px 0 0 #3E3543',
        '9px 9px 0 0 #3E3543',
        '10px 10px 0 0 #3E3543',
        '11px 11px 0 0 #3E3543',
        '12px 12px 0 0 #3E3543',
        '13px 13px 0 0 #3E3543',
        '14px 14px 0 0 #3E3543',
        '15px 15px 0 0 #3E3543',
        '16px 16px 0 0 #3E3543',
        '17px 17px 0 0 #3E3543',
        '18px 18px 0 0 #3E3543',
        '19px 19px 0 0 #3E3543',
        '20px 20px 0 0 #3E3543',
        '21px 21px 0 0 #3E3543',
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
}

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#F27D59',
        },
        secondary: {
            main: '#FCDA95',
        },
        background: {
            default: '#3E3543',
            paper: '#362f3b',
        },
    },
    typography: {
        fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
    },
    shape: {
        borderRadius: 16,
    },
    videoThumbnail: {
        borderTopRightRadius: thumbnailBorderRadius,
        borderBottomRightRadius: thumbnailBorderRadius,
        borderBottomLeftRadius: 0,
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
}