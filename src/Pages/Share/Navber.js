import React from 'react'
import { signOut } from 'firebase/auth'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./Navber.css"
import logo from "../../images/codding.png"
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
const Navber = () => {

    const [user, loading, error] = useAuthState(auth)

    // if (user) {
    //     console.log(user, "ase")
    // }

    // if (!user) {
    //     console.log("nai")
    // }
    const logout = () => {
        signOut(auth)
        console.log("logout")
    }

    return (
        <>

            <Navbar collapseOnSelect className='py-3 sticky-top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home#home">
                        <img width="40px" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='nav-item'>
                            <Link to="/home">Home</Link>
                            <Link to="/allitems">AllItems</Link>
                            <Link to="/additems">Add Items</Link>
                            <Link to="/myitems">My Items</Link>

                            {user ?
                                <button onClick={logout}
                                    className="btn btn-danger">Sign Up</button>
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