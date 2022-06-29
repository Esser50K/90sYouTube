// @ts-nocheck -- mismatch between type definition and specs - MuiAppBar is missing the colorInherit property
import 'typeface-pt-sans';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";
import { gen3DBoxShadow } from '../../../utils';

const shapeBorderRadius = 0;
const lightThemePrimaryMain = "#AF3F68"
const lightThemePrimaryLight = "#BF6586"

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: lightThemePrimaryMain,
            light: lightThemePrimaryLight
        },
        secondary: {
            main: '#17C1EB',
        },
        background: {
            default: '#1E1F19',
            paper: '#231f20',
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
    // todo fix: To investigate why button doesn't refresh and keeps the gradient style when switching to theme w/out override
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#AF3F68',
                color: '#fff',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#AF3F68',
            },
        },
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
        //  MuiButton: {
        //      root: {
        //          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        //          border: 0,
        //          borderRadius: 3,
        //          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        //          color: 'white',
        //          height: 48,
        //          padding: '0 30px',
        //      },
        //  },
    },
    props: {
        MuiPaper: {
            variant: 'outlined',
        },
        MuiButton: {
            disableElevation: true,
            variant: 'outlined',
            disableRipple: true,
            disableFocusRipple: true,
            disableTouchRipple: true,
        },
    },
}