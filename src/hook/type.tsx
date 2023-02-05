export type ObjectValidation = {
    [key: string]: string
}

export type useFormCallbackReturn = {
    check: boolean
    error: ObjectValidation
}