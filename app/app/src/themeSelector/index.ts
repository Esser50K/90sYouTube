import * as poster from "./themes/poster";
import * as vacays from "./themes/vacays";
import * as neonPhantasy from "./themes/neonPhantasy";
import * as neonScience from "./themes/neonScience";
import {ThemeOptions} from "@material-ui/core";

export const themes: {[key: string]: ThemeOptions} = {
    'poster-light': poster.lightTheme,
    'poster-dark': poster.darkTheme,
    'vacays-light': vacays.lightTheme,
    'vacays-dark': vacays.darkTheme,
    'neon-phantasy-light': neonPhantasy.lightTheme,
    'neon-phantasy-dark': neonPhantasy.darkTheme,
    'neon-science-dark': neonScience.darkTheme,
}

export default function getTheme(theme: string) {
    return themes[theme]
}