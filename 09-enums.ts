// ENUM

// enum StatusType {
//     PENDING = 1,
//     COMPLETED,
//     FAILED,
// }
enum StatusType {
    PENDING = "pending",
    COMPLETED = "completed",
    FAILED = "failed",
}

function getStatus(orderId: number, status: StatusType): void {
    console.log(orderId, " ", status)
}

getStatus(45, StatusType.FAILED)

// as const

let username = "jon" as const // making it readonly


