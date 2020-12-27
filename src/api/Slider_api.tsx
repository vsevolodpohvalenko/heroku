import {instance} from "./api";

export const getSlides = async () => {
    debugger
    return instance.get('rest/Slider/')
}
export const getNewsSlides = async () => {
    return instance.get('rest/NewsFeed/')
}

export const getNews = async () => {
    return instance.get('rest/suggestEvent/')
}

export const getArticle = async () => {
    return instance.get('rest/Article/')
}