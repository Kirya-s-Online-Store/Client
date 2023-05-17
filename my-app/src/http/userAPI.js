import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const registration = async (firstName, lastName, email, password) => {
    const {data} = await $authHost.post('api/auth/register', {firstName, lastName, email, password, role: 'ROLE_ADMIN'})
    localStorage.setItem('token', data.accessToken)
    return jwt_decode(data.accessToken)
}
export const login = async (email, password) => {
    const {data} = await $authHost.post('api/auth/authenticate', {email, password, role: 'ROLE_ADMIN'})
    localStorage.setItem('token', data.accessToken)
    return jwt_decode(data.accessToken)
}
export const check = async () => {
    console.log(jwt_decode(localStorage.getItem('token')))
    return localStorage.getItem('token')
}