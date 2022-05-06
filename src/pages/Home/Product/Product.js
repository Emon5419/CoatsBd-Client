import React from 'react';
import './Product.css';

const Product = ({ product }) => {
   const { name, brand, price, img, supplier, des } = product;
   return (
      <div>




         <div className='card-container'>

            <div className="row row-cols-1 row-cols-md-1 g-4">
               <div className="col">
                  <div className="card">
                     <img src={img} className="card-img-top" alt="" />
                     <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-title">Threads-Brand: {brand}</p>
                        <p className="card-title">Price: ${price}</p>
                        <p className="card-title">Supplier: {supplier}</p>
                        <p className="card-title">{des}</p>
                        <button type="button" class="btn btn-outline-primary btn-a">Update Stock</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Product;