import React from 'react';
import ExtraSectionOne from '../ExtraSectionOne/ExtraSectionOne';
import Product from '../Product/Product';
import Banner from '../shared/Banner/Banner';
import Footer from '../shared/Footer/Footer';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <ExtraSectionOne></ExtraSectionOne>
         <Product></Product>
         <Footer></Footer>
      </div>
   );
};

export default Home;