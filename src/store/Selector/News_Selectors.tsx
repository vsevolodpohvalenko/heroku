import {AppStateType} from "../store";

export const RecArticles = (state: AppStateType) => {
    return state.News.articles
}
export const RecNews = (state: AppStateType) => {
    return state.News.news
}