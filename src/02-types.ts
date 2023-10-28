// type
type DetailsType = {
    name: string
    age: number
    salary: number
    getName?: () => void
}

let usrDetails1: DetailsType = {
    name: "",
    age: 0,
    salary: 123,
    // getName() {
    //     console.log(this.name)
    // },
}
