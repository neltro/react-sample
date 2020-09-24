import { userService } from '../temp/tmpUserService';

async function login(user) {
    return await userService(user);
}

export { login }