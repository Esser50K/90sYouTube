import React, {FormEvent, ReactElement, useContext, useEffect, useState} from "react";
import {Outlet, useNavigate, useSearchParams} from "react-router-dom";
import {
    AppBar, Button, ButtonGroup,
    Container, createStyles,
    CssBaseline,
    Drawer,
    InputBase,
    makeStyles, Theme,
    Toolbar,
    Typography,
    Paper, useTheme
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import DonateButton from "../components/DonateButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {CustomThemeContext} from "../themeSelector/CustomThemeProvider";
import {themes} from "../themeSelector";
import PlayArrowOutlined from "@material-ui/icons/PlayArrowOutlined";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',
            },
        },
        grow: {
            flexGrow: 1,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        logo: {
            height: '24px',
            [theme.breakpoints.up('sm')]: {
                height: '32px',
            },
        },
        videoUrl: {
            display: 'flex',
            alignItems: 'center',
        },
        toolbar: {
            justifyContent: 'space-between',
        },
        toolbarStart: {
            display: 'flex',
            alignItems: 'center',
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
                cursor: 'pointer',
            },
        },
        form: {
            display: 'flex',
        },
        search: {
            position: 'relative',
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        inputRoot: {
            color: theme.palette.text.primary,
            background: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
        },
        inputInput: {
            padding: theme.spacing(0.5, 1, 0.5, 1),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '65ch',
            },
        },
        toolbarEnd: {
            width: '290px',
            display: 'none',
            [theme.breakpoints.up('lg')]: {
                display: 'block',
            },
        },
        appBarSpacer: theme.mixins.toolbar,
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            order: 2,
            [theme.breakpoints.up('md')]: {
                order: 1,
            }
        },
        drawerPaper: {
            width: drawerWidth,
            paddingTop: theme.spacing(2.5),
        },
        themesHeading: {
            margin: theme.spacing(2),
            textAlign: 'center',
        },
        infoBoxesAndDonation: {
            order: 2,
            [theme.breakpoints.up('md')]: {
                order: 1,
            }
        },
        introBox: {
            margin: theme.spacing(2),
            padding: theme.spacing(2),
        },
        donateContainer: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
            display: 'grid',
            justifyContent: 'center',
            justifyItems: 'center',
        },
        donateButton: {
            margin: theme.spacing(2, 0, 2, 0)
        },
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            order: 1,
            [theme.breakpoints.up('md')]: {
                order: 2,
            }
        },
        container: {
            padding: theme.spacing(4, 2, 4, 2),
        },
        convertButton: {
            margin: theme.spacing(0, 0, 0, 0.5),
            height: '48px',
            width: '40px',
        },
    }),
);

function Layout({drawerCollapsed = false}) {
    let [searchParams] = useSearchParams();
    let navigate = useNavigate();
    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    const isDesktopMd = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const [inputUrl, setInputUrl] = useState("")
    const [youtubeUrl, setYoutubeUrl] = useState("")
    const { currentTheme, setTheme } = useContext(CustomThemeContext)
    const classes = useStyles();
    const theme = useTheme<Theme>()

    const navigateToHome = () => navigate('/');

    const onYTUrlSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setYoutubeUrl(inputUrl)
        const regexp = `https:\/\/www\.youtube\.com\/watch\?v=`;

        const path = inputUrl.replace(regexp, '/watch?v=');
        setInputUrl('')
        navigate(path)
    }

    const onYTUrlChange = (e: any) => setInputUrl(e.target.value)

    useEffect(() => {
        setYoutubeUrl(`https://www.youtube.com/watch?v=${searchParams.get('v') || 'c7rarQiUmng'}`)
    }, [searchParams])

    const infoBoxesAndDonation: ReactElement = (
        <>
            <Paper variant="outlined" className={classes.introBox}>
                <Typography variant="body2">Paste a YouTube video link to ASCIIfy it on the fly!</Typography>
            </Paper>
            <Typography variant="h6" className={classes.themesHeading}>Available themes</Typography>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
            >
                {
                    Object.entries(themes).map(theme => (
                        <Button key={theme[0]} onClick={() => setTheme(theme[0])} disabled={theme[0] === currentTheme}>{ theme[0] }</Button>
                    ))
                }
            </ButtonGroup>
            <div className={classes.grow} />
            <Container className={classes.donateContainer}>
                <Box className={classes.donateButton}>
                    <DonateButton/>
                </Box>
                <Typography variant="body2">To support my server costs <br/> and development efforts
                    C:</Typography>
            </Container>
        </>
    )

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar className={classes.appBar} position="fixed" elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.toolbarStart}>
                        <img onClick={navigateToHome} src={theme.logo.src} className={classes.logo} alt="90s YouTube logo" />
                    </div>
                    <Box className={classes.videoUrl}>
                        { isDesktop &&
                            <Typography>YouTube video link:</Typography>
                        }
                        <div className={classes.search}>
                            <form className={classes.form} onSubmit={onYTUrlSubmit}>
                                <InputBase
                                    placeholder={youtubeUrl}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{'aria-label': 'search'}}
                                    onChange={onYTUrlChange}
                                    value={inputUrl}
                                />
                                <Button className={classes.convertButton} variant="contained" size="small" color="secondary" aria-label="convert from url" type="submit">
                                    <PlayArrowOutlined fontSize="large"/>
                                </Button>
                            </form>
                        </div>
                    </Box>
                    <div className={classes.toolbarEnd}/>
                </Toolbar>
            </AppBar>
            { isDesktopMd && <div className={classes.appBarSpacer}/> }
            { !drawerCollapsed &&
                <>
                    {isDesktopMd ?
                        <Drawer
                            className={classes.drawer}
                            variant="permanent"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.appBarSpacer}/>
                            {infoBoxesAndDonation}
                        </Drawer> :
                        <Box className={classes.infoBoxesAndDonation}>
                            {infoBoxesAndDonation}
                        </Box>
                    }
                </>
            }
            <div className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}

export default Layout;