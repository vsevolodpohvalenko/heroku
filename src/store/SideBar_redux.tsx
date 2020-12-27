import React from "react";
import {SuggestNewsApi} from "../api/SuggestNews_api";
import {SideBarApi} from "../api/SideBar_api";
const GET_SUBMENU  = 'GET_SUBMENU'
const GET_ITEM = 'GET_ITEM'

const initialState = {
    subMenu: [],
    items: []
}

export const SideBarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_SUBMENU:
        {return {...state, subMenu: action.payload}}
        case GET_ITEM:
        {return {...state, items: action.payload}}
        default:
            return state
    }
}

const actions: {[key: string] : (...args: any) => any;} = {
    GetSubMenuSuccessful : (payload: Array<any>) => ({type: GET_SUBMENU, payload}),
    GetItemSuccessful : (payload: Array<any>) => ({type: GET_ITEM, payload})
}

export const GetSubMenuR = () => async (dispatch: any) => {
    try {
        const response = await SideBarApi.getSubMenu()
        dispatch(actions.GetSubMenuSuccessful(response.data))
    }
    catch (error) {
        console.log({error})
    }
}

export const GetItemsR = () => async (dispatch: any) => {
    try {
        const response = await SideBarApi.getItem()
        dispatch(actions.GetItemSuccessful(response.data))
    }
    catch (error) {
        console.log({error})
    }
}