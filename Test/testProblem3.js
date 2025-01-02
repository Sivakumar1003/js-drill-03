// Return an array with all the full names

const data = require('../database.js');
const getAllFullName = require('../problem3.js');

const result = getAllFullName(data);

if (result.length == 0) {
    console.log("No one found in database.")
} else {
    console.log(result);
}