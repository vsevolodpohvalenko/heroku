import {getSlides} from "../components/api/Slider_api";

const GET_SLIDES = "GET_SLIDES"

const initialState = {
    slides : []
}

export const SlideReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_SLIDES:
            return {...state, slides: action.payload}
        default:
            return state
    }
}
export const actions: { [key: string]: (...args: any) => any; } = {
    getSlidesSuccessful : (payload: Array<string>) => ({type: GET_SLIDES, payload})
}
export const getSlidesR = () => async (dispatch: any) => {
    debugger
    try {
        debugger
        const response = await getSlides()
        // @ts-ignore
        dispatch(actions.getSlidesSuccessful(response.data))
    } catch (error) {
        console.log({error})
    }
}