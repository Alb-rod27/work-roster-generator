const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

const engineer = new Engineer('name', '2', 'test@test.com', 'github')

test('creates engineer role', () => {
    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('test@test.com');
    expect(engineer.github).toBe('github');
});

test('returns name', () =>  {
    expect(engineer.getName()).toBe('name');
});

test ('returns id', () => {
    expect(engineer.getId()).toBe('2');
});

test ('returns email', () => {
    expect(engineer.getEmail()).toBe('test@test.com');
});

test ('returns role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test ('returns github user', () => {
    expect(engineer.getGithub()).toBe('github');
});