import React, {ReactElement, useState} from "react";
import getTheme from "./index";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

interface CustomThemeContextProps {
    currentTheme: string;
    setTheme: (name: string) => void;
}

export const CustomThemeContext = React.createContext(
    {} as CustomThemeContextProps,
)

const CustomThemeProvider = (props: { children: ReactElement }) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props

    // Read current theme from localStorage or maybe from an api
    const currentTheme = localStorage.getItem('appTheme') || 'nineties-youtube-light'

    // State to hold the selected theme name
    const [themeName, _setThemeName] = useState(currentTheme)

    // Retrieve the theme object by theme name
    const theme = getTheme(themeName)

    // Wrap _setThemeName to store new theme names in localStorage
    const setThemeName = (name: string) => {
        localStorage.setItem('appTheme', name)
        _setThemeName(name)
    }

    const contextValue = {
        currentTheme: themeName,
        setTheme: setThemeName,
    }

    return (
        <CustomThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={createTheme(theme)}>{children}</ThemeProvider>
        </CustomThemeContext.Provider>
    )
}

export default CustomThemeProvider