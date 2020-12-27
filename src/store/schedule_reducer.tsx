import React from "react";
import {getNewsSlides} from "../api/Slider_api";
import {Get_Schedule} from "../api/schedule_api";

const GET_SCHEDULE = 'GET_SCHEDULE'

const initialState = {
    schedule: null
}

export const ScheduleReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_SCHEDULE:
            { return {...state, schedule: action.payload,} }

        default:
            return state
    }
}

export const actions: { [key: string]: (...args: any) => any; } = {
    getScheduleSuccessful : (payload: Array<string>) => ({type: GET_SCHEDULE, payload}),
}
export const getScheduleR = () => async  (dispatch: any) => {
    debugger
    try {
        const response = await Get_Schedule()
        dispatch(actions.getScheduleSuccessful(response.data))
    } catch (error) {
    console.log({error})
}}