/* Group the people based on the Role ( You can find in hr array )
Sample output:
{
    "Customer Support": ['Sninder Donna',...etc],
    "Javascript Developer": ['Bruce Michael',...etc]
    .
    .
    .so on
} */

const data = require('../database.js');
const groupBasedRole = require('../problem1.js');

const result = groupBasedRole(data);

console.log(result);