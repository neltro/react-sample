const { userService } = require('../services/userService');

test('User Login With Invalid Credentials', async () => {
    let res = await userService({
      'email': 'myname@gmail.com',
      'password': '123456'
    });
    expect(res.msgs[0].msg).toBe('Invalid Credentials.')
  });

  test('User Login With Missing Email', async () => {
    let res = await userService({
      'password': '123456'
    });
    expect(res.msgs[0].msg).toBe('Please include valid email.')
  });

  test('User Login With Invalid Password', async () => {
    let res = await userService({
      'email': 'abc@gmail.com',
      'password': '123'
    });
    expect(res.msgs[0].msg).toBe('Please enter password at least 6 or more characters.')
  });

  test('User Login Valid Credential', async () => {
    let res = await userService({
      'email': 'myname@gmail.com',
      'password': 'xxxxxx'
    });
    expect(res.success).toBe(true)
  });

  // test('User Login Valid Credential', async () => {
//     let dashboard = dashboardService('xeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibXluYW1lQGdtYWlsLmNvbSIsImlhdCI6MTYwMDY4MDI1NSwiZXhwIjoxNjAwNjgxMTU1fQ.QSxxD2JDg5aY_mn7Z1fMUuMbaifeiyhCURJIrK7rh7s');
//     expect(dashboard.success).toBe(true);
//   });