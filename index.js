// Write your solution in this file!

const driver = {name: 'Sam'};

// non destructive
function updateDriverWithKeyAndValue(obj, key, value) {
    const updateDriver = { ...obj };
    updateDriver['address'] = '11 Broadway';
    return updateDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    driver['address'] = '12 Broadway';
    return driver
}

// non destructive
function deleteFromDriverByKey(obj, key) {
    let newDriver = Object.assign({}, driver);
    delete newDriver['name'];
    return newDriver
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete driver.name;
    return driver
}