import React from 'react';
import Logo1 from "../../assets/images/trusted/logo-1.jpg";
import Logo2 from "../../assets/images/trusted/logo-2.jpg";
import Logo3 from "../../assets/images/trusted/logo-3.png";
import Logo4 from "../../assets/images/trusted/logo-4.png";
import Logo5 from "../../assets/images/trusted/logo-5.png";

const Trusted = () => {
    return (
        <>
            <section className='py-5'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-12'>
                            <h2 className='text-center' style={{ fontSize: "40px", lineHeight: "60px", marginBottom: "20px", fontWeight: "600" }}>Trusted Dealer</h2>
                        </div>
                    </div>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col'>
                            <img src={Logo1} className='img-fluid d-block m-auto' width={100} height={100} />
                        </div>
                        <div className='col'>
                            <img src={Logo2} className='img-fluid d-block m-auto' width={100} height={100} />
                        </div>
                        <div className='col'>
                            <img src={Logo3} className='img-fluid d-block m-auto' width={100} height={100} />
                        </div>
                        <div className='col'>
                            <img src={Logo4} className='img-fluid d-block m-auto' width={100} height={100} />
                        </div>
                        <div className='col'>
                            <img src={Logo5} className='img-fluid d-block m-auto' width={100} height={100} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trusted