import React from 'react';
import { Link } from "react-router-dom";
import FormatPrice from '../../Helper/FormatCurrency';

const Product = (currElem) => {
    const { id, name, price, company,  description, category, image } = currElem;
    return (
        <>
            <div className="col-md-4" key={id}>
                <div className="product-thumbnail card p-3">
                    <Link to={`/single-product/${id}`}>
                        <img src={image} alt={name} className='img-fluid' />
                    </Link>
                    <div className="caption">
                        <h6>
                            <Link to={`/single-product/${id}`}>
                                {/* {name.length > 15 ? `${name.slice(0, 15)}...` : name} */}
                                {name}
                            </Link>
                        </h6>
                        <p className="price sale">
                            {<FormatPrice price={price} />}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product