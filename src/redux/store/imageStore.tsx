import { ImageListType } from 'react-images-uploading'
import { Action } from '../type'

const defaultState: ImageListType[] = []

export const ImageStore = (state = defaultState, action:Action<string, ImageListType>) => {
    switch (action.type){
        case 'upload_img':
            return action.payload
        default:  
            return state
    }
}

export const updateImages = (payload: ImageListType) => ({ type: "upload_img", payload })
