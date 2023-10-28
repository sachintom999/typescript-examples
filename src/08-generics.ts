//----- Example 1

function getAge<T>(age: T): T {
    return age
}

getAge<number>(20)
getAge<string>("99")

//----- Example 2

interface UserDetail {
    name: string
    age: number
}
interface AdminDetail extends UserDetail {
    role: string
}
// type UserDetail = { name: string; age: number }
// type AdminDetail = UserDetail & { role: string }

const user: UserDetail = { name: "jon", age: 22 }
const admin: AdminDetail = { name: "sam", age: 44, role: "admin" }

function getDetails<T>(details: T): T {
    return details
}

const userDetails = getDetails<UserDetail>(user)
const adminDetails = getDetails<AdminDetail>(admin)

console.log(userDetails.age)
console.log(adminDetails.name)
