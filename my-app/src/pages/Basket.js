import React, { useContext, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Context } from '..'


function Basket() {
  const { product } = useContext(Context)
  const [basketItems, setBasketItems] = useState(product.productsInBasket);
  const removeBasketItem = (number) => {
    setBasketItems(basketItems.filter(i => i.number !== number))
    product.setProductsInBasket(basketItems)
  } 
  return (
    <Container>
      <Row className='d-flex'>
        {basketItems.map(i =>
          <Col md={3} className="mt-3">
            <Card style={{ width: 150, cursor: 'pointer' }} className='p-2'>
              <Card.Img variant='top' src={i.img} />
              <div className='text-black-50 d-flex justify-content-between align-items-center'>
                <div>Iphone</div>
                <div>{i.price} BYN</div>x  
              </div>
              <div>{i.name}</div>
              <Button className='mt-2' variant="outline-danger" onClick={() => removeBasketItem(i.number)}>Удалить</Button>
            </Card>
          </Col>
        )}
      </Row>
      <Row className='d-flex'>
        <h2>Полная сотимость корзины: </h2>
        <h2>{}</h2>
      </Row>
    </Container>

  )
}

export default Basket