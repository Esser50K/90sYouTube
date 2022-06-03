import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        thumbnailContainer: {
            cursor: 'pointer',
            padding: theme.spacing(2),
            height: '100%',
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
            marginBottom: theme.spacing(1.5),
            borderTopRightRadius: theme.videoThumbnail.borderTopRightRadius,
            borderBottomRightRadius: theme.videoThumbnail.borderBottomRightRadius,
            borderBottomLeftRadius: theme.videoThumbnail.borderBottomLeftRadius,
            borderTopLeftRadius: theme.videoThumbnail.borderTopLeftRadius,
        },
        videoMetadata: {
            display: 'grid',
            gridTemplateAreas: "'avatar text'",
            gap: theme.spacing(1),
        },
        metadataAvatar: {
            gridItem: 'avatar',
            width: '40px',
        },
        metadataText: {
            gridItem: 'text',
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
        <Paper className={classes.thumbnailContainer} onClick={navigateToWatch}>
            <Box className={classes.thumbnail} style={{backgroundImage: `url('${thumbnailImage.src}')`}} />
            <Box className={classes.videoMetadata}>
                <Box className={classes.metadataAvatar}>
                    <Avatar {...avatarImage} />
                </Box>
                <Box className={classes.metadataText}>
                    <Typography variant="subtitle1" color="textPrimary">
                        { title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.channelTitle}>
                        { channel.title }
                    </Typography>
                </Box>
            </Box>
        </Paper>
    )
}

export default YoutubeVideoThumbnail;