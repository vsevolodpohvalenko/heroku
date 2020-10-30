import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import  thunkMiddleware from 'redux-thunk'
import {SlideReducer} from "./slider_reducer";

let reducers = combineReducers({
    Slider : SlideReducer
})
type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)))
