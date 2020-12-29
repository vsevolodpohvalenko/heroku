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

export const youtubeInstance = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLxwNN9rQNHbJAQUgWpzCW-XM-AtR2SJJJ&maxResults=12&key=AIzaSyAHWX_vcx-A1wPiXT_8zQZYMZ7du_AMJp8`,
})
export const YoutubeAPI = async () => {
    return youtubeInstance.get("")
}

