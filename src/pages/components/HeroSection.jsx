import React from 'react'
import { NavLink } from 'react-router-dom';
import HeroImage from "../../assets/images/pictures/hero.png"

const HeroSection = ({heading}) => {

    const {name} = heading;
    return (
        <>
            <section className='bg-light py-5'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-6 mb-3'>
                            <small className='sub-heaing'>Welcome to</small>
                            <h1 className='hero-heading text-dark'>{ name }</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nisi consequuntur omnis totam incidunt nam laudantium eos ad molestias. Asperiores excepturi cumque consequuntur, molestias quidem corrupti beatae fuga reprehenderit earum.</p>
                            <NavLink>
                                <button type="button" className='btn btn-primary' >Shop Now</button>
                            </NavLink>
                        </div>
                        <div className='col-md-6'>
                            <img src={HeroImage} className='img-fluid rounded shadow' />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HeroSection