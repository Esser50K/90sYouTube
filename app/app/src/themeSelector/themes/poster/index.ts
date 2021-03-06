import 'typeface-open-sans';
import logo from './logo.png'
import {ThemeOptions} from "@material-ui/core";
import { gen3DBoxShadow } from '../../../utils';

const shapeBorderRadius = 9;
const thumbnailBorderRadius = 6
const lightThemePrimaryMain = "#3f51b5"
const lightThemePrimaryLight = "#84B0B2"

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: lightThemePrimaryMain,
            light: lightThemePrimaryLight
        },
        secondary: {
            main: '#ED8796',
        },
        background: {
            default: '#ECF7F9',
            paper: '#ECF7F9'
        },
    },
    typography: {
        fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
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
    shadows: [
        'none',
        gen3DBoxShadow(3, lightThemePrimaryLight),
        gen3DBoxShadow(3, lightThemePrimaryLight),
        gen3DBoxShadow(4, lightThemePrimaryLight),
        gen3DBoxShadow(4, lightThemePrimaryLight),
        gen3DBoxShadow(5, lightThemePrimaryLight),
        gen3DBoxShadow(5, lightThemePrimaryLight),
        gen3DBoxShadow(6, lightThemePrimaryLight),
        gen3DBoxShadow(6, lightThemePrimaryLight),
        gen3DBoxShadow(6, lightThemePrimaryLight),
        gen3DBoxShadow(7, lightThemePrimaryLight),
        gen3DBoxShadow(8, lightThemePrimaryLight),
        gen3DBoxShadow(9, lightThemePrimaryLight),
        gen3DBoxShadow(10, lightThemePrimaryLight),
        gen3DBoxShadow(11, lightThemePrimaryLight),
        gen3DBoxShadow(12, lightThemePrimaryLight),
        gen3DBoxShadow(13, lightThemePrimaryLight),
        gen3DBoxShadow(14, lightThemePrimaryLight),
        gen3DBoxShadow(15, lightThemePrimaryLight),
        gen3DBoxShadow(16, lightThemePrimaryLight),
        gen3DBoxShadow(17, lightThemePrimaryLight),
        gen3DBoxShadow(18, lightThemePrimaryLight),
        gen3DBoxShadow(19, lightThemePrimaryLight),
        gen3DBoxShadow(20, lightThemePrimaryLight),
        gen3DBoxShadow(21, lightThemePrimaryLight),
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
        MuiAppBar: {
            root: {
                backgroundColor: '#ffffff'
            }
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#ffffff',
            },
        },
        MuiButton: {
            containedSecondary: {
                color: 'white',
            },
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
                border: `1px solid ${lightThemePrimaryLight}`,
                boxShadow: gen3DBoxShadow(2, lightThemePrimaryLight)
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
        MuiButton: {
            disableElevation: true,
            variant: 'outlined',
            disableRipple: true,
            disableFocusRipple: true,
            disableTouchRipple: true,
        },
    },

}

const darkThemePrimaryMain = "#2CAAAA"
const darkThemePrimaryLight = "#7cd3d6"
const darkThemeSecondaryMain = "#ED8796"
const darkThemeBackgroundDefault = "#474237"
const darkThemeBackgroundPaper = "#35322d"


export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: darkThemePrimaryMain,
            light: darkThemePrimaryLight
        },
        secondary: {
            main: darkThemeSecondaryMain,
        },
        background: {
            default: darkThemeBackgroundDefault,
            paper: darkThemeBackgroundPaper,
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
    shadows: [
        'none',
        gen3DBoxShadow(3, "#fff"),
        gen3DBoxShadow(3, "#fff"),
        gen3DBoxShadow(4, "#fff"),
        gen3DBoxShadow(4, "#fff"),
        gen3DBoxShadow(5, "#fff"),
        gen3DBoxShadow(5, "#fff"),
        gen3DBoxShadow(6, "#fff"),
        gen3DBoxShadow(6, "#fff"),
        gen3DBoxShadow(6, "#fff"),
        gen3DBoxShadow(7, "#fff"),
        gen3DBoxShadow(8, "#fff"),
        gen3DBoxShadow(9, "#fff"),
        gen3DBoxShadow(10, "#fff"),
        gen3DBoxShadow(11, "#fff"),
        gen3DBoxShadow(12, "#fff"),
        gen3DBoxShadow(13, "#fff"),
        gen3DBoxShadow(14, "#fff"),
        gen3DBoxShadow(15, "#fff"),
        gen3DBoxShadow(16, "#fff"),
        gen3DBoxShadow(17, "#fff"),
        gen3DBoxShadow(18, "#fff"),
        gen3DBoxShadow(19, "#fff"),
        gen3DBoxShadow(20, "#fff"),
        gen3DBoxShadow(21, "#fff"),
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
        MuiButton: {
            containedSecondary: {
                color: 'white',
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
        },
        MuiDrawer: {
            paper: {
                backgroundColor: darkThemePrimaryMain,
                color: darkThemeBackgroundPaper,
            }
        }
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