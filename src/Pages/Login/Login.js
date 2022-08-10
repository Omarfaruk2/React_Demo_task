import React from 'react'
import "./Login.css"
import Card from 'react-bootstrap/Card'
import { useForm } from "react-hook-form"


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => console.log(data.email)



    return (
        <div className='login-header pt-5'>

            <Card className='mx-auto header-card' style={{ width: '60rem' }}>
                <Card.Body className='row p-0 m-0'>

                    <div className="images col-lg-6">
                        <img className='w-100 ' src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1660130283~exp=1660130883~hmac=6d91357a400f16f5f629035579019c60ed568830d4d3cca86a7be9fa5866ad5c" alt="" />
                    </div>

                    {/* Login form */}

                    <div className="login-system-form col-lg-6">

                        <div className=''>
                            <h3 className='text-primary fw-bold ms-3'>Login</h3>
                            <form className='form-input' onSubmit={handleSubmit(onSubmit)}>
                                <input className='text-input' {...register("email", { required: true })} />
                                {errors.firstName?.type === 'required' && "First name is required"}

                                <input className='text-input' {...register("password", { required: true })} />
                                {errors.lastName && <p>Last name is required</p>}

                                <input className='w-75 input-button' type="submit" />

                            </form>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Login