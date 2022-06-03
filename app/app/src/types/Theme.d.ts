import {Theme, ThemeOptions} from "@material-ui/core";

declare module '@material-ui/core' {
    export interface Theme {
        videoThumbnail: {
            borderTopRightRadius: number,
            borderBottomRightRadius: number,
            borderBottomLeftRadius: number,
            borderTopLeftRadius: number,
        },
    }
    export interface ThemeOptions {
        videoThumbnail: {
            borderTopRightRadius: number,
            borderBottomRightRadius: number,
            borderBottomLeftRadius: number,
            borderTopLeftRadius: number,
        },
    }
}