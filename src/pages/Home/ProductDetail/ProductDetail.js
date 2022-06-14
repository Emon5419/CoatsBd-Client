import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts/useProducts';

const ProductDetail = () => {

   const { productId } = useParams();
   const [products, setProducts] = useProducts();

   const [product, setProduct] = useState({});

   useEffect(() => {
      const url = `http://localhost:5000/product/${productId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data));

   }, []);


   const handleDeliverItems = id => {
      const proceed = window.confirm('Delete This items?')
      if (proceed) {

         const url = `http://https://warm-atoll-03222.herokuapp.com//product/${id}`;
         fetch(url, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               const remaining = products.filter(product => product._id !== id)
               setProducts(remaining);
            });
      }
   }
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
            <Button className='w-100' onClick={() => handleDeliverItems(product._id)}>Deliver</Button>
         </div>
      </div>
   );
};

export default ProductDetail;