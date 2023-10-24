"use strict";
//----- Example 1
function getAge(age) {
    return age;
}
getAge(20);
getAge("99");
// type UserDetail = { name: string; age: number }
// type AdminDetail = UserDetail & { role: string }
const user = { name: "jon", age: 22 };
const admin = { name: "sam", age: 44, role: "admin" };
function getDetails(details) {
    return details;
}
const userDetails = getDetails(user);
const adminDetails = getDetails(admin);
console.log(userDetails.age);
console.log(adminDetails.name);
