import axios from 'axios'

const ax = axios.create({
    baseURL: 'http://api.wordcard.oksteward.com:7001',
    timeout: 5000
});

export function pasreUserKey(userKey) {
    const userId = userKey.substr(0, 8);
    const openId = userKey.substr(8);

    return {
        userId,
        openId
    };
}

export async function checkUser(userKey = '') {
    try {
        const userData = pasreUserKey(userKey);
        const res = await ax.get('/user', {
            params: userData
        }); 

        return res.data;
    } catch (error) {
        return error;        
    }
}

export async function sync(userId, words) {
    try {
        const res = await ax.post('/sync', {
            userId,
            words
        }); 

        return res.data;
    } catch (error) {
        return error;
    }
}