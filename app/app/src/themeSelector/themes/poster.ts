import 'typeface-open-sans';
import {ThemeOptions} from "@material-ui/core";

const thumbnailBorderRadius = 4

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
        h1: {
            fontWeight: 300,
        },
    },
    shape: {
        borderRadius: 6,
    },
    videoThumbnail: {
        borderTopRightRadius: thumbnailBorderRadius,
        borderBottomRightRadius: thumbnailBorderRadius,
        borderBottomLeftRadius: thumbnailBorderRadius,
        borderTopLeftRadius: thumbnailBorderRadius,
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
    },
    shape: {
        borderRadius: 6,
    },
    videoThumbnail: {
        borderTopRightRadius: thumbnailBorderRadius,
        borderBottomRightRadius: thumbnailBorderRadius,
        borderBottomLeftRadius: thumbnailBorderRadius,
        borderTopLeftRadius: thumbnailBorderRadius,
    },
}