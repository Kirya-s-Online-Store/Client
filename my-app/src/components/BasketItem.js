import React, { useContext, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Context } from '..'


const BasketItem = ({ i }) => {
  const { product } = useContext(Context)
  const [quantity, setQuantity] = useState(i.count)
  const setCount = (count)=> {
    setQuantity(count);
    product.setCountProductInBasketById(i.id, count);
  }
  return (
    <Col key={i.id} md={3} className="mt-3">
      <Card style={{ width: 150, cursor: 'pointer' }} className='p-2'>
        <Card.Img variant='top' src={i.img} />
        <div className='text-black-50 d-flex justify-content-between align-items-center'>
          <div>Iphone</div>
          <div>{i.price * quantity} BYN</div>
        </div>
        <div>{i.name}</div>
        <Row>
          <Col>
            <Button className='mt-2' variant="success" onClick={() => setCount(quantity + 1)}>+</Button>
          </Col>
          <Col style={{ display: 'flex' }}>
            <p className='mt-2 mb-0'>{quantity}</p>
          </Col>

          <Col>
            <Button className='mt-2' variant="success" onClick={() => { quantity > 1 ? setCount(quantity - 1) : setCount(1) }}>-</Button>
          </Col>

        </Row>

        <Button className='mt-2' variant="outline-danger" onClick={() => product.removeProductInBusket(i.id)}>Удалить</Button>
      </Card>
    </Col>
  )

}

export default BasketItem