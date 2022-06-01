import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import YoutubeVideoThumbnail from "../components/YoutubeVideoThumbnail";
import {getUrl} from "../utils"

function Home() {
    const [featuredVideos, setFeaturedVideos] = useState<any[]>([])

    const fetchRecommendations = async () => {
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
        setFeaturedVideos(featuredVideos)
    }

    useEffect(() => {
        fetchRecommendations()
    }, [])


    return (
        <Grid container spacing={3}>
            {
                featuredVideos.map(featuredVideo => (
                    <Grid key={featuredVideo.id} item xs={12} sm={6} md={4} lg={3}>
                        <YoutubeVideoThumbnail {...featuredVideo.props} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Home;