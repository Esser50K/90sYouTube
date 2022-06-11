import YoutubeVideoThumbnailProps from "./YoutubeVideoThumbnail";

export default interface FeaturedVideosProps {
    videos: {
        id: number,
        props: YoutubeVideoThumbnailProps,
    }[]
}