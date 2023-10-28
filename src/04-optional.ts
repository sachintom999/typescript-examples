interface UDetailOptional {
    name: string
    age: number
    getName?: () => void
}

let usr1: UDetailOptional = {
    name: "samio",
    age: 22,
    getName() {
        console.log(this.name)
    },
}

let usr2: UDetailOptional = {
    name: "jecko",
    age: 11,
}
