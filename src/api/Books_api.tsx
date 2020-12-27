import React from "react";
import { instance} from "./api";

export const GetBooks = async () => {
    return instance.get('rest/Books/')
}