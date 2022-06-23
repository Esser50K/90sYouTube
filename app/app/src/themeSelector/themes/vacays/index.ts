import 'typeface-lato';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";
import { gen3DBoxShadow } from '../../../utils';

const shapeBorderRadius = 16;
const thumbnailBorderRadius = 12;
const lightThemePrimaryMain = "#F27D59";
const lightThemePrimaryLight = "#F4977A";

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: lightThemePrimaryMain,
            light: lightThemePrimaryLight
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
        borderRadius: shapeBorderRadius,
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
        MuiInputBase: {
            root: {
                borderTopLeftRadius: shapeBorderRadius+1,
                borderTopRightRadius: shapeBorderRadius+1,
                borderBottomLeftRadius: shapeBorderRadius+1,
                borderBottomRightRadius: shapeBorderRadius+1,
                border: `1px solid ${lightThemePrimaryLight}`,
                boxShadow: gen3DBoxShadow(2, lightThemePrimaryLight)
            }
        }
    },
    props: {
        MuiPaper: {
            variant: 'outlined',
        },
    },
}

const darkThemePrimaryMain = "#F27D59";
const darkThemePrimaryLight = "#F4977A";

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: darkThemePrimaryMain,
            light: darkThemePrimaryLight
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
        borderRadius: shapeBorderRadius,
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
        MuiInputBase: {
            root: {
                borderTopLeftRadius: shapeBorderRadius+1,
                borderTopRightRadius: shapeBorderRadius+1,
                borderBottomLeftRadius: shapeBorderRadius+1,
                borderBottomRightRadius: shapeBorderRadius+1,
                border: `1px solid ${darkThemePrimaryLight}`,
                boxShadow: gen3DBoxShadow(2, darkThemePrimaryLight)
            }
        }
    },
    props: {
        MuiPaper: {
            variant: 'outlined',
        },
    },
}