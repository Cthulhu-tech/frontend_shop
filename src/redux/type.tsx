import { ImageListType } from "react-images-uploading"

export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export type TokenStoreType = {
    access: null | string
}

export type CategoryNotSorted = {
    category: CategoriesAllStore[]
}

export type CategoriesAllStore =  {
    id: number
    mpath: string
    parentId: number | null
}

export type SortCategory = {
    id: number
    name: string
    sub: CategoriesAllStore[]
}

export type UserAccountStoreType = {
    city: string
    email: string
    img: null | string
    name: string
    phone: string
    surname: string | null
}

export type Photo = {
    id: number
    path: string
    description: string
}

export type ProductsStoreType = {
    page: number
    size: number
    products: Products[]
}

export type Products = {
    active: boolean
    city: string
    delivery: boolean
    description: string
    id: number
    photos: Photo[]
    price: number
    street: null | string
    title: string
}

export type ReduxStore = {
    TokenStore: TokenStoreType
    UserAccountStore: UserAccountStoreType | null
    CategoriesStore: SortCategory[]
    ImageStore: ImageListType[]
    CategoryStore: string
    ProductsStore: ProductsStoreType
}
