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
            {id: 1, name: 'iphone 13 pro max', price: 3100, img: "./img/product-imgs/Apple_iPhone-13.jpg"},
            {id: 2, name: 'iphone 14 pro max', price: 3600, img: "./img/product-imgs/Apple_iPhone-13.jpg"},
            {id: 3, name: 'iphone 12 pro max', price: 2500, img: "./img/product-imgs/Apple_iPhone-13.jpg"},
            {id: 4, name: 'iphone 12 pro max', price: 2500, img: "./img/product-imgs/Apple_iPhone-13.jpg"},        
            {id: 5, name: 'iphone 12 pro max', price: 2500, img: "./img/product-imgs/Apple_iPhone-13.jpg"}        
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        this._productsInBasket = []
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

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setProductsInBasket(products) {
        this._productsInBasket = products;
    }

    addProductInBasket(product) {

        this._productsInBasket.push(product);
        
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

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get productsInBasket() {
        return this._productsInBasket;
    }
}