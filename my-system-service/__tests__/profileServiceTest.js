const { getProfile } = require('../services/profileService');

test('Get Profile', async () => {
  let res = await getProfile({
    'email': 'myname@gmail.com'
  });
  expect(res.user.email).toBe('myname@gmail.com')
});

test('Get Profile Not Found', async () => {
    let res = await getProfile({
      'email': 'notfound@gmail.com'
    });
    expect(res.msgs[0].msg).toBe('User not found.')
});