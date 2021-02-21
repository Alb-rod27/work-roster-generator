const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('name', '1', 'test@test.com');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('test@test.com')
    //fix id & email to pass test
});

