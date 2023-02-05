import { Action, TokenStoreType } from '../type'

const defaultState: TokenStoreType = {
    access: null
}

export const TokenStore = (state = defaultState, action:Action<string, string>) => {
    switch (action.type){
        case "update_jwt": 
            return {access: action.payload}
        case "delete_jwt":
            return {access: null} 
        default:  
            return state
    }
}

export const updateToken = (payload: string) => ({ type: "update_jwt", payload });