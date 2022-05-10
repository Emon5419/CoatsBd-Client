import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {

   const navigate = useNavigate();

   const navigateToProductsDetails = id => {
      navigate(`/product/${id}`)
   }

   const { name, brand, price, img, supplier, des, quantity } = product;
   return (
      <div>
         <div className="row row-cols-1 row-cols-md-1 g-2">
            <div className="col">
               <div className="card">
                  <img src={img} className="card-img-top" alt="" />
                  <div className="card-body">
                     <h5 className="card-title">Name: {name}</h5>
                     <p className="card-title">Brand: {brand}</p>
                     <p className="card-title">Quantity: {quantity}</p>
                     <p className="card-title">Price: ${price}</p>
                     <p className="card-title">Supplier: {supplier}</p>
                     <p className="card-title">{des}</p>
                     <Button className='btn btn-primary ' onClick={() => navigateToProductsDetails(product._id)}><Link to='/inventory'>Update</Link></Button>
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
};

export default Product;