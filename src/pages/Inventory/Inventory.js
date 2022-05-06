import React, { useEffect, useState } from 'react';

const Inventory = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {

      fetch('product.json')
         .then(res => res.json())
         .then(data => setProducts(data));

   }, []);
   return (
      <div>
         {
            products.map(product => <Inventory
               key={product._id}
               product={product}
            ></Inventory>)
         }
         <h1>{ }</h1>
      </div>
   );
};

export default Inventory;