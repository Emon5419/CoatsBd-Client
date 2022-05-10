import { useState, useEffect } from "react"


const useProducts = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch('http://https://warm-atoll-03222.herokuapp.com/product')
         .then(res => res.json())
         .then(data => setProducts(data));
   }, []);
   return [products, setProducts];

};

export default useProducts;