import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import ProductImage from './components/ProductImage';
import Star from './components/Star';
import Colors from './components/Colors';


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { Is_Single_Loading, singleProduct, getSingleProduct } = useProductContext();


  const { id } = useParams();


  const {
    id: singleId,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    colors,
    image
  } = singleProduct;

  console.log("stock", stock);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])

  return (
    <>
      <section className='py-5'>
        <div class="container">
          <div class="row panel align-items-center">
            <div class="col-md-6">
              <ProductImage imgs={image} />
            </div>
            <div class="col-md-6">
              <h4 class="pro-d-title">
                <a href="#" class="">
                  {name}
                </a>
              </h4>
              <Star stars={stars} reviews={reviews} />
              <p>
                {description}
              </p>
              <div class="product_meta">
                <span class="posted_in"> <strong>Categories: {" "}</strong>
                  <a rel="tag" href="#">{category}</a>
                </span>
                <span class="tagged_as">
                  <strong>Availabel:{" "}</strong>
                  <a rel="tag" href="#">{stock > 0 ? "In Stock" : "Not Available"}</a>
                </span>
                <span class="tagged_as">
                  <strong>Company:{" "}</strong>
                  <a rel="tag" href="#">{company}</a>
                </span>
              </div>
              <div class="m-bot15 mb-4"> <strong>Price : </strong> <span class="amount-old">{454433 + 2500}</span>  <span class="pro-price"> {price}</span></div>

              {
                stock > 0 && (
                  <>
                    <Colors product={singleProduct} />

                  </>
                )
              }

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct