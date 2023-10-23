import React, { useState } from 'react';
import { BsFillGridFill, BsList } from "react-icons/bs"
import { useFilterContext } from '../../context/FilterContext';

const Sort = () => {
  const { Grid_view, setGridView, setListView, filterProducts, sorting } = useFilterContext();
  const [productView, setProductView] = useState();


  return (
    <>
      <div className='container'>
        <div className='row justify-content-between align-items-center my-3'>
          <div className='col-md-4'>
            <button className={Grid_view === true ? "activeLink btn GridIcon" : "btn GridIcon"} onClick={setGridView}>
              <BsFillGridFill />
            </button>
            <button className={!Grid_view === true ? "activeLink btn GridIcon ms-2" : "ms-2  btn GridIcon"} onClick={setListView}>
              <BsList />
            </button>
          </div>

          <div className='col-md-4'>
            <h5 className='total'>{`${filterProducts.length}`} Available</h5>
          </div>

          <div className='col-md-4'>
            <form>
              <select class="form-select" id="sort" onClick={sorting}>
                <option selected value="lowest">Price (Lowest)</option>
                <option value="highest">Price (Highest)</option>
                <option value="a-z">Sort (A-Z)</option>
                <option value="z-a">Sort (Z-A)</option>
              </select>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Sort