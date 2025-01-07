//  function to get all users full name.
function getAllFullName(data) {

    // returning a array with all users full name.
    return data.data.reduce((accumlater, user) => {
        accumlater.push(`${user["name"][0]} ${user["name"][1]}`)
        return accumlater
    }, []);
}
module.exports = getAllFullName;