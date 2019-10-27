export interface CategoryInterface {
    id: number,
    name: string
}

export interface ProductInterface {
    id: number,
    name: string,
    price: number,
    category?: CategoryInterface
}