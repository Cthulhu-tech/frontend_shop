import { applyMiddleware, combineReducers, createStore } from "redux"
import { TokenStore } from './store/token'
import thunk from "redux-thunk"

export const rootReducer = combineReducers({
    TokenStore
});

export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunk))