import React from "react";
import axios, {AxiosPromise} from 'axios'
export const config = {
    headers: {
        'Content-Type' : 'application/json'
    }
}
export const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
})
export const configForData = {
    headers: {
        'Content-Type' : 'multipart/form-data'
    }
}



