import React, { useContext, useEffect, useState } from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Context } from '..'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../http/productAPI'


function ProductPage() {
  
  const { product } = useContext(Context)
  const { user } = useContext(Context)
  const [productItem, setProductItem] = useState({info: []})
  const {id} = useParams()
  useEffect(() =>{
    fetchOneProduct(id).then(data => setProductItem(data))
  }, [])

  const isInBasket = (ItemId)=>
  {
    const newArr = product.productsInBasket.filter(el => el.id != ItemId)
    if (JSON.stringify(newArr) === JSON.stringify(product.productsInBasket)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={6}>
          <Image width={400} height={400} src={process.env.REACT_APP_API_URL + product.photoLink}></Image>
        </Col>
        <Col md={6}>
          <Card className='d-flex flex-column align-items-center justify-content-around text-align-center' style={{width: 'auto', height: 400, fontSize: 32}} border='primary'>
            <div>{productItem.name}</div>
            <h3>{productItem.price} BYN</h3>
            {user.isAuth && <Button onClick={() => {if(!(isInBasket(id))) {product.addProductInBasket(productItem); alert("Товар успешно добален в корзину")} else {alert("Этот товар уже есть в корзине!")}}}>Добавить в корзину</Button>}
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        <h1>Характеристики</h1>
          {productItem.info.map((info, index) =>
            <Row key={productItem.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
              {info.title}:{info.description}
            </Row>
          )}
      </Row>
    </Container>
  )
}

export default ProductPage