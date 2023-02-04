import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

export const rootReducer = combineReducers({

});

export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunk))