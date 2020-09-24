import { registerService } from '../temp/tmpRegisterService';

async function create(user) {
    return await registerService(user);
}

export { create }