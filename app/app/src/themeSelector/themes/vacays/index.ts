import 'typeface-lato';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";

const thumbnailBorderRadius = 9

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
        borderRadius: 12,
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
        borderRadius: 12,
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