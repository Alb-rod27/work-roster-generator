const Intern = require('../lib/Intern');

const intern = new Intern('name', '3', 'test@test.com', 'school');

test('creates intern role', () => {
    expect(intern.name).toBe('name');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('test@test.com');
    expect(intern.school).toBe('school');
});

test('returns name', () =>  {
    expect(intern.getName()).toBe('name');
});

test ('returns id', () => {
    expect(intern.getId()).toBe('3');
});

test ('returns email', () => {
    expect(intern.getEmail()).toBe('test@test.com');
});

test ('returns role', () => {
    expect(intern.getRole()).toBe('Intern');
});

test ('returns github user', () => {
    expect(intern.getSchool()).toBe('school');
});