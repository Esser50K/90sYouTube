import React, { useState } from 'react';
import './ImageInput.css';
import {Card, CardActionArea, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";


interface ImageInputProps {
    onImageSubmit: (e: File) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        convertBox: {
            margin: theme.spacing(2),
            flexShrink: 0,
            border: `2px dashed ${theme.palette.secondary.main}`,
        },
        convertBoxActionArea: {
            padding: theme.spacing(2),
        },
    }),
);

function ImageInput(props: ImageInputProps) {
    const [fileIsHovering, setFileIsHovering] = useState(false)
    const [wrongFileType, setWrongFileType] = useState(false)
    const classes = useStyles();

    let dragInCount = 0
    const supportedImageTypes = ["image/jpeg", "image/jpg", "image/png"]
    const handleDrag = (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragIn = (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        dragInCount++
        if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
            setWrongFileType(false)
            setFileIsHovering(true)
            if (!supportedImageTypes.includes(e.dataTransfer.items[0].type)) {
                setWrongFileType(true)
            }
        }
    }
    const handleDragOut = (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()
        dragInCount--
        if (dragInCount > 0)
            return

        setFileIsHovering(false);
        setWrongFileType(false)
    }
    const handleDrop = async (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault()
        e.stopPropagation()

        setFileIsHovering(false)
        setWrongFileType(false)

        if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
            const file = e.dataTransfer.items[0].getAsFile()
            if (file === null) {
                return
            }
            if (!supportedImageTypes.includes(file.type)) {
                return;
            }

            props.onImageSubmit(file)
        }
    }

    const handleSelectImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files ? e.target.files[0] : null;
        if (f === null) {
            return;
        }

        props.onImageSubmit(f);
    }

    return (
        <Card variant="outlined" className={classes.convertBox}>
            <CardActionArea className={classes.convertBoxActionArea}
                            onClick={() => document.getElementById("file-input")?.click()}
                            onDragEnter={handleDragIn}
                            onDragLeave={handleDragOut}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
            >
                <input type="file"
                       accept="image/png, image/jpeg"
                       id="file-input"
                       style={{ "display": "none" }}
                       onChange={handleSelectImage}>
                </input>
                <Typography variant="body2">
                    {fileIsHovering ?
                        wrongFileType ? "Unsupported file type" : "Drop the image now"
                        : "Click to select or drag an image on this box to asciify it"}
                </Typography>
            </CardActionArea>
        </Card>
    );
}

export default ImageInput;
