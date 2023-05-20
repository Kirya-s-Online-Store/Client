import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'
import { createProduct, fetchBrands, fetchProducts, fetchTypes } from '../../http/productAPI'
import { observer } from 'mobx-react-lite'

const CreateProduct = observer(({show, onHide}) => {
  const {product} = useContext(Context)  
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)

  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const selectFile = e => {
    setFile(e.target.files[0])
    console.log(e.target.files[0])
  }

  useEffect(()=> {    
    fetchBrands().then(data => product.setBrands(data.content));
    fetchTypes().then(data => product.setTypes(data.content));
    fetchProducts().then(data => product.setProducts(data.content));
  }, [])

  const addProduct = ()=> {
    createProduct(name, price, product.selectedType.id, product.selectedBrand.id, info).then(data =>  onHide())
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
          Добавить продукт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className='mt-3'>
                <Dropdown.Toggle>{product.selectedType.name || "Выберете тип"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.types.map(type => 
                    <Dropdown.Item  onClick={()=>product.setSelectedType(type)} key = {type.id}>{type.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>     
            <Dropdown className='mt-3'>
                <Dropdown.Toggle>{product.selectedBrand.name || "Выберете бренд"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {product.brands.map(brand => 
                    <Dropdown.Item onClick={()=>product.setSelectedBrand(brand)}  key = {brand.id}>{brand.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>   
            <Form.Control value={name} onChange={e => setName(e.target.value)} placeholder='Введите название товара' className='mt-3'/>
            <Form.Control value={price} onChange={e => setPrice ((Number(e.target.value)))} placeholder='Введите стоимость товара' className='mt-3' type='number'/>
            <Form.Control className='mt-3' type='file' onChange={selectFile}/>
            <hr></hr>
            <Button onClick={() => addInfo()}>Добавить новое свойство</Button>
            {info.map(i => 
                <Row  className='mt-3'>
                    <Col md={4} key = {i.number}>
                        
                        <Form.Control 
                        value = {i.title}
                        onChange = {(e) => changeInfo('title', e.target.value, i.number)} 
                        placeholder='Введите название свойства'/>
                    </Col>
                    <Col md={4}>
                        
                        <Form.Control 
                        value = {i.description}
                        onChange = {(e) => changeInfo('description', e.target.value, i.number)}
                        placeholder='Введите описание свойства'/>
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
        <Button variant='outline-success' onClick={addProduct}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateProduct