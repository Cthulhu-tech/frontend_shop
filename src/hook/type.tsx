import { ImageListType } from 'react-images-uploading'

export type ObjectValidation = {
    [key: string]: string
}

export type useFormCallbackReturn = {
    check: boolean
    error: ObjectValidation
}