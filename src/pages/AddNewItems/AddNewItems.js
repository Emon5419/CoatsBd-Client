import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewItems.css';

const AddNewItems = () => {

   const { register, handleSubmit } = useForm();

   const onSubmit = data => {
      console.log(data);
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
         })
   };



   return (
      <div className='w-50 mx-auto'>
         <h2>Please add a Products</h2>

         <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

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