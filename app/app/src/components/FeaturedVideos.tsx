import React from "react";
import Grid, {GridSize} from "@material-ui/core/Grid";
import YoutubeVideoThumbnail from "./YoutubeVideoThumbnail";
import FeaturedVideosProps from "../types/FeaturedVideos";

function FeaturedVideos({ videos, columnLayout = false }: FeaturedVideosProps) {
    const gridResponsiveProps = columnLayout ?
        {
            xs: 12 as GridSize,
        } : {
            xs: 12 as GridSize,
            md: 4 as GridSize,
            lg: 3 as GridSize,
            xl: 2 as GridSize,
        }

    return (
        <Grid container>
            {
                videos.map(video => (
                    <Grid key={video.id} item { ...gridResponsiveProps }>
                        <YoutubeVideoThumbnail {...video.props} />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default FeaturedVideos;