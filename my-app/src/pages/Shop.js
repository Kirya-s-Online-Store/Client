import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import ProductList from '../components/ProductList'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { fetchTypes, fetchBrands, fetchProducts, createBrand } from '../http/productAPI'
import Pages from '../components/Pages'
import { getDecodeToken } from '../http/userAPI'
import jwt_decode from 'jwt-decode'

const Shop = observer(()=> {
  const {product} = useContext(Context)
  const {user} = useContext(Context)
  
  useEffect(()=> {    
    

    getDecodeToken().then(data => {data.role == 'ROLE_ADMIN' ? user.setIsAdmin(true) : user.setIsAdmin(false)})
    

    fetchBrands().then(data => product.setBrands(data.content));
    fetchTypes().then(data => product.setTypes(data.content));
    fetchProducts(0).then(data => {
      product.setSelectedBrand({});
      product.setSelectedType({});
      product.setProducts(data.content)
      product.setTotalCount(data.totalElements)
      product.setLimit(data.size)
    });
  }, [])

  useEffect(()=> {  
    fetchProducts(product.page, product.selectedBrand.id, product.selectedType.id).then(data => {
      product.setProducts(data.content)
      product.setTotalCount(data.totalElements)
      product.setLimit(data.size)
    });
  }, [product.selectedBrand, product.selectedType, product.page])
  return (
    
    <Container>
        <Row className = "mt-3">
            <Col md={3}>
                <TypeBar></TypeBar>
            </Col>
            <Col md ={9}>
                <BrandBar/>
                <ProductList/>
                <Pages></Pages>
            </Col>
        </Row>
    </Container>
  )
})

export default Shop