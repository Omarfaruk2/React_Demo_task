import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap'


const ShowAllItems = ({ product, products, setProducts }) => {

    const { name, _id, image, price, description, warranty, rating, brandName } = product

    const handleDeleted = (id) => {

        // console.log(id)
        const proceed = window.confirm("Are you sure for delete")
        if (proceed) {
            const url = `https://cryptic-headland-62038.herokuapp.com/allitems/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id)
                    console.log(remaining)
                    setProducts(remaining)

                })
        }

    }

    // if (isValidating) {

    //     return

    // }


    return (
        <div className='col-lg-4 p-0 my-3 card-head'>

            <Card className='mx-auto p-4 show-card' style={{ width: '23rem' }}>
                <Card.Img className='' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Brand Name: {brandName}</ListGroup.Item>
                    <ListGroup.Item className='bg-light'>Warranty : {warranty}</ListGroup.Item>
                    <ListGroup.Item>Price: ${price}</ListGroup.Item>
                    <ListGroup.Item className='bg-light'>Rating {rating}</ListGroup.Item>
                </ListGroup>
                <div class="form-check d-lg-grid justify-content-end  p-3">
                    <input width="50px" class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />

                </div>
                <Button onClick={() => handleDeleted(_id)} className="mx-1" variant="danger" >Delete  Items</Button>


            </Card>
        </div>
    )
}

export default ShowAllItems