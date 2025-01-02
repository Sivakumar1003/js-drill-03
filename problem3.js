function getAllFullName(data) {
    let allFullNames = [];

    for(let details of data.data){
        let fullName = details.name[0] + " " + details.name[1];
        allFullNames.push(fullName);
    }
    return allFullNames;
}

module.exports = getAllFullName;