import React from 'react'
import { signOut } from 'firebase/auth'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom"
import "./Navber.css"
import logo from "../../images/codding.png"
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
const Navber = () => {

    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    // if (user) {
    //     console.log(user, "ase")
    // }

    // if (!user) {
    //     console.log("nai")
    // }
    const logout = () => {
        signOut(auth)
        navigate("/")
    }

    return (
        <>

            <Navbar collapseOnSelect className='py-3 sticky-top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home#home">
                        <img width="40px" src={logo} alt="" /><span className='fw-bold ms-2'>EDTAKE.COM</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='nav-item'>
                            <Link to="/home">Home</Link>
                            <Link to="/allitems">All Items</Link>
                            <Link to="/additems">Add Items</Link>
                            <Link to="/myitems">My Items</Link>

                            {user ?
                                <button onClick={logout}
                                    className="btn btn-dark"><span className='sing'>Sign Up</span></button>
                                : <Link to="/login">Login</Link>
                            }
                            {/* <Link to="/login">Login</Link> */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navber