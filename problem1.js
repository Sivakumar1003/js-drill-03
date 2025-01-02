function groupBasedRole(data) {
    const allGroupBasedRole = {};
    let fullName;

    for(let details of data.data) {
        if(allGroupBasedRole[details.hr[0]] === undefined) {
            fullName = details.name[0] + " " +details.name[1];
            allGroupBasedRole[details.hr[0]] = [(fullName)];
        } else {
            fullName = details.name[0] + " " +details.name[1];
            allGroupBasedRole[details.hr[0]].push(fullName);
        }
    }
    return allGroupBasedRole;
}

module.exports = groupBasedRole;