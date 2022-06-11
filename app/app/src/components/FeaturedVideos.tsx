import React from "react";
import Grid from "@material-ui/core/Grid";
import YoutubeVideoThumbnail from "./YoutubeVideoThumbnail";
import FeaturedVideosProps from "../types/FeaturedVideos";

function FeaturedVideos({ videos }: FeaturedVideosProps) {

    return (
        <Grid container spacing={3}>
            {
                videos.map(video => (
                    <Grid key={video.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <YoutubeVideoThumbnail {...video.props} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default FeaturedVideos;