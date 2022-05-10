import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import './Inventory.css';

const Inventory = () => {
   const [products, setProducts] = useProducts();

   const handleDelete = id => {
      const proceed = window.confirm('Are you sure?');
      if (proceed) {
         const url = `http://https://warm-atoll-03222.herokuapp.com/service/${id}`;
         fetch(url, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               const remaining = products.filter(product => product._id !== id);
               setProducts(remaining);
            })
      }
   }

   return (

      <div>
         <div className='text-center mt-5'>
            <Button><Link to=' '>Add New Items</Link></Button>
         </div>
         {
            products.map(product =>

               <div key={product._id} className="w-50 mx-auto mt-2 row row-cols-1 row-cols-md-1 g-2">
                  <div className="col">
                     <div className="card">
                        <img src={product.img} className="card-img-top" alt="" />
                        <div className="card-body">
                           <h5 className="card-title">Name: {product.name}</h5>
                           <p className="card-title">Brand: {product.brand}</p>
                           <p className="card-title">Price: ${product.price}</p>
                           <p className="card-title">Quantity: ${product.quantity}</p>
                           <p className="card-title">Supplier: {product.supplier}</p>
                           <p className="card-title">{product.des}</p>
                           <Button className='btn btn-Primary p-2' onClick={() => handleDelete(product._id)}>Removed</Button>
                        </div>
                     </div>
                  </div>
               </div>
            )
         }
      </div>
   );
};

export default Inventory;