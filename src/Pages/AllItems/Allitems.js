import React from 'react'
import useProducts from '../Hooks/useProducts'
import { Spinner } from 'react-bootstrap'
import ShowAllItems from './ShowAllItems'
import "./AllItems.css"

const Allitems = () => {

    const [products, setProducts] = useProducts()

    console.log(products, "hello")

    if (!products) {
        return (
            <div className='loginSpiner g-3'>
                <Spinner className='mx-2' animation="grow" variant="primary" />
                <Spinner className='mx-2' animation="grow" variant="secondary" />
                <Spinner className='mx-2' animation="grow" variant="success" />
                <Spinner className='mx-2' animation="grow" variant="success" />
            </div>
        )
    }
    console.log(products)

    return (
        <div className='pb-5 pt-5 All-items-header'>
            <div className='row m-0 p-0'>
                {
                    products.map(product =>
                        <ShowAllItems
                            product={product}
                            products={products}
                            setProducts={setProducts}
                            key={product?._id}
                        ></ShowAllItems>)
                }
            </div>
        </div>
    )
}

export default Allitems