import React from 'react';
import ExtraSectionOne from '../ExtraSectionOne/ExtraSectionOne';
import ExtraSectionTwo from '../ExtraSectionTwo/ExtraSectionTwo';
import Product from '../Product/Product';
import Banner from '../shared/Banner/Banner';
import Footer from '../shared/Footer/Footer';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <ExtraSectionOne></ExtraSectionOne>
         <ExtraSectionTwo />
         <Product></Product>
         <Footer></Footer>
      </div>
   );
};

export default Home;