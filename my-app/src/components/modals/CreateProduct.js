import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'

const CreateProduct = ({show, onHide}) => {
  const {product} = useContext(Context)  
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className='mt-3'>
                <Dropdown.Toggle>Выберете тип</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.types.map(type => <Dropdown.Item key = {type.id}>{type.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>     
            <Dropdown className='mt-3'>
                <Dropdown.Toggle>Выберете бренд</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.brands.map(brand => <Dropdown.Item key = {brand.id}>{brand.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>   
            <Form.Control placeholder='Введите название товара' className='mt-3'/>
            <Form.Control placeholder='Введите стоимость товара' className='mt-3' type='number'/>
            <Form.Control className='mt-3' type='file'/>
            <hr></hr>
            <Button onClick={() => addInfo()}>Добавить новое свойство</Button>
            {info.map(i => 
                <Row  className='mt-3'>
                    <Col md={4} key = {i.number}>
                        <Form.Control placeholder='Введите название свойства'/>
                    </Col>
                    <Col md={4}>
                        <Form.Control placeholder='Введите описание свойства'/>
                    </Col>
                    <Col md={4}>
                        <Button onClick={() => removeInfo(i.number)} variant='outline-danger'>Удалить</Button>
                    </Col>
                </Row>
            )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateProduct