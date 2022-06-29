import {Card, CardActionArea, createStyles, makeStyles, Theme} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {useNavigate} from "react-router-dom";
import YoutubeVideoThumbnailProps from "../types/YoutubeVideoThumbnail";
import { gen3DBoxShadowStyle } from "../utils";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            height: '100%',
            border: 'none',
            background: 'transparent',
            color: 'transparent'  // this also removes the shadow highlighting of the car when hovering
        },
        actionArea: {
            display: 'grid',
            alignContent: 'start',
            justifyContent: 'stretch',
            height: '100%',
            padding: theme.spacing(1.5),
        },
        thumbnail: {
            backgroundSize: "cover",
            '&:hover': {
                transform: 'translateY(-2px)',
            },
            '&:active': {
                transition: "none",
                transform: 'translate(2px, 0px)',
                ...gen3DBoxShadowStyle(4, theme),
                borderTopRightRadius: theme.videoThumbnail.borderTopRightRadius,
                borderBottomRightRadius: theme.videoThumbnail.borderBottomRightRadius,
                borderBottomLeftRadius: theme.videoThumbnail.borderBottomLeftRadius,
                borderTopLeftRadius: theme.videoThumbnail.borderTopLeftRadius,
            },
            '&::before': {
                content: "''",
                display: "inline-block",
                width: "1px",
                height: 0,
                paddingBottom: "calc(100% / (16/9))",
            },
            marginBottom: theme.spacing(2.5),
            ...gen3DBoxShadowStyle(5, theme),
            borderTopRightRadius: theme.videoThumbnail.borderTopRightRadius,
            borderBottomRightRadius: theme.videoThumbnail.borderBottomRightRadius,
            borderBottomLeftRadius: theme.videoThumbnail.borderBottomLeftRadius,
            borderTopLeftRadius: theme.videoThumbnail.borderTopLeftRadius,
        },
        videoMetadata: {
            display: 'grid',
            gridTemplateAreas: "'avatar text'",
            gap: theme.spacing(1),
            justifyContent: 'start',
        },
        metadataAvatar: {
            gridItem: 'avatar',
            width: '40px',
        },
        metadataText: {
            gridItem: 'text',
        },
        title: {
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical",
        },
        channelTitle: {
            marginTop: theme.spacing(0.5),
        },
    })
)

function YoutubeVideoThumbnail({ youtubeId, title, thumbnailImage, avatarImage, channel }: YoutubeVideoThumbnailProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    const navigateToWatch = () => navigate(`/watch?v=${youtubeId}`)

    function decodeHtml(html: string) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        const out = txt.value;
        txt.remove();
        return out;
    }

    return (
        <Card className={classes.card} elevation={6}>
            <CardActionArea className={classes.actionArea} onClick={navigateToWatch}>
                <Box className={classes.thumbnail} style={{backgroundImage: `url('${thumbnailImage.src}')`}} />
                <Box className={classes.videoMetadata}>
                    <Box className={classes.metadataAvatar}>
                        <Avatar {...avatarImage} />
                    </Box>
                    <Box className={classes.metadataText}>
                        <Typography variant="body1" color="textPrimary" className={classes.title}>
                            { decodeHtml(title) }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className={classes.channelTitle}>
                            { decodeHtml(channel.title) }
                        </Typography>
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default YoutubeVideoThumbnail;