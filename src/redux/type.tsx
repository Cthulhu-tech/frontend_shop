export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export type TokenStoreType = {
    access: null | string
}

export type UserAccountStoreType = {
    city: string
    email: string
    img: null | string
    name: string
    phone: string
    surname: string | null
}

export type ReduxStore = {
    TokenStore: TokenStoreType
    UserAccountStore: UserAccountStoreType | null
}