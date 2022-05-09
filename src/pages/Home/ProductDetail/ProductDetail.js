import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

   const { productId } = useParams();

   const [product, setProduct] = useState({});

   useEffect(() => {
      const url = `http://localhost:5000/product/${productId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data));

   }, []);


   return (

      <div className='d-flex detail-container w-50 mx-auto mt-5'>
         <div>
            <img className='w-75' src={product.img} alt="" />
         </div>
         <div>
            <h5>Name: {product.name}</h5>
            <h6>Quantity: 500Kg</h6>
            <h6>Price: {product.price}</h6>
            <h6>Brand: {product.brand}</h6>
            <h6>Supplier: {product.supplier}</h6>
            <h6>Description: {product.des}</h6>
            <Button className='w-100'>Deliver</Button>
         </div>
      </div>
   );
};

export default ProductDetail;