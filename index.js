// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  console.log('Original Employee:', employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 30);
  console.log('Updated Employee (non-destructive):', updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'salary', 50000);
  console.log('Updated Employee (destructive):', employee);
  
  const deletedEmployee = deleteFromEmployeeByKey(employee, 'age');
  console.log('Employee after Deleting (non-destructive):', deletedEmployee);
  
  destructivelyDeleteFromEmployeeByKey(employee, 'salary');
  console.log('Employee after Deleting (destructive):', employee);
  