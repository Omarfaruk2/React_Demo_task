import React from 'react'
import "./Additems.css"
import { Spinner } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const Additems = () => {

    const [user, loading] = useAuthState(auth)

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()


    if (loading) {
        return (
            <div className='loginSpiner g-3'>
                <Spinner className='mx-2' animation="grow" variant="primary" />
                <Spinner className='mx-2' animation="grow" variant="info" />
                <Spinner className='mx-2' animation="grow" variant="warning" />
            </div>
        )
    }

    const onSubmit = (data) => {

        const url = "https://cryptic-headland-62038.herokuapp.com/allitems"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                data = {}
                navigate('/allitems')
            })

        console.log(data)
    }

    return (
        <div className='addItem-div '>
            <form className='d-flex flex-column w-50 mx-auto mt-4 additems-form' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' placeholder='Product Name' type="text" {...register("name", { required: true, maxLength: 20 })} />

                <textarea className='mb-2' placeholder='Description' type="text" {...register("description")} />
                <input className='mb-2' value={user?.email} placeholder='Price' type="email" {...register("email")} readOnly />
                <input className='mb-2' placeholder='Brand Name' type="text" {...register("brandName")} />
                <input className='mb-2' placeholder='Warranty (Months)' type="number" {...register("warranty")} />
                <input className='mb-2' placeholder='Rating' type="number" {...register("rating")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photourl'  {...register("image")} />
                <input className='mb-2 bb' type="submit" value="Add Product" />

            </form>
        </div>
    )
}

export default Additems