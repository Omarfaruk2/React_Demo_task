import React from 'react'

const ShowAllItems = ({ product }) => {
    const { name, _id, image, price, description, warranty, rating, brandName } = product

    return (
        <div className='col-lg-4'>
            <h3>{name} Hello</h3>
        </div>
    )
}

export default ShowAllItems