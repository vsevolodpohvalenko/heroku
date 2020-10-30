import React from "react";
import {config, configForData, instance} from "./api";

export const SuggestNewsApi = {
    postNews: (data: any) => {
        debugger
        return instance.post('rest/suggestNews/', data, config   )
    }
}
