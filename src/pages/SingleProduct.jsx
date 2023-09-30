import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import ProductImage from './components/ProductImage';
import Star from './components/Star';

const API = "https://api.pujakaitem.com/api/products";


const SingleProduct = () => {
  const { Is_Single_Loading, singleProduct, getSingleProduct } = useProductContext();
  console.log("singleProduct:", singleProduct);

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
    image
  } = singleProduct;

  // console.log("Images: ", image[]);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [])

  return (
    <>
      <section className='py-5'>
        <div class="container">
          <div class="row panel align-items-center">
            <div class="col-md-6">
              {/* <div class="pro-img-details">
                <img src="https://www.bootdey.com/image/550x380/FFB6C1/000000" alt="" />
              </div>
              <div class="pro-img-list">
                {
                  image.map((currElem, i) => {
                    return (
                      <a href="#">
                        <img src={currElem.url} alt={currElem.filename} className='img-fluid productImageArray' />
                      </a>
                    )
                  })
                }
              </div> */}

              <ProductImage  imgs={image}/>
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
              </div>
              <div class="m-bot15 mb-4"> <strong>Price : </strong> <span class="amount-old">{454433 + 2500}</span>  <span class="pro-price"> {price}</span></div>
              <div class="form-group">
                <label>Quantity {" "}</label>
                <input type="number" placeholder="1" class="form-control ms-3 quantity" />
              </div>
              <p className='mt-4'>
                <button class="btn btn-round btn-primary" type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct