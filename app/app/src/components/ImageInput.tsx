import React, {useEffect, useState} from 'react';
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
            height: '6em',
        },
        default: {
            border: `2px dashed ${theme.palette.secondary.main}`,
        },
        fileOver: {
            border: `2px dashed ${theme.palette.primary.main}`,
        },
        error: {
            border: `2px solid ${theme.palette.error.main}`,
            color: theme.palette.error.main,
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
    const dropRef = React.useRef(null)

    const inputState = () => fileIsHovering ? wrongFileType ? 'error' : 'fileOver' : 'default'
    const inputText = (): string => {
        switch (inputState()) {
            case 'default': return 'Click to select or drag an image on this box to asciify it';
            case 'fileOver': return 'Drop the image now';
            case 'error': return 'Unsupported file type';
        }
    }

    const handleDrag = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        console.log('drag', dragInCount)
    }
    const handleDragIn = (e: DragEvent) => {
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
    const handleDragOut = (e: DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        dragInCount--
        if (dragInCount > 0)
            return

        setFileIsHovering(false);
        setWrongFileType(false)
    }
    const handleDrop = async (e: DragEvent) => {
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

    useEffect(() => {
        if (dropRef.current === null) {
            return
        }

        const div = dropRef.current! as HTMLDivElement
        div.addEventListener('dragenter', handleDragIn)
        div.addEventListener('dragleave', handleDragOut)
        div.addEventListener('dragover', handleDrag)
        div.addEventListener('drop', handleDrop)

        return () => {
            div.removeEventListener('dragenter', handleDragIn)
            div.removeEventListener('dragleave', handleDragOut)
            div.removeEventListener('dragover', handleDrag)
            div.removeEventListener('drop', handleDrop)
        }
    }, [])

    return (
        <div ref={dropRef}>
        <Card variant="outlined" className={`${classes.convertBox} ${classes[inputState()]}`}>

                <CardActionArea className={classes.convertBoxActionArea}
                                onClick={() => document.getElementById("file-input")?.click()}
                >
                    <input type="file"
                           accept="image/png, image/jpeg"
                           id="file-input"
                           style={{ "display": "none" }}
                           onChange={handleSelectImage}>
                    </input>
                    <Typography variant="body2">
                        {inputText()}
                    </Typography>
                </CardActionArea>
        </Card>
        </div>

    );
}

export default ImageInput;
