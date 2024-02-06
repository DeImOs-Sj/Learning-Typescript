type User = {
    name: string,
    email: string,
    isActive: boolean


}


function createUser(user: User): User {
    return { name: "", email: "", isActive: false }
}

const result = createUser({ name: "shlok", email: "abc@gmail.com", isActive: true })
console.log(result)
export { }