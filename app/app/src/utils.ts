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

export const gen3DBoxShadowStyle = (nLayers: number, theme: Theme, secondary = false) => {
    const color = secondary ? theme.palette.secondary.dark : theme.palette.primary.light
    let boxShadow = ""
    for (let i = 1; i < nLayers+1; i++) {
        boxShadow += `${i*2}px ${i*2}px 0px ${color},`
    }

    return {
        borderRadius: theme.shape.borderRadius+1,
        border: `1px solid ${color}`,
        boxShadow: boxShadow.substring(0, boxShadow.length-1)
    }
}