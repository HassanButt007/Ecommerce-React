import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import AddToCart from './AddToCart';

const Colors = ({ product }) => {
    const { id, colors, stock } = product;
    const [Pcolor, setPColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1)

    const setincrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    const setdecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    return (
        <>
            <div class="product_meta">
                <span class="posted_in d-flex align-items-center"> <strong>Colors: {" "}</strong>
                    {
                        colors.map((elem, index) => {
                            return (
                                <button
                                    key={index}
                                    className={Pcolor ? "colorbtn active ms-3" : "colorbtn ms-3"}
                                    style={{ backgroundColor: elem }}
                                    onClick={() => setPColor(elem)}
                                    onClickCapture={() => setPColor(elem)}
                                >
                                    {
                                        Pcolor === elem ? <FaCheck className='iconCheck' /> : null
                                    }
                                </button>
                            )
                        })
                    }
                </span>



                <AddToCart
                    amount={amount}
                    setincrease={setincrease}
                    setdecrease={setdecrease}
                />
            </div>
        </>
    )
}

export default Colors