import {createTheme} from "@material-ui/core/styles";

export const darkTheme = createTheme({
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
    overrides: {
        MuiButton: {
            root: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                color: 'white',
                height: 48,
                padding: '0 30px',
            },
        },
    },
})