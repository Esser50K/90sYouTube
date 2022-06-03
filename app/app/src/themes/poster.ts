import {createTheme} from "@material-ui/core/styles";

export const lightTheme = createTheme({
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
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
})

export const darkTheme = createTheme({
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
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
})