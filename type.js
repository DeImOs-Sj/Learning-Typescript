"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "", email: "", isActive: false };
}
var result = createUser({ name: "shlok", email: "abc@gmail.com", isActive: true });
console.log(result);
