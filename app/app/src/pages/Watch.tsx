import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AsciiPlayer from "../components/AsciiPlayer";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import Toast from "../components/Toast";
import {getUrl} from "../utils"
import FeaturedVideos from "../components/FeaturedVideos";
import {getRecommendations} from "../services/recommendations";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        downloadContainer: {
            display: 'grid',
            justifyContent: 'center',
            justifyItems: 'center',
        },
        layout: {
            display: 'grid',
            gridTemplate: '"main" auto "sidebar" auto / 1fr',
            [theme.breakpoints.up('md')]: {
                gridTemplate: '"main sidebar" auto / 1fr 402px',
            },
            width: '100%',
            maxWidth: '1340px',
            margin: '0 auto',
        },
        layoutMain: {
            gridArea: 'main',
            minWidth: '100%',
            [theme.breakpoints.up('md')]: {
                minWidth: '640px',
            },
        },
        layoutSidebar: {
            gridArea: 'sidebar',
            maxWidth: '100%',
            [theme.breakpoints.up('md')]: {
                maxWidth: '402px',
            },
            width: '100%',
        },
    })
)

function Watch() {
    const [searchParams] = useSearchParams();
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [playerContent, setPlayerContent] = useState("")
    const [muted, setMuted] = useState(false)
    const [image, setImage] = useState()
    const [downloading, setDownloading] = useState(false)
    const [featuredVideos, setFeaturedVideos] = useState<any[]>([])
    const classes = useStyles();

    const hashCode = (input: string) => {
        var hash = 0, i, chr;
        if (input.length === 0) return hash;
        for (i = 0; i < input.length; i++) {
            chr = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    const downloadImage = async () => {
        setDownloading(true);
        const resp = await fetch(getUrl() + "/img/download", {
            method: "POST",
            body: JSON.stringify({ascii_img: playerContent})
        })
        if (resp.status !== 200) {
            console.error("error downloading image:", await resp.text())
            alert("error downloading image")
            setDownloading(false);
        }

        downloadFile(await resp.blob())
        setDownloading(false);
    }

    const downloadFile = (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = (Math.abs(hashCode(playerContent))).toString() + '.png';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }

    const handleSubmitImage = (e: any) => {
        console.info(e)
        setImage(e)
        setPlayerContent(e.img)
    }

    const getParams = (param: string) => {
        return searchParams.get(param) || ''
    }

    const getYTUrl = () => {
        return getParams('v') ? `https://www.youtube.com/watch?v=${getParams('v')}` : ''
    }

    useEffect(() => {
        setMuted(true)
        const i = JSON.parse(localStorage.getItem('converted-image') || '""')
        if (i !== '""') {
            handleSubmitImage(i)
        }
        localStorage.setItem('converted-image', '')
    }, [])

    useEffect(() => {
        getRecommendations().then(recommendations => {
            setFeaturedVideos(recommendations)
        })
    }, [])

    return (
        <>
            <div className={classes.layout}>
                <div className={classes.layoutMain}>
                    <AsciiPlayer
                        ytURL={getYTUrl()}
                        image={image}
                        show={true}
                        onRepaint={setPlayerContent}
                        isMobile={isMobile}
                    />
                    {
                        playerContent &&
                        <Box className={classes.downloadContainer}>
                            <Button variant="outlined" disabled={downloading} onClick={downloadImage}>
                                {downloading ? 'Downloading...' : 'Download image'}
                            </Button>
                        </Box>
                    }
                </div>
                <div className={classes.layoutSidebar}>
                    <FeaturedVideos videos={featuredVideos}/>
                </div>
            </div>
            {muted ? <Toast text={(isMobile ? "tap" : "click") + " to unmute"}/> : null}
        </>
    )
}

export default Watch;