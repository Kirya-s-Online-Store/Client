import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode";

export const createProduct = async (name, price, typeId, brandId, info) => {
    const {data} = await $authHost.post('api/products', {name, price, typeId, brandId, info})
    return data
}

export const fetchProducts = async (page, brand_id, type_id) => {
    const {data} = await $host.get('api/products', {params: {page,brand_id, type_id}})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/products/' + id)
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brands', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brands')
    return data
}

export const createType = async (type) => {
    const {data} = await $authHost.post('api/types', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/types')
    return data
}