import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";

const AddToCart = ({amount, setincrease, setdecrease}) => {

    return (
        <>
            <div class="form-group d-flex align-items-center">
                <button onClick={()=> setdecrease()} className='btnCount'>-</button>
                <p style={{padding:"0px 30px", border:"2px solid rgb(63, 81, 181)", fontSize:"16px", fontWeight:"600"}} className='mt-3'>{amount}</p>
                <button onClick={()=> setincrease()} className='btnCount'>+</button>
            </div>

            <p className='mt-4'>
                <button class="btn btn-round btn-primary" type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
            </p>
        </>
    )
}

export default AddToCart