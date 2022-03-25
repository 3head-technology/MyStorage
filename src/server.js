const configuration= require("../config.json");
const { getAuthenticationHeader, } = require("./utilities/authenticationUtilities");
import axios from "axios";
export const httpApiHost = configuration.httpApi.host;
export const httpApiPort = configuration.httpApi.port;

export const server = Object.freeze({
    // headers = {} default
    async get (path, parameters, headers = {}) {
        return axios.get(`${httpApiHost}:${httpApiPort}/${path}`, {
            parameters: parameters,
            headers: {
                ...headers,
                ...getAuthenticationHeader(),
            },
        });
    },
    async post (path, parameters, headers = {}) {
        console.log(httpApiHost);
        console.log(path);
        return axios.post(`${httpApiHost}:${httpApiPort}${path}`, parameters, {
            headers: {
                ...headers,
                ...getAuthenticationHeader(),
            },
        });
    },
});


