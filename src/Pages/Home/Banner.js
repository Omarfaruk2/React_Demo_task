import React from 'react'
import "./Banner.css"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Banner = () => {
    return (
        <div className='banner-heading'>
            <div className="row p-0 m-0">
                <div className="col-lg-6 mt-5 d-flex justify-content-center align-items-center">
                    <Card className='card-heard p-4' style={{ width: '24rem' }}>
                        <h2 className='text-white'>With modern technology, it is possible to advance education and help students and tutors enjoy the process.</h2>
                    </Card></div>
            </div>
        </div>
    )
}

export default Banner