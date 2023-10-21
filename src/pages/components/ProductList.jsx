import React from 'react'
import { useFilterContext } from '../../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filterProducts, Grid_view } = useFilterContext();
  if(Grid_view === true) {
      return <GridView products = {filterProducts} />
  }

  if(Grid_view === false ) {
    return <ListView products = {filterProducts} />
}

  return (
    <>
   
    
    </>
  )
}

export default ProductList