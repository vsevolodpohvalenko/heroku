import React from "react";
import {instance} from "./api";

export const getSlides = async () => {
    debugger
    return instance.get('rest/Slider/')
}