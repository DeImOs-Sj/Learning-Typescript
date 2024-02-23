interface Bottle {
    name: string
    brand: number
}



function getSearchedProducts<T>(product: T[]): T {
    return product[3.3]
}


const getMoreSearchProducts = <T>(product: T[]): T => {
    const myIndex = 4
    return product[myIndex]
}


// function anotherFunction<T, U>(valOne: T, valTwo: U): object {
//     return {
//         valOne,
//         valTwo
//     }

// }

interface Database {
    connection: string,
    username: string,
    password: string
}


function someanotherFunction<T, U extends Database>(valOne: T, valTwo: U) {
    return {
        valOne,
        valTwo
    }

}


interface Quiz {
    name: string
    type: string
}

interface course {
    name: string
    author: string
    subject: string
}


class sellable<T> {
    public cart: T[] = []
    addToCart(product: T) {
        this.cart.push(product)

    }
}