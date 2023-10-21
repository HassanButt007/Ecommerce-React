import React from 'react';
import Filter from './components/Filter';
import Sort from './components/Sort';
import ProductList from './components/ProductList';
import GridView from './components/GridView';

const Products = () => {
  return (
    <>
      <section className='productList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <Filter />
            </div>
            <div className='col-md-9'>
              <div className='row'>
                <div className='col-md-12'>
                  <Sort />
                </div>
                <div className='row'>
                  <ProductList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Products