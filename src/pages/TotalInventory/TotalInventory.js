import React from 'react';

const TotalInventory = ({ product }) => {
   const { name, img, des, supplier, price, brand } = product;
   return (
      <div>
         <div className="inv-goods m-5 row row-cols-1 row-cols-md-1 g-2">
            <div className="col">
               <div className="card d-flex">
                  <img src={img} className="card-img-top" alt="" />
                  <div className="card-body">
                     <h5 className="card-title">Name: {name}</h5>
                     <p className="card-title">Threads-Brand: {brand}</p>
                     <p className="card-title">Price: ${price}</p>
                     <p className="card-title">Supplier: {supplier}</p>
                     <p className="card-title">{des}</p>
                     <button type="button" className="btn btn-outline-primary btn-a">Update Stock</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TotalInventory;