import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonProps, Container } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import { ButtonBaseProps, createStyles, makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { gen3DBoxShadowStyle } from "../utils";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        convertButton: {
            transition: "none",
            ...gen3DBoxShadowStyle(2, theme),
            margin: theme.spacing(0, 0, 0, 1.5),
            height: '48px',
            width: '40px',
            '&:hover': {
                ...gen3DBoxShadowStyle(2, theme),
            },
            '&:active': {
                transform: 'translate(2px, 2px)',
                ...gen3DBoxShadowStyle(1, theme),
            },
        },
    }),
);

function ElevatedButton(props: ButtonProps) {
    const classes = useStyles();

    return (
        <Button className={classes.convertButton} disableElevation={false} {...props}>
            {props.children}
        </Button>
    )
}

export default ElevatedButton;