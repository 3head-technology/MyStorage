export function getAuthenticationToken () {
    return localStorage.getItem("AUTHENTICATION_TOKEN");
}
export function setAuthenticationToken (token) {
    localStorage.setItem("AUTHENTICATION_TOKEN", token);
}
export function getAuthenticationHeader () {
    const token = getAuthenticationToken();
    const headers = {};
    if(token) {
        headers["Authorization"] = token;
    }
    return headers;
}
export function isLogged () {
    return Boolean(getAuthenticationToken());
}
export function logOut () {
    localStorage.removeItem("AUTHENTICATION_TOKEN");
}
