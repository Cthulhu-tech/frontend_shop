export type Products = {
    city: string
    delivery: boolean
    description: string
    id: number
    street: string | null
    title: string
    price: number | null
    photos:  null | ProductsPhotos[]
}

export type ProductsPhotos = {
    id: number
    path: string
    description: string | null
}