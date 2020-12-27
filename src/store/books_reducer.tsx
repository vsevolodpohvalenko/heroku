import React from "react";
import {GetBooks} from "../api/Books_api";
const GET_BOOKS = 'GET_BOOKS'

interface GetBooks  {
    type: typeof GET_BOOKS,
    payload : Array<{
    linkOnDownload: any,
    cover: any,
    subject: string
    }>
}

const initialState = ({
    books : []
})

export const BooksReducer = (state = initialState, action: GetBooks) => {
    switch (action.type) {
        case GET_BOOKS: {
            return {...state, books: action.payload}
        }

        default:
            return state
    }
}
export const actions: { [key: string]: (...args: any) => any; } = {
    getBooksSuccsesful : (payload)=>({type: GET_BOOKS, payload}),
}

export const getBooksR = () => async (dispatch: any) => {
    try {
        const response = await GetBooks()
        dispatch(actions.getBooksSuccsesful(response.data))
    } catch (error) {
        console.log(error)
    }
}
