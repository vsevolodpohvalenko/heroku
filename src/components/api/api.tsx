import React from "react";
import axios, {AxiosPromise} from 'axios'
export const config = {
    headers: {
        'Content-Type' : 'application/json'
    }
}
export const instance = axios.create({
    baseURL: 'https://test-vsite.herokuapp.com/',
})
export const configForData = {
    headers: {
        'Content-Type' : 'multipart/form-data'
    }
}



