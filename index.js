// const employee = {};

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     let newObj = {...employee};
//     newObj[key] = value;
//     return newObj;
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;

// }
// function deleteFromEmployeeByKey(employee, key) {
//     let newObj = {...employee};
//     delete newObj[key];
//     return newObj;
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// }

let employee = {
    name: 'Landon',
    streetAddress:'1 Beverly Street'
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) { 
    let newObj = {...employeeObj};
     newObj[key] = value;
     return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value) {
     employee[key] = value;
     return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newObj = {...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
   return employee;
    console.log(employee);
}
destructivelyDeleteFromEmployeeByKey(employee, 'name');
