type UserType = {
    /* readonly */ name: string
    age?: number
    salary?: number
}

let uDetail: UserType = {
    name: "john",
    age: 30,
}

uDetail.age = 33
// uDetail.name = "asd"    /*  ‼️ not allowed as it is readonly */

const uDetails1: Readonly<UserType> = {
    // all properties are readonly
    name: "tom",
    age: 33,
}
const uDetails2: Partial<UserType> = {
    // all properties are optional
    name: "tom",
}

const uDetails3: Required<UserType> = {
    // all properties are optional
    name: "tom",
    age: 11,
    salary: 2000,
}

const userAgeSalary: Pick<UserType, "age" | "salary"> = {
    // pick only required properties from an existing type
    age: 13,
    salary: 1000000,
}

const userAgeSalary1: Omit<UserType, "name"> = {
    // omit the property and pick all the remaining ones
    age: 13,
    salary: 1000000,
}

type Statuss = "pending" | "completed" | "failed"
// Exclude used for types , similar to omit
const statuss: Exclude<Statuss, "pending"> = "completed"





// Record type
type APIResponse = Record<string, any>
const response1: APIResponse = {
    orderID: "12356",
    price: 23,
}
