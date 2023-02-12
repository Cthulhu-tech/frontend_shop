import { Action, ProductsStoreType } from '../type'

const defaultState: ProductsStoreType = {
    page: 0,
    size: 1,
    products: []
}

export const ProductsStore = (state = defaultState, action:Action<string, ProductsStoreType>) => {
    switch (action.type){
        case "update_products": 
            if(action.payload)
                return {products: [...state.products ?? null, ...action.payload.products], page: +action.payload.page, size: +action.payload.size}
            return state
        default:  
            return state
    }
}

export const updateProducts = (payload: ProductsStoreType) => ({ type: "update_products", payload })
