const Employee = require('../lib/Employee');

const employee = new Employee('name', '0', 'test@test.com');

test('creates an employee object', () => {
    expect(employee.name).toBe('name');
    expect(employee.id).toBe('0');
    expect(employee.email).toBe('test@test.com')
});

test('returns name', () =>  {
    expect(employee.getName()).toBe('name');
});

test ('returns id', () => {
    expect(employee.getId()).toBe('0');
});

test ('returns email', () => {
    expect(employee.getEmail()).toBe('test@test.com');
});

test ('returns role', () => {
    expect(employee.getRole()).toBe('employee');
});


    



