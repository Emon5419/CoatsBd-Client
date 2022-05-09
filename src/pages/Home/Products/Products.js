import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {

      fetch('http://localhost:5000/product')
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
            <Button className='btn btn-Primary p-2'><Link to='/inventory'> See More Details </Link></Button>

         </div>

      </div>
   );
};

export default Products;