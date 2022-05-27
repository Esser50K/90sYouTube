import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        thumbnailContainer: {
            cursor: 'pointer',
            border: "4px ridge white",
        },
        thumbnail: {
            backgroundSize: "cover",
            '&::before': {
                content: "''",
                display: "inline-block",
                width: "1px",
                height: 0,
                paddingBottom: "calc(100% / (16/9))",
            },
            filter: "blur(1px) saturate(300%)",
            marginBottom: theme.spacing(1.5),
        },
        channelTitle: {
            marginTop: theme.spacing(0.5),
        },
    })
)

interface YoutubeVideoThumbnailProps {
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

function YoutubeVideoThumbnail({ youtubeId, title, thumbnailImage, avatarImage, channel }: YoutubeVideoThumbnailProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    const navigateToWatch = () => navigate(`/watch?v=${youtubeId}`)

    return (
        <Box className={classes.thumbnailContainer} bgcolor="background.paper" onClick={navigateToWatch}>
            <Box className={classes.thumbnail} style={{backgroundImage: `url('${thumbnailImage.src}')`}} />
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Avatar {...avatarImage} />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="subtitle1" color="textPrimary">
                        { title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.channelTitle}>
                        { channel.title }
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default YoutubeVideoThumbnail;