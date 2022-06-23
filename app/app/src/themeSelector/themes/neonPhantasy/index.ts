// @ts-nocheck -- mismatch between type definition and specs - MuiAppBar is missing the colorInherit property
import 'typeface-pt-sans';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";
import { gen3DBoxShadow } from '../../../utils';

const shapeBorderRadius = 0;
const lightThemePrimaryMain = "#3f51b5"
const lightThemePrimaryLight = "#5C67B7"

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: lightThemePrimaryMain,
            light: lightThemePrimaryLight
        },
        secondary: {
            main: '#F935BA',
        },
        background: {
            default: '#B1C5ED',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"PT Sans", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
    },
    videoThumbnail: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    overrides: {
        // todo fix: To investigate why button doesn't refresh and keeps the gradient style when switching to theme w/out override
        // MuiButton: {
        //     root: {
        //         background: 'linear-gradient(45deg, #F935BA 30%, #6885F1 90%)',
        //         border: 0,
        //         borderRadius: 0,
        //         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //         color: 'white',
        //         height: 48,
        //         padding: '0 30px',
        //     },
        // },
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
    shape: {
        borderRadius: shapeBorderRadius,
    },
    logo: {
        src: logo,
    },
    search: {
        border: 'none',
    },
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
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
    props: {
        MuiPaper: {
            variant: 'outlined',
        },
    },
}

const paperBackground = '#722bb3'
const darkThemePrimaryMain = "#B1C5ED"
const darkThemePrimaryLight = "#BBC9EB"

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: darkThemePrimaryMain,
            light: darkThemePrimaryLight,
        },
        secondary: {
            main: '#F935BA',
        },
        background: {
            default: '#2C1849',
            paper: paperBackground,
        },
        text: {
            primary: '#c3cfed',
            secondary: '#291946',
        }
    },
    typography: {
        fontFamily: '"PT Sans", "Helvetica", "Arial", sans-serif',
        fontSize: 12,
    },
    shape: {
        borderRadius: shapeBorderRadius,
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
    search: {
        border: 'none',
    },
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
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
        // todo fix: To investigate why button doesn't refresh and keeps the gradient style when switching to theme w/out override
        // MuiButton: {
        //     root: {
        //         background: 'linear-gradient(45deg, #F935BA 30%, #6885F1 90%)',
        //         border: 0,
        //         borderRadius: 0,
        //         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //         color: 'white',
        //         height: 48,
        //         padding: '0 30px',
        //     },
        // },
        MuiAppBar: {
            colorInherit: {
                backgroundColor: paperBackground,
                color: '#fff',
            },
        },
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
        MuiAppBar: {
            color: 'inherit',
        },
        MuiPaper: {
            variant: 'outlined',
        },
    },
}