import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts/useProducts';

const ProductDetail = () => {
   const [quantity, setQuantity] = useState(100);

   const { productId } = useParams();

   const [product, setProduct] = useState({});

   useEffect(() => {
      const url = `http://localhost:5000/product/${productId}`;
      fetch(url)
         .then(res => res.json())
         .then(data => setProduct(data));

   });


   return (
      <div>
         <div className='d-flex detail-container w-50 mx-auto mt-5'>
            <div>
               <img className='w-75' src={product.img} alt="" />
            </div>
            <div>
               <h5>Name: {product.name}</h5>
               <h6>Quantity: {quantity}</h6>
               <h6>Price: {product.price}</h6>
               <h6>Brand: {product.brand}</h6>
               <h6>Supplier: {product.supplier}</h6>
               <h6>Description: {product.des}</h6>

               <Button className='w-100' onClick={
                  () => {
                     setQuantity(quantity - 1);
                  }
               }>Deliver</Button>
            </div>
         </div>
         <div>
            <Form className='text-center mt-5'>
               <Form.Label><u>Add Quantity Here</u></Form.Label>
               <Form.Group className="mb-3 w-50 mx-auto">

                  <Form.Control onChange={
                     (e) => setQuantity(quantity + parseInt(e.target.value))} type="number" placeholder="Enter Quantity" />

               </Form.Group>
            </Form>

         </div>
      </div>
   );
};

export default ProductDetail;