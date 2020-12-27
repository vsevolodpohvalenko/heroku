import React from "react";
import {config, configForData, instance} from "./api";

export const SuggestNewsApi = {
    postNews: (data: any) => {
        debugger
        return instance.post('rest/suggestEvent/', data, config   )
    },
    postArticle: (data: any) => {
        return instance.post("rest/Article/", data, config )
    } ,
    putNews : (id:number, data:any) => {
        return instance.put(`rest/suggestEvent/${id}/`, data, config)
    },
    getNews : () => {
        return instance.get('rest/suggestEvent/')
    },
    getArticles : () => {
        return instance.get("rest/Article/")
    }

}
