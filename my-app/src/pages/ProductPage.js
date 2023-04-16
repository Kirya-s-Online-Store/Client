import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


function ProductPage() {
  const product = {id: 1, name: 'iphone 13 pro max', price: 3100, img: "./img/product-imgs/Apple_iPhone-13.jpg"}
  const description = [
    {id: 1, title: 'Оперативная память',description: '5 гб'},
    {id: 2, title: 'Хранилище',description: '128 гб'},
    {id: 3, title: 'Камера',description: '13 МП'},
    {id: 4, title: 'Процессор',description: 'A15 Bionic'},
    {id: 5, title: 'Количество ядер',description: '8'}
  ]
  return (
    <Container className='mt-5'>
      <Row>
        <Col md={6}>
          <Image width={400} height={400} src={product.img}></Image>
        </Col>
        <Col md={6}>
          <Card className='d-flex flex-column align-items-center justify-content-around text-align-center' style={{width: 'auto', height: 400, fontSize: 32}} border='primary'>
            <div>{product.name}</div>
            <h3>{product.price} BYN</h3>
            <Button>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        <h1>Характеристики</h1>
          {description.map((info, index) =>
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
              {info.title}: {info.description}
            </Row>
          )}
      </Row>
    </Container>
  )
}

export default ProductPage