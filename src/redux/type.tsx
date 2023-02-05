export interface Action<T, P> {
    readonly type: T;
    readonly payload?: P;
}

export type TokenStoreType = {
    access: null | string
}


export type ReduxStore = {
    TokenStore: TokenStoreType
}