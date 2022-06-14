import './Inventory.css';
import { Card, Button } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts/useProducts';

const Inventory = () => {
   const [products, setProducts] = useProducts();

   const handleDeleteItems = id => {
      const proceed = window.confirm('Are you sure you want to delete?')
      if (proceed) {

         const url = `http://localhost:5000/product/${id}`;
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
                           <Button variant="danger" onClick={() => handleDeleteItems(product._id)}>Delete</Button>
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