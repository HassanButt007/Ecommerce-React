import React from 'react';
import { useProductContext } from '../../context/ProductContext';
import Product from './Product';



const CProduct = () => {
    const { isLoading, category } = useProductContext();
    console.log("category", category);

    if (isLoading) {
        return (
            <h5 className='text-center py-5'>...Loading</h5>
        )
    }

    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-5">Mens Category</h1>
                <div className="row justify-content-center">
                   { category.slice(0, 3).map((currElem) => {
                        return <Product {...currElem} />
                    })}
                </div>
            </div>
        </>
    )
}

export default CProduct