import { profileService, getProfile } from '../temp/tmpProfileService';

async function updateProfile(user) {
    return await profileService(user);
}

async function getUser(email) {
    return await getProfile(email)
}
export { updateProfile, getUser }