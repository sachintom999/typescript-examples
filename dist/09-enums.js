"use strict";
// ENUM
// enum StatusType {
//     PENDING = 1,
//     COMPLETED,
//     FAILED,
// }
var StatusType;
(function (StatusType) {
    StatusType["PENDING"] = "pending";
    StatusType["COMPLETED"] = "completed";
    StatusType["FAILED"] = "failed";
})(StatusType || (StatusType = {}));
function getStatus(orderId, status) {
    console.log(orderId, " ", status);
}
getStatus(45, StatusType.FAILED);
// as const
let username = "jon"; // making it readonly => Type casting
