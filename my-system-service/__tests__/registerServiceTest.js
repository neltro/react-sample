const { registerService } = require('../services/registerService');

test('Register User But Exists', async () => {
  let res = await registerService({
    'name': 'renel castro',
    'email': 'myname@gmail.com',
    'password': 'xxxxxx'
  });
  expect(res.msgs[0].msg).toBe('Email already exists.')
});

// test('Register User Create', async () => {
//     let res = await registerService({
//         'name': 'renel castro2',
//         'email': 'rcastro2@gmail.com',
//         'password': 'zzzzzz'
//       });
//       expect(res.success).toBe(true);
// })

test('Register User With Missing Name', async () => {
    let res = await registerService({
        'email': 'abc@gmail.com',
        'password': 'zzzzzz'
    });
    expect(res.msgs[0].msg).toBe('Name is required.')
});

test('Register User With Missing Email', async () => {
    let res = await registerService({
        'name': 'John Doe',
        'password': 'zzzzzz'
    });
    expect(res.msgs[0].msg).toBe('Please include valid email.')
});
  
test('Register User With Missing Password', async () => {
    let res = await registerService({
        'name': 'John Dow',
        'email': 'abc@gmail.com'
    });
    expect(res.msgs[0].msg).toBe('Please enter password at least 6 or more characters.')
});

test('Register User With Invalid Password', async () => {
    let res = await registerService({
        'name': 'John Dow',
        'email': 'abc@gmail.com',
        'password': 'abc'
    });
    expect(res.msgs[0].msg).toBe('Please enter password at least 6 or more characters.')
});

test('Register User With Invalid Email', async () => {
    let res = await registerService({
        'name': 'John Dow',
        'email': 'abc',
        'password': 'abcabc'
    });
    expect(res.msgs[0].msg).toBe('Please include valid email.')
});