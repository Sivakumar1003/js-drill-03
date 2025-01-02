function averageSalaryBasedRole(data) {
    const salaryBasedRole = {};
    let averagesalary = {};

    for(let details of data.data) {
        if(salaryBasedRole[details.hr[0]] === undefined) {
            salaryBasedRole[details.hr[0]] = [details.hr[1]];
        } else {
            salaryBasedRole[details.hr[0]].push(details.hr[1]);
        }
    }
    
    for(let role in salaryBasedRole) {
        let multiSalary = salaryBasedRole[role];
        let totalSalary = 0;

        for(let salary of multiSalary) {
            salary = parseInt(salary.replace(/[,$]/g, ''));
            totalSalary += salary;
        }
        averagesalary[role] = totalSalary / multiSalary.length;
    }
    return averagesalary;
}

module.exports = averageSalaryBasedRole;