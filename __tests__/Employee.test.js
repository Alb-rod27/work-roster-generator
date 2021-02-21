const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('name');

    expect(employee.name).toBe('name');
    //expect(employee.id).toBe(expect.any(Number));
    //expect(employee.email).toBe('test@email.com')
    //fix id & email to pass test
});

