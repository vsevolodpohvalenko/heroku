import React from "react";
import axios, {AxiosPromise} from 'axios'
export const config = {
    headers: {
        'Content-Type' : 'application/json'
    }
}
export const instance = axios.create({
    baseURL: 'https://react-pr.herokuapp.com/',
})
export const configForData = {
    headers: {
        'Content-Type' : 'multipart/form-data'
    }
}



