import React, { useContext } from 'react'
import { Button, Col, Container, Row} from 'react-bootstrap'
import { Context } from '..'
import {observer} from 'mobx-react-lite'
import BasketItem from '../components/BasketItem'


const Basket = observer(() => {
  const { product } = useContext(Context)
  const { user } = useContext(Context)
  const getTotalPrice = ()=> {
    return product.productsInBasket.map(item => item.price * item.count).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  const createOffer = () => {
    if(getTotalPrice() == 0 && product.productsInBasket.length == 0) 
      {alert("Корзина пуста")}
    else {
      console.log(user.user)
      alert(`Уведомление о приобретении выбранных вами товров отправлено на почту ${user.user.sub}`)
    }
  }
  return (
    <Container>
      <Row className='d-flex'>
        {product.productsInBasket.map(item => 
          <BasketItem i = {item} key = {item.id}></BasketItem>
        )}
      </Row>
      <Row className='d-flex mt-4' md={9}>
        <Col >
          <h3>Полная сотимость корзины: {getTotalPrice().toFixed(2)} BYN</h3>  
        </Col>
        <Col style={{textAlign: 'right'}} md={3}>
          <Button onClick={() => createOffer()}>Оформить заказ</Button>
        </Col>
      </Row>

    </Container>

  )
})

export default Basket