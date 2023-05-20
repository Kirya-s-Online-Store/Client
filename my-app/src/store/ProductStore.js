import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 0, name: 'All Types'}
        ]

        this._brands = [
            {id: 0, name: 'All Brands'}
        ]

        this._products = [     
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        this._productsInBasket = [
        ]
        this._page = 0
        this._totalCount= 0
        this._limit = 10
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
        this._page = 0
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._page = 0
        this._selectedBrand = brand
    }

    setProductsInBasket(products) {
        this._productsInBasket = products;
    }

    addProductInBasket(product) {
        product.count = 1
        this._productsInBasket.push(product);
    }
    removeProductInBusket(id) {      
        this._productsInBasket = this._productsInBasket.filter((obj) => obj.id !== id);
    }

    setCountProductInBasketById(id, count) {
        this._productsInBasket.find(x => x.id === id).count = count; 
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setLimit(limit) {
        this._limit = limit
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

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}