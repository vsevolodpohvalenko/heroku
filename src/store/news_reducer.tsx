import React from "react";
import {InformationApi} from "../api/Information_api";
import {YoutubeAPI} from "../api/api";
const GET_NEWS  = 'GET_NEWS'
const GET_ARTICLE = 'GET_ARTICLE'
const GET_LINKED_TEXT = 'GET_LINKED_TEXT'
const GET_YOUTUBE = 'GET_YOUTUBE'

const initialState = {
    news: [],
    articles: [],
    linkedText: [],
    items : []
}

export const NewsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_NEWS:
        {return {...state, news: action.payload}}
        case GET_ARTICLE:
        {return {...state, articles: action.payload}}
        case GET_LINKED_TEXT:
        {return  {...state, linkedText: action.payload}}
        case GET_YOUTUBE:
        {return  {...state, items: action.payload}}
        default:
            return state
    }
}

const actions: {[key: string] : (...args: any) => any;} = {
    GetNewsSuccessful : (payload: Array<any>) => ({type: GET_NEWS, payload}),
    GetArticleSuccessful : (payload: Array<any>) => ({type: GET_ARTICLE, payload}),
    GetLinkedTextSuccessful : (payload: Array<{}>) => ({type: GET_LINKED_TEXT, payload}),
    GetYoutubeSuccessful : (payload: Array<{}>) => ({type: GET_YOUTUBE, payload})
}

export const GetNewsR = () => async (dispatch: any) => {
    try {
        const response = await InformationApi.getNews()
        dispatch(actions.GetNewsSuccessful(response.data))
    }
    catch (error) {
        console.log({error})
    }
}

export const GetArticleR = () => async (dispatch: any) => {
    try {
        const response = await InformationApi.getArticles()
        dispatch(actions.GetArticleSuccessful(response.data))
    }
    catch (error) {
        console.log({error})
    }
}

export const GetLinkedText = () => async (dispatch: any) => {
    try{
        const r = await InformationApi.getLinkedText()
        dispatch(actions.GetLinkedTextSuccessful(r.data))
    }
    catch (error) {
        console.log({error})
    }
}

export const GetYoutube = () => async (dispatch: any) => {
    try{
        const r = await YoutubeAPI()
        dispatch(actions.GetYoutubeSuccessful(r.data.items))
    }
    catch (error) {
        console.log({error})
    }
}