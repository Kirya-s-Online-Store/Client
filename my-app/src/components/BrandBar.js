import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Context } from '..'


const BrandBar = observer(() => {
    const { product } = useContext(Context)
    return (
        <Form className="d-flex">
            {product.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="p-2"
                    onClick={() => product.setSelectedBrand(brand)}
                    border = {brand.id === product.selectedBrand.id ? 'primary': 'seconary'}
                    >
                    {brand.name}
                </Card>
            )}
        </Form>
    )
})

export default BrandBar