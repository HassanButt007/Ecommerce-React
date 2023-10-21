import React from 'react'
import Product from './Product'

const GridView = ({ products }) => {
    return (
        <>

            {
                products.map((currElem) => {
                    return <Product key={currElem.id} {...currElem} />
                })
            }

        </>
    )
}

export default GridView