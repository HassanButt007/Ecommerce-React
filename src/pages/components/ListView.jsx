import React from 'react';
import { Link } from "react-router-dom";
import FormatPrice from '../../Helper/FormatCurrency';

const ListView = ({ products }) => {
    return (
        <>


            {
                products.map((currElem) => {
                    const { id, name, price, description, image } = currElem;

                    return (
                        <div class="col-md-12">
                            <section class="search-result-item mb-3 shadow">
                                <Link class="image-link" to="#">
                                    <img class="image" src={image} />
                                </Link>
                                <div class="search-result-item-body">
                                    <div class="row">
                                        <div class="col-sm-9">
                                            <h4 class="search-result-item-heading mb-2"><Link to="#">{name}</Link></h4>
                                            <p class="description">{description.slice(0, 120)}</p>
                                        </div>
                                        <div class="col-sm-3 text-align-center">
                                            <p class="priceList">{<FormatPrice price={price} />}</p>
                                            <a class="btn btn-primary btn-info btn-sm ms-3 mt-3" href={`/single-product/${id}`}>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                })
            }




        </>
    )
}

export default ListView