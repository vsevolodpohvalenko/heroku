import React from "react";
import {SuggestNewsApi} from "../api/SuggestNews_api";
const GET_NEWS  = 'GET_NEWS'
const GET_ARTICLE = 'GET_ARTICLE'

const initialState = {
    news: [],
    articles: []
}

export const NewsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_NEWS:
        {return {...state, news: action.payload}}
        case GET_ARTICLE:
        {return {...state, articles: action.payload}}
        default:
            return state
    }
}

const actions: {[key: string] : (...args: any) => any;} = {
    GetNewsSuccessful : (payload: Array<any>) => ({type: GET_NEWS, payload}),
    GetArticleSuccessful : (payload: Array<any>) => ({type: GET_ARTICLE, payload})
}

export const GetNewsR = () => async (dispatch: any) => {
    try {
        const response = await SuggestNewsApi.getNews()
        dispatch(actions.GetNewsSuccessful(response.data))
    }
    catch (error) {
        console.log({error})
    }
}

export const GetArticleR = () => async (dispatch: any) => {
    try {
        const response = await SuggestNewsApi.getArticles()
        dispatch(actions.GetArticleSuccessful(response.data))
    }
    catch (error) {
        console.log({error})
    }
}