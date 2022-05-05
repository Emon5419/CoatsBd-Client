import React from 'react';
import Product from '../Product/Product';
import Banner from '../shared/Banner/Banner';
import Footer from '../shared/Footer/Footer';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Product></Product>
         <Footer></Footer>
      </div>
   );
};

export default Home;