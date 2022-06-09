import {Theme, ThemeOptions} from "@material-ui/core";

declare module '@material-ui/core' {
    export interface Theme {
        videoThumbnail: {
            borderTopRightRadius: number,
            borderBottomRightRadius: number,
            borderBottomLeftRadius: number,
            borderTopLeftRadius: number,
        },
        logo: {
            src: any,
        },
        search: {
            border: string,
        },
    }
    export interface ThemeOptions {
        // video thumbnail's rounding of each corner
        videoThumbnail: {
            borderTopRightRadius: number,
            borderBottomRightRadius: number,
            borderBottomLeftRadius: number,
            borderTopLeftRadius: number,
        },
        // 90sYouTube logo path
        logo: {
            src: any,
        },
        // border around the main search (youtube link input)
        search: {
            border: string,
        },
    }
}