import { Action } from "../type"

const defaultState: string = ''

export const CategoryStore = (state = defaultState, action:Action<string, string>) => {
    switch (action.type){
        case 'update_category':
            return action.payload
        default:  
            return state
    }
}

export const updateCategory = (payload: string) => ({ type: "update_category", payload })
