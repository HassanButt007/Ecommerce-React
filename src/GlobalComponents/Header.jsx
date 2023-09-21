import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <>

            <Navbar bg="light" expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <Nav.Link href="/cart">
                                <span className='shoppingCart'>
                                    <FiShoppingCart className="cartTrolley" />
                                    <span className="cart-total">10</span>
                                </span>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />

        </>
    )
}

export default Header