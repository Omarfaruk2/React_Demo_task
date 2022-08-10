import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./Navber.css"
import logo from "../../images/codding.png"
const Navber = () => {
    return (
        <div>

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
                            <Link to="/inventory">Inventory</Link>
                            <Link to="/additems">Add Items</Link>
                            <Link to="/myitems">My Items</Link>
                            <Link to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navber