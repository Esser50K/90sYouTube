import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import Grid from "@material-ui/core/Grid/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AsciiPlayer from "../components/AsciiPlayer";
import DownloadButton from "../components/DownloadButton";
import {Theme} from "@material-ui/core";
import Toast from "../components/Toast";
import {getUrl} from "../utils"

function Watch() {
    const [searchParams] = useSearchParams();
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const [playerContent, setPlayerContent] = useState("")
    const [muted, setMuted] = useState(false)
    const [image, setImage] = useState()
    const [downloading, setDownloading] = useState(false)

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

    return (
        <>
            <Grid container>
                <Grid item xs={9}>
                    <AsciiPlayer
                        ytURL={getYTUrl()}
                        image={image}
                        show={true}
                        onRepaint={setPlayerContent}
                        isMobile={isMobile}
                    />
                    {
                        playerContent !== "" &&
                            <div className='download-btn-wrap'>
                                <DownloadButton
                                    downloading={downloading}
                                    onClick={downloadImage}
                                />
                            </div>
                    }
                </Grid>
                <Grid item xs={3}>
                    video list
                </Grid>
            </Grid>
            {muted ? <Toast text={(isMobile ? "tap" : "click") + " to unmute"}/> : null}
        </>
    )
}

export default Watch;