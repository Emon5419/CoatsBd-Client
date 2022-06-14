import React from 'react';
import { Card } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts/useProducts';
import './Inventory.css';

const Inventory = () => {
   const [products] = useProducts();

   return (
      <div>
         <h3 className='text-center mt-5 mb-0'>All Items</h3>
         <div className='manage-container w-50 mx-auto mt-0'>
            {
               products.map(product =>
                  <div className='mt-5' key={product._id} >
                     <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.img} />
                        <Card.Body>
                           <Card.Title>{product.name}</Card.Title>
                           <Card.Text>
                              Price: {product.price},
                           </Card.Text>
                           <Card.Text>
                              Brand: {product.brand},
                           </Card.Text>
                           <Card.Text>
                              Supplier: {product.supplier},
                           </Card.Text>
                        </Card.Body>
                     </Card>
                  </div>
               )
            }
         </div>
      </div>
   );
};

export default Inventory;