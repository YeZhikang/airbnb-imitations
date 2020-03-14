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
