const StatusTypee = {
    PENDING: "pending",
    COMPLETED: "completed",
} as const

// type StatusTypee = "pending" | "completed"

function getStatus1(orderID: string, currStatus: keyof typeof StatusTypee) {
    console.log(orderID, ",", StatusTypee[currStatus])
}

getStatus1("12345", "COMPLETED")
