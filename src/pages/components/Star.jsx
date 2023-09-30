import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
    const starRating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span className='rating_Stars'>

                {
                    stars >= index + 1 ? (<FaStar />) : stars >= number ? (<FaStarHalfAlt />) : <AiOutlineStar />
                }
            </span>
        )

    });

    return (
        <>
            {starRating}
            <span className='reviews ms-3'>({reviews} customer reviews)</span>

        </>
    )
}

export default Star