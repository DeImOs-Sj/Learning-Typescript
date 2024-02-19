class User {
    // email: string
    // name: string
    constructor(public email: string, private name: string) {
        this.email = email
        this.name = name
    }
}

const result = new User("shlok", "jagtap")
console.log(result)