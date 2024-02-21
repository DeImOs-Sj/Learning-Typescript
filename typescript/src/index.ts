class User {
    // email: string
    // name: string
    protected courseCount = 1
    constructor(public email: string, private name: string) {
        this.email = email
        this.name = name
    }

    private deleteToken() {
        console.log("token deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    get _courseCount(): number {
        return this.courseCount
    }
    set _courseCount(courseNum) {
        if (courseNum < 1) {
            throw new Error("course should not be more than 1");

        }
        this._courseCount = courseNum

    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this.courseCount = 4
    }

}

const result = new User("shlok", "jagtap")
console.log(result)