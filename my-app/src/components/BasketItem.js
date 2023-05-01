import React, { useContext, useState } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Context } from '..'


const BasketItem = ({productItem}) => {
  const {product} = useContext(Context)
  const [basketItems, setBasketItems] = useState(product.productsInBasket);
  const removeBasketItem = (id) => {
    setBasketItems(basketItems.filter(i => i.id !== id))
  } 
  return (
    <Col md={3} className = "mt-3">
        <Card style={{width: 150, cursor: 'pointer'}} className='p-2'>
            <Card.Img variant='top' src={productItem.img}/>
            <div className='text-black-50 d-flex justify-content-between align-items-center'>
                <div>Iphone</div>
                <div>{productItem.price} BYN</div>
            </div>
            <div>{productItem.name}</div>
            <Button className='mt-2' variant="outline-danger" onClick={()=>removeBasketItem(productItem.id)}>Удалить</Button>
        </Card>
    </Col>
  )
}

export default BasketItem