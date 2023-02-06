import { Action, UserAccountStoreType } from '../type'

const defaultState = null

export const UserAccountStore = (state = defaultState, action:Action<string, UserAccountStoreType>) => {
    switch (action.type){
        case "update_user_account_data": 
            return action.payload
        default:  
            return state
    }
}

export const updateUserAccount = (payload: UserAccountStoreType) => ({ type: "update_user_account_data", payload })
