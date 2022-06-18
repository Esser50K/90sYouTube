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
    props: {
        MuiPaper: {
            variant: 'outlined',
        },
    },
}