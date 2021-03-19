const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

const manager = new Manager()

test('creates manager object', ('name', '1', 'test@test.com'), () => {
    expect(manager.name).toBe('name');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('test@test.com');
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('returns name', () => {
    expect(manager.getName()).toBe('name')
});

test('returns id', () => {
    expect(manager.getId()).toBe('1')
})

test('returns email', () => {
    expect(manager.getEmail()).toBe('test@test.com')
})

test('returns role', () => {
    expect(manager.getRole()).toBe('Manager')
})

test('returns office number', () => {
    expect(manager.getOfficeNum()).toEqual(expect.any(Number))
})