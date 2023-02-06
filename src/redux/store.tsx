import { applyMiddleware, combineReducers, createStore } from "redux"
import { UserAccountStore } from './store/userAccount'
import { TokenStore } from './store/token'
import thunk from "redux-thunk"

export const rootReducer = combineReducers({
    TokenStore,
    UserAccountStore
});

export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunk))