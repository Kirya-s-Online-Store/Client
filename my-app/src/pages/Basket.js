import React, { useContext } from 'react'
import { Container, Row} from 'react-bootstrap'
import { Context } from '..'
import {observer} from 'mobx-react-lite'
import BasketItem from '../components/BasketItem'


const Basket = observer(() => {
  const { product } = useContext(Context)

  return (
    <Container>
      <Row className='d-flex'>
        {product.productsInBasket.map(item => 
          <BasketItem i = {item} key = {item.id}></BasketItem>
        )}
      </Row>
      <Row className='d-flex'>
        <h2>Полная сотимость корзины: {}</h2>
        <h2>{product.productsInBasket.map(item => item.price * item.count).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</h2>
      </Row>
    </Container>

  )
})

export default Basket