const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

const manager = new Manager('name', '1', 'test@test.com', '888-888-8888')

test('creates manager object', () => {
    expect(manager.name).toBe('name');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('test@test.com');
    expect(manager.officenumber).toBe('888-888-8888');
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
    expect(manager.getOfficeNumber()).toBe('888-888-8888')
})