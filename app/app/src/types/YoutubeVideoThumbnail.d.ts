export default interface YoutubeVideoThumbnailProps {
    youtubeId: string
    title: string
    thumbnailImage: {
        src: string
    }
    avatarImage: {
        alt: string
        src: string
    }
    channel: {
        youtubeId: string
        title: string
    }
}