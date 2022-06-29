import { Theme } from "@material-ui/core"

export const getUrl = (endpoint: string = "") => {
    let portSuffix = ":8080"
    if (endpoint === "/recommendations") {
        portSuffix = ":8081"
    }

    if (window.location.host.startsWith("localhost") || window.location.host.startsWith("192")) {
        return window.location.protocol + "//" + window.location.host.split(":")[0] + portSuffix
    }

    return window.location.protocol + "//" + window.location.host
}

export const gen3DBoxShadowStyle = (nLayers: number, theme: Theme, secondary = false, spacing = 2) => {
    const color = secondary ? theme.palette.secondary.dark : theme.palette.primary.light
    let boxShadow = ""
    for (let i = 1; i < nLayers+1; i++) {
        boxShadow += `${i*spacing}px ${i*spacing}px 0px ${color},`
    }

    return {
        borderTopLeftRadius: theme.shape.borderRadius+1,
        borderTopRightRadius: theme.shape.borderRadius+1,
        borderBottomLeftRadius: theme.shape.borderRadius+1,
        borderBottomRightRadius: theme.shape.borderRadius+1,
        border: `1px solid ${theme.palette.primary.light}`,
        boxShadow: boxShadow.substring(0, boxShadow.length-1) // removes the last comma
    }
}

export const gen3DBoxShadow = (nLayers: number, color: string) => {
    let boxShadow = ""
    for (let i = 1; i < nLayers+1; i++) {
        boxShadow += `${i*2}px ${i*2}px 0 0 ${color},`
    }

    return boxShadow.substring(0, boxShadow.length-1) // removes the last comma
}

