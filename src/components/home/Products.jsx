import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/ProductSlice';
import Loading from '../Loading'
import Product from './Product';
import ReactPaginate from 'react-paginate';

//! productSlice de api den cekilen verileri, redux ile buraya cekiyoruz, map ile dondukten sonra Product.jsx comps. gonderiyoruz

export default function Products() {

  const dispatch = useDispatch()
  const { products, productStatus } = useSelector(state => state.products)


  //*-------------------- react-paginate (sayfa sınırlandırma)

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  //*-------------------- react-paginate (sayfa sınırlandırma)

  console.log(products, "products")

  useEffect(() => {
    dispatch(getProducts())

  }, [dispatch])

  return (
    <div >
      {
        // gelen productStatus LOADING gelirse loadig comps. import et, gelmez ise producta map ile don, Product comps. gonder verileri 
        productStatus == "LOADING" ? <Loading /> :
          <>        <div className='flex flex-wrap justify-evenly'>
            {// map ile dondugumuz products di, currentItems yaptık usteki ozelik icin
              currentItems.map((product, i) => (
                <Product key={i} product={product} />


              ))
            }

          </div>

          //*-------------------- react-paginate (sayfa sınırlandırma)

            <ReactPaginate
              breakLabel="..."
              nextLabel="  >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<  "
              renderOnZeroPageCount={null}
            />
          </>
        //*-------------------- react-paginate (sayfa sınırlandırma)

      }
    </div>
  )
}