import { Action, CategoryNotSorted, SortCategory } from '../type'

const defaultState: SortCategory[] = []

export const CategoriesStore = (state = defaultState, action:Action<string, CategoryNotSorted>) => {
    switch (action.type){
        case "update_categories":
            if(action.payload){
                const sub = action.payload.category.filter((sub) => sub.parentId !== null)
                
                const top =  action.payload.category.filter((top) => top.parentId === null)

                const categorySort = top.map((category) => {
                    const filter = sub.filter((subcategory) => category.id === subcategory.parentId)
                    return {id: category.id, name: category.mpath, sub: filter}
                })
                return categorySort
            }
            return action.payload
        default:  
            return state
    }
}

export const updateCategories = (payload: CategoryNotSorted) => ({ type: "update_categories", payload })
