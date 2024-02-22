const score: Array<number> = []
const names: Array<string> = []


function identity(val: boolean | number): boolean | number {
    return val
}

function identityTwo<Type>(val: Type): Type {
    return val
}


const result1 = identityTwo("string")