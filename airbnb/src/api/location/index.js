import instance from "../index";

export function searchLocation(data) {
    return instance({
        url: '/users/getLocationInfo',
        method: 'get',
        params: {
            location: data
        }
    })
}

export function userLogin(data) {
    return instance({
        url: '/users/login',
        method: 'post',
        data: {
            phoneNumber: data.phoneNumber
        }
    })
}

export function register(data) {
    return instance({
        url: '/users/register',
        method: 'post',
        data
    })
}

/**
 * 利用Token进行初次获取用户信息的操作
 */
export function getUserInfo() {
    return instance({
        url: '/users/getUserInfo',
        method: 'get',
    })
}
