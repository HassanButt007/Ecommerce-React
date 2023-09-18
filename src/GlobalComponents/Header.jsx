import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <Link class="navbar-brand" to="#">Ecommerce</Link>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav ms-auto">
                                        <li class="nav-item active">
                                            <Link class="nav-link" to="/">Home </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/about">About Us</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="/products">Products</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link " to="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header