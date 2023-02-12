import { applyMiddleware, combineReducers, createStore } from "redux"
import { UserAccountStore } from './store/userAccount'
import { CategoriesStore } from './store/categories'
import { ProductsStore } from './store/products'
import { CategoryStore } from './store/category'
import { ImageStore } from './store/imageStore'
import { TokenStore } from './store/token'
import thunk from "redux-thunk"

export const rootReducer = combineReducers({
    TokenStore,
    UserAccountStore,
    CategoriesStore,
    ImageStore,
    CategoryStore,
    ProductsStore
});

export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducer, applyMiddleware(thunk))