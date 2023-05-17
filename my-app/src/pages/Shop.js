import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import ProductList from '../components/ProductList'
import { Context } from '..'

function Shop() {
  
  return (
    
    <Container>
        <Row className = "mt-3">
            <Col md={3}>
                <TypeBar></TypeBar>
            </Col>
            <Col md ={9}>
                <BrandBar/>
                <ProductList/>
            </Col>
        </Row>
    </Container>
  )
}

export default Shop