import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Телефоны'},
            {id: 2, name: 'Ноутбуки'}
        ]

        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'},
            {id: 3, name: 'Honor'}
        ]

        this._products = [
            {id: 1, name: 'iphone 13 pro max', price: 3100, img: "./img/Apple_iPhone-13.jpg"}
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setProducts(products) {
        this._products = products
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }
}