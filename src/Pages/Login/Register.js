import React, { useEffect } from 'react'
import "./Register.css"
import Card from 'react-bootstrap/Card'
import { useForm } from "react-hook-form"
import Google from './Google'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'
import { Button, Form, Spinner } from 'react-bootstrap'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'



const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    let location = useLocation()
    const navigate = useNavigate()

    let from = location?.state?.from?.pathname || "/"

    useEffect(() => {

        if (user) {
            navigate(from, { replace: true })
        }

    }, [from, navigate, user])

    if (loading) {
        return (
            <div className='loginSpiner g-3'>
                <Spinner className='mx-2' animation="grow" variant="primary" />
                <Spinner className='mx-2' animation="grow" variant="secondary" />
                <Spinner className='mx-2' animation="grow" variant="success" />
            </div>
        )
    }

    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data?.email, data?.password)
        console.log(data.email, data.password)

    }

    return (
        <div className='login-header pt-5'>

            <Card className='mx-auto header-card' style={{ width: '60rem' }}>
                <Card.Body className='row p-0 m-0'>

                    <div className="images col-lg-6">
                        <img className='w-100 ' src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1660130283~exp=1660130883~hmac=6d91357a400f16f5f629035579019c60ed568830d4d3cca86a7be9fa5866ad5c" alt="" />
                    </div>

                    {/* Login form */}

                    <div className="login-system-form col-lg-6 ">

                        <div className='mx-auto'>
                            <h3 className='text-primary fw-bold ms-3'>Sing Up</h3>
                            <form className='form-input' onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Your Email" className='text-input' {...register("email", { required: true })} />
                                {errors.firstName?.type === 'required' && "First name is required"}

                                <input placeholder="Your Password" className='text-input' {...register("password", { required: true })} />
                                {errors.lastName && <p>Last name is required</p>}

                                <input className='w-75 input-button' type="submit" />
                            </form>

                        </div>



                        <span>Alreday a user ? <Link className='text-decoration-none text-danger' to="/login "><span className='under'>LOGIN</span></Link>
                        </span>


                        <div>
                            <Google></Google>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Register