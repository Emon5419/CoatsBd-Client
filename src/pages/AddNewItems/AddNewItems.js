import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import './AddNewItems.css';
import { useParams } from 'react-router-dom';


const AddNewItems = () => {
   const { productId } = useParams();

   const [user] = useAuthState(auth);

   const { register, handleSubmit } = useForm();

   const onSubmit = (data, event) => {



      const items = {
         email: user.email,
         productId: productId,
         name: event.target.name.value,
         Supplier: event.target.supplier.value,
         Brand: event.target.brand.value,
         price: event.target.price.value,
         quantity: event.target.quantity.value,
         img: event.target.img.value,
      }

      axios.post('http://localhost:5000/items', items)
         .then(response => {
            console.log(response)
            // const { data } = response;
            if (data.insertedId) {
               toast('New Product Added!!');
            }
         })

      const url = `http://localhost:5000/product`;
      fetch(url, {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(result => {
            console.log(result);
            if (result) {
               toast('Items Added!!!')
               event.target.reset();
            }

         });


   }


   return (
      <div className='w-50 mx-auto'>

         <h2>Please add a Products</h2>

         <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />

            <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
            <input className='mb-2' placeholder='Brand' type="text" {...register("brand")} />
            <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
            <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
            <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
            <input className='btn btn-outline-primary' type="submit" value="Add product" />
         </form>
      </div>
   );
};

export default AddNewItems;