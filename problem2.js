// function to get average salary based on the role.
function averageSalaryBasedRole(data) {

    // geting all salary based role in form of object.
    const salaryBasedRole = data.data.reduce((accumlater, user) => {
        let role = user["hr"][0];
        let salary = user["hr"][1];
        if (!accumlater[role]) {
            accumlater[role] = [];
        }
        accumlater[role].push(salary);
        return accumlater;
    }, {})

    // returning average salary based on the role.
    return Object.keys(salaryBasedRole)
        .reduce((accumlater, role) => {
            let salarys = salaryBasedRole[role];
            let tottalSalary = salarys.reduce((total, salary) => {
                return total + parseInt(salary.replace(/[$,]/g, ""));
            }, 0);
            accumlater[role] = tottalSalary / salarys.length;
            return accumlater;
        }, {});
}
module.exports = averageSalaryBasedRole;