import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';


const MyItems = () => {
   const [user] = useAuthState(auth);

   const [newItems, setNewItems] = useState([]);

   useEffect(() => {

      const getItems = async () => {
         const email = user.email;


         const url = `http://localhost:5000/items?email=${email}`;
         const { data } = await axios.get(url);
         setNewItems(data);

      }
      getItems();

   }, [user]);

   return (
      <div>
         <h1>My Added All Items : {newItems.length}</h1>
      </div>
   );
};

export default MyItems;