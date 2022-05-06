import React from 'react';
import useProducts from '../../hooks/useProducts/useProducts';
import './Inventory.css';

const Inventory = () => {
   const [products] = useProducts();
   return (

      <div className='top-container'>
         {
            products.map(product =>

               <div key={product._id} className="w-50 mx-auto mt-2 row row-cols-1 row-cols-md-1 g-2">
                  <div className="col">
                     <div className="card">
                        <img src={product.img} className="card-img-top" alt="" />
                        <div className="card-body">
                           <h5 className="card-title">Name: {product.name}</h5>
                           <p className="card-title">Threads-Brand: {product.brand}</p>
                           <p className="card-title">Price: ${product.price}</p>
                           <p className="card-title">Supplier: {product.supplier}</p>
                           <p className="card-title">{product.des}</p>
                           <button type="button" className="btn btn-outline-primary btn-a">Update Stock</button>
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