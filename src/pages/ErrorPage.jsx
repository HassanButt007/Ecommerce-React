import React from 'react';
import ErrorImage from "../assets/images/pictures/error.png"

const error = () => {
  return (
    <>

      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <img src={ErrorImage} className='img-fluid d-block m-auto mb-4' />
            <a href="/">
              <button className='btn btn-primary px-5 d-block m-auto'>
                Back
              </button>
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default error