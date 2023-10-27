"use strict";
let uDetail = {
    name: "john",
    age: 30,
};
uDetail.age = 33;
// uDetail.name = "asd"    /*  ‼️ not allowed as it is readonly */
const uDetails1 = {
    // all properties are readonly
    name: "tom",
    age: 33,
};
const uDetails2 = {
    // all properties are optional
    name: "tom",
};
const uDetails3 = {
    // all properties are optional
    name: "tom",
    age: 11,
    salary: 2000,
};
const userAgeSalary = {
    // pick only required properties from an existing type
    age: 13,
    salary: 1000000,
};
const userAgeSalary1 = {
    // omit the property and pick all the remaining ones
    age: 13,
    salary: 1000000,
};
// Exclude used for types , similar to omit
const statuss = "completed";
const response1 = {
    orderID: "12356",
    price: 23,
};
