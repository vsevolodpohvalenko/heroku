import {getArticle, getNews, getNewsSlides, getSlides} from "../components/api/Slider_api";

const GET_SLIDES = "GET_SLIDES"
const GET_NEWS_SLIDES = "GET_NEWS_SLIDES"
const GET_NEWS = 'GET_NEWS'
const GET_ARTICLES = 'GET_ARTICLES'

const initialState = {
    slides : [],
    newsSlides : [],
    news : [],
    articles : []
}

export const SlideReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_SLIDES:
            return {...state, slides: action.payload}
        case GET_NEWS_SLIDES:
            return {...state, newsSlides: action.payload}
        case  GET_NEWS:
            return {...state, news: action.payload}
        case GET_ARTICLES:
            return {...state, articles: action.payload}
        default:
            return state
    }
}
export const actions: { [key: string]: (...args: any) => any; } = {
    getSlidesSuccessful : (payload: Array<string>) => ({type: GET_SLIDES, payload}),
    getNewsSlidesSuccess : (payload: Array<any>) => ({type: GET_NEWS_SLIDES, payload}),
    getNewsSuccess : (payload: Array<{title: string, titleFont: string, textFont: string, date: string, active: boolean}>) => ({type: GET_NEWS, payload}),
    getArticlesSuccess : (payload: Array<any>) => ({type: GET_ARTICLES, payload})
}
export const getSlidesR = () => async (dispatch: any) => {
    try {
        const response = await getSlides()

        dispatch(actions.getSlidesSuccessful(response.data))
    } catch (error) {
        console.log({error})
    }
}
export const getNewsSlidesR = () => async  (dispatch: any) => {
    debugger
    try {
        const response = await getNewsSlides()
        dispatch(actions.getNewsSlidesSuccess(response.data))
    } catch (error) {
    console.log({error})
}}
export const getNewsR = () => async  (dispatch: any) => {
    debugger
    try {
        const response = await getNews()
        dispatch(actions.getNewsSuccess(response.data))
    } catch (error) {
    console.log({error})
}}

export const getArticleR = () => async  (dispatch: any) => {
    debugger
    try {
        const response = await getArticle()
        dispatch(actions.getArticlesSuccess(response.data))
    } catch (error) {
    console.log({error})
}}