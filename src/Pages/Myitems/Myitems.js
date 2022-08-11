import React, { useEffect, useState } from 'react'
import "./Myitem.css"
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
// import Myitem from '../Myitem/Myitem'
import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Myitems = () => {

    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])

    useEffect(() => {
        const url = `https://cryptic-headland-62038.herokuapp.com/myitems/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
        // console.log(data)
    }, [user?.email])

    console.log(items, "items")
    // const { name, _id, image, price, description, warranty, rating, brandName } = product


    const handleDeleteditems = (id) => {
        const proceed = window.confirm("Are you sure for delete")
        if (proceed) {
            const url = `https://cryptic-headland-62038.herokuapp.com/allitems/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(product => product._id !== id)
                    console.log(remaining)
                    setItems(remaining)

                })
        }
    }


    return (
        <div className='item-div'>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        {/* <th>Images</th> */}
                        <th>Price</th>
                        <th>Warranty</th>
                        <th>Brand Name</th>
                        <th>Delete</th>
                        <th>CheckBox</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item =>
                            <tr key={item?._id}>
                                <td>{item?.name}</td>
                                {/* <td><img width="50px" src={item?.image} alt="" /></td> */}
                                <td>{item?.price}</td>
                                <td>{item?.warranty}</td>
                                <td>{item?.brandName}</td>
                                <td><Button variant="outline-danger" onClick={() => handleDeleteditems(item?._id)}>Delete</Button></td>
                                <td>
                                    <div class="form-check">
                                        <input width="30px" class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />

                                    </div>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Myitems