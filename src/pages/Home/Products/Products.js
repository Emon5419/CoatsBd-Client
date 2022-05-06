import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {

      fetch('product.json')
         .then(res => res.json())
         .then(data => setProducts(data));

   }, []);

   return (
      <div>
         <h4 className="card-title text-center mb-0 text-primary">Few Products</h4>
         <div className='d-flex justify-content-center m-5 row row-cols-1 row-cols-md-3 g-4 mt-0'>
            {
               products.slice(0, 6).map(product => <Product
                  key={product._id}
                  product={product}
               ></Product>)
            }
         </div>

      </div>
   );
};

export default Products;