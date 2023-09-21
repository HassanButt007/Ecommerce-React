import React from 'react'
import { BiLogoFacebookSquare, BiLogoTiktok } from "react-icons/bi";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <>

            <footer class="text-center text-white" style={{ backgroundColor: "#3f51b5" }}>
                <div class="container">
                    <section class="mt-5">
                        <div class="row text-center d-flex justify-content-center pt-5">
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!" class="text-white">About us</a>
                                </h6>
                            </div>
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!" class="text-white">Products</a>
                                </h6>
                            </div>
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!" class="text-white">Awards</a>
                                </h6>
                            </div>
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!" class="text-white">Help</a>
                                </h6>
                            </div>
                            <div class="col-md-2">
                                <h6 class="text-uppercase font-weight-bold">
                                    <a href="#!" class="text-white">Contact</a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr class="my-5" />
                    <section class="mb-5">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repellat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum harum corrupti
                                    dicta, aliquam sequi voluptate quas.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section class="text-center mb-5">
                        <a href="" class="text-white me-4">
                            <BiLogoFacebookSquare />
                        </a>
                        <a href="" class="text-white me-4">
                            <BsInstagram />
                        </a>
                        <a href="" class="text-white me-4">
                            <BsYoutube />
                        </a>
                        <a href="" class="text-white me-4">
                            <BiLogoTiktok />
                        </a>
                    </section>

                </div>
                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright:
                    <a class="text-white" href="#"> Vortex Solution</a>
                </div>

            </footer>

        </>
    )
}

export default Footer