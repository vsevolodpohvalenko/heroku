import React from "react";
import {config, configForData, instance} from "./api";

export const SideBarApi = {
    getSubMenu : () => {
        return instance.get('rest/SideBarSection/')
    },
    getItem : () => {
        return instance.get("rest/SideBarItem/")
    }
}