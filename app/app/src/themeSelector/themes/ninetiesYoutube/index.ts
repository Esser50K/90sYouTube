// @ts-nocheck -- mismatch between type definition and specs - MuiAppBar is missing the colorInherit property
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";
import { gen3DBoxShadow } from '../../../utils';

const shapeBorderRadius = 0;
const primaryMain = "#000"
const primaryLight = "#1d1d1d"

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: primaryMain,
            light: primaryLight,
        },
        secondary: {
            main: '#f8f8f8',
            dark: '#e4e4e4',
        },
        background: {
            default: '#f9f9f9',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
        MuiButton: {
            colorInherit: {
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiInputBase: {
            root: {
                borderTopLeftRadius: shapeBorderRadius+1,
                borderTopRightRadius: shapeBorderRadius+1,
                borderBottomLeftRadius: shapeBorderRadius+1,
                borderBottomRightRadius: shapeBorderRadius+1,
                border: `1px solid ${primaryLight}`,
                boxShadow: gen3DBoxShadow(2, primaryLight)
            }
        },
        MuiAppBar: {
            root: {
                backgroundColor: '#ffffff',
                color: '#000000',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#ffffff',
                color: '#000000',
            },
        },
    },
    shape: {
        borderRadius: shapeBorderRadius,
    },
    logo: {
        src: logo,
    },
    search: {
        border: '1px solid #cccccc',
    },
    shadows: [
        'none',
        gen3DBoxShadow(1, primaryMain),
        gen3DBoxShadow(1, primaryMain),
        gen3DBoxShadow(1, primaryMain),
        gen3DBoxShadow(1, primaryMain),
        gen3DBoxShadow(2, primaryMain),
        gen3DBoxShadow(2, primaryMain),
        gen3DBoxShadow(2, primaryMain),
        gen3DBoxShadow(2, primaryMain),
        gen3DBoxShadow(3, primaryMain),
        gen3DBoxShadow(3, primaryMain),
        gen3DBoxShadow(4, primaryMain),
        gen3DBoxShadow(4, primaryMain),
        gen3DBoxShadow(5, primaryMain),
        gen3DBoxShadow(5, primaryMain),
        gen3DBoxShadow(6, primaryMain),
        gen3DBoxShadow(6, primaryMain),
        gen3DBoxShadow(7, primaryMain),
        gen3DBoxShadow(8, primaryMain),
        gen3DBoxShadow(9, primaryMain),
        gen3DBoxShadow(10, primaryMain),
        gen3DBoxShadow(11, primaryMain),
        gen3DBoxShadow(12, primaryMain),
        gen3DBoxShadow(12, primaryMain),
        gen3DBoxShadow(14, primaryMain),
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
        MuiAppBar: {
            color: 'inherit',
        },
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
