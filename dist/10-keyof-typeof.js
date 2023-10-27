"use strict";
const StatusTypee = {
    PENDING: "pending",
    COMPLETED: "completed",
};
// type StatusTypee = "pending" | "completed"
function getStatus1(orderID, currStatus) {
    console.log(orderID, ",", StatusTypee[currStatus]);
}
getStatus1("12345", "COMPLETED");
