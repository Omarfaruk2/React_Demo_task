import React from 'react'
import useProducts from '../Hooks/useProducts'
import { Spinner } from 'react-bootstrap'
import ShowAllItems from './ShowAllItems'

const Allitems = () => {

    const [products] = useProducts()

    // console.log(products, "hello")

    if (!products) {
        <Spinner className='mx-2' animation="grow" variant="primary" />
    }

    return (
        <div>
            <div className='row m-0 p-0'>
                {
                    products.map(product =>
                        <ShowAllItems
                            product={product}
                            key={product?._id}
                        ></ShowAllItems>)
                }
            </div>
        </div>
    )
}

export default Allitems