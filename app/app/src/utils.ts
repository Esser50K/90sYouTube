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