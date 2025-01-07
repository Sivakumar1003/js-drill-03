// function to group the people based on the role.
function groupBasedRole(data) {

    // returning an object based on the role.
    return data.data.reduce((accumlater, user) => {
        let role = user["hr"][0];
        let fullName = `${user["name"][0]} ${user["name"][1]}`;

        // check if key already exits or not.
        if (!accumlater[role]) {
            accumlater[role] = [fullName];
        } else {
            accumlater[role].push(fullName);
        }
        return accumlater;
    }, {});
}
module.exports = groupBasedRole;