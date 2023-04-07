import React, { useContext } from 'react'
import { Context } from '..'
import { ListGroup } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const TypeBar = observer(() => {
  const {product} = useContext(Context)
  return (
    <ListGroup>
        {product.types.map(type =>
            <ListGroup.Item 
                style={{cursor: 'pointer'}}
                key = {type.id}
                active={type.id === product.selectedType.id}
                onClick = {()=>product.setSelectedType(type)}
            >
                {type.name}
            </ListGroup.Item>
        )}
    </ListGroup>
  )
})

export default TypeBar