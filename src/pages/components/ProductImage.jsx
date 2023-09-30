import React, { useState } from 'react';



const ProductImage = ({ imgs = [{ url: "" }] }) => {
    const [mainImage, setMainImage] = useState(imgs[0]);

    console.log("image Array:", imgs[0]);
    console.log("image Array2:", imgs);
    console.log("imgs length:", imgs.length);
    console.log("mainImage.url:", mainImage.url);
    console.log("mainImageurl:", mainImage);

    return (
        <>
            <div class="pro-img-details">
                <img src={mainImage.url} alt={mainImage.filename} />
            </div>
            <div class="pro-img-list">
                {imgs.map((currElem, i) => (
                    <a href="#" key={i}>
                        <img
                            src={currElem.url}
                            alt={currElem.filename}
                            className='img-fluid productImageArray'
                            onClick={() => setMainImage(currElem)}
                        />
                    </a>
                ))}
            </div>
        </>
    );
};

export default ProductImage