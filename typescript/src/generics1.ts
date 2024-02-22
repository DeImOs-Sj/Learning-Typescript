interface Bottle {
    name: string
    brand: number
}



function getSearchedProducts<T>(product: T[]): T {
    return product[3]
}