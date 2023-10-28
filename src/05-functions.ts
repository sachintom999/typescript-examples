interface UsrDetails {
    name: string
    age: number | string
    getName?: () => void
}

let uDetails: UsrDetails = {
    name: "sam",
    age: 32,
}

function getName(user: UsrDetails): string {
    return user.name
}

function logging(): void {
    console.log("logging...")
}

const firstName = getName(uDetails)
