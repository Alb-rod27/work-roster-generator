const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Any');

    expect(employee.name).toBe('Any');
    //expect(employee.id).toBe('')
    //expect(employee.email).toBe('')
    //expect(employee.count).toBe(expect.any(Number))
});

