import {getUrl} from "../utils";

export const getRecommendations = async () => {
    const resp = await fetch(getUrl("/recommendations") + "/recommendations", {
        method: "GET",
    })
    if (resp.status !== 200) {
        console.error("error downloading image:", await resp.text())
        alert("failed to fetch recommendations")
    }

    const featuredVideos: any[] = []
    const json = await resp.json()
    json["recommendations"].forEach((e: any) => {
        featuredVideos.push({
            id: featuredVideos.length,
            props: {
                youtubeId: e["video_id"],
                title: e["title"],
                thumbnailImage: {
                    src: e["thumbnail_url"]
                },
                avatarImage: {
                    src: e["channel_thumbnail"],
                    alt: e["channel_title"]
                },
                channel: {
                    youtubeId: e["channel_id"],
                    title: e["channel_title"]
                }
            }
        })
    });
    return featuredVideos
}