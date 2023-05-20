import React, { useContext } from 'react'
import { Context } from '..'
import { ListGroup } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const TypeBar = observer(() => {
  const { product } = useContext(Context)
  return (
    <ListGroup>
      <ListGroup.Item
        style={{ cursor: 'pointer' }}
        key={0}
        active={product.selectedType === "All"}
        onClick={() => product.setSelectedType("All")}
      >
        All
      </ListGroup.Item>
      {product.types.map(type =>
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          key={type.id}
          active={type.id === product.selectedType.id}
          onClick={() => product.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
})

export default TypeBar