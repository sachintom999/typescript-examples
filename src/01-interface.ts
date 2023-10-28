// interface

interface Details {
    name: string
    age: number
    salary: number
    getName: () => void
}

let usrDetails: Details = {
    name: "sammy",
    age: 23,
    salary: 100,
    getName() {
        console.log(this.name)
    },
}
