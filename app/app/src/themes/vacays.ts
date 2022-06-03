import {createTheme} from "@material-ui/core/styles";

const thumbnailBorderRadius = 9

export const lightTheme = createTheme({
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
})

export const darkTheme = createTheme({
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
})