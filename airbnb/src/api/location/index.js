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

