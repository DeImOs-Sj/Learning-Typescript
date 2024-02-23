function detectTypes(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    else {
        return val + 3

    }
}


function provideID(id: string | number) {
    if (!id) {
        console.log("please provide ID")
        return
    }

    // id.toLowerCase()
}

interface User {
    username: string
    emailID: string

}


interface Admin {

}