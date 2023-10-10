"use strict";
let uDetails = {
    name: "sam",
    age: 32,
};
function getName(user) {
    return user.name;
}
function logging() {
    console.log("logging...");
}
const firstName = getName(uDetails);
