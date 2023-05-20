import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const registration = async (firstName, lastName, email, password) => {
    const {data} = await $host.post('api/auth/register', {firstName, lastName, email, password})
    localStorage.setItem('token', data.accessToken)
    return jwt_decode(data.accessToken)
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/auth/authenticate', {email, password})
    
    localStorage.setItem('token', data.accessToken)
    
    return jwt_decode(data.accessToken)
}
export const check = async () => {
    console.log(jwt_decode(localStorage.getItem('token')))
    return jwt_decode(localStorage.getItem('token'))
}

export const getDecodeToken = async () => {
    console.log(jwt_decode(localStorage.getItem('token')))
    
    return jwt_decode(localStorage.getItem('token'))
}