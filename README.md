# 90sYouTube

## Adding new theme

1. Create a new folder with a desired name in `/app/app/src/themeSelector/themes/` \
e.g. `/app/app/src/themeSelector/themes/myCustomTheme`
2. Pick colors for the new theme. I recommend using an existing theme as a basis or using the [Material UI Theme Creator by bareynol](https://bareynol.github.io/mui-theme-creator/). Create both light and dark variations or just one of them.
3. Pick a [Google Font](https://fonts.google.com/) for the new theme. Install it with `yarn add typeface-{your-font-name}`.\
e.g. `yarn add typeface-pt-sans`
4. Create a logo variation. Use a preferred software to create a custom logo or open the `/design/logo-and-styles.fig` file in [Figma](https://figma.com/) to make a variation of the existing logo. Save it as a `logo.png` file in `myCustomTheme` folder.
5. Create a `index.ts` file in `myCustomTheme` folder with the following structure:
```typescript
import 'typeface-{your-font-name}'; // only if you use a custom font
import logo from './logo.png'
import { ThemeOptions } from "@material-ui/core";

export const darkTheme: ThemeOptions = {
    palette: {
        type: 'dark',
        // ...
    }
    // ... add other properties of the new dark theme variation
}

export const lightTheme: ThemeOptions = {
    palette: {
        type: 'light',
        // ...
    }
    // ... add other properties of the new light theme variation
}
```
The list of available properties can be found in [Material UI v4 documentation of the default theme](https://v4.mui.com/customization/default-theme/). This list is extended by several custom properties, which are described in `/app/app/src/types/Theme.d.ts`.
6. Import of the new theme at the top of the `/app/app/src/themeSelector/index.ts` file:
```typescript
import * as ninetiesYoutube from "./themes/ninetiesYoutube";
import * as poster from "./themes/poster";
// ...
import * as myCustomTheme from "./themes/myCustomTheme";
```
7. In the same file add the light and dark variations of the theme to the `themes` object
```typescript
export const themes: {[key: string]: ThemeOptions} = {
    'nineties-youtube-light': ninetiesYoutube.lightTheme,
    // ...
    'my-custom-theme-light': myCustomTheme.lightTheme, // only if light variation defined
    'my-custom-theme-dark': myCustomTheme.darkTheme, // only if dark variation defined
}
```
8. Run `yarn start` and test the new theme by selecting it from the sidebar.

## Hosting

I'm hosting this for everyone for free.
But of course there are server costs (and I don't even care much about "development costs"), But I would totally appreciate a small donation to cover the server costs so I can keep running this for free for everyone C:

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LA3SGLKW7N4U8)
