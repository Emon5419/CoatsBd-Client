import React from 'react';
import ExtraSectionOne from '../ExtraSectionOne/ExtraSectionOne';
import ExtraSectionTwo from '../ExtraSectionTwo/ExtraSectionTwo';
import Banner from '../shared/Banner/Banner';
import Footer from '../shared/Footer/Footer';
import Products from './Products/Products';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <ExtraSectionOne></ExtraSectionOne>
         <ExtraSectionTwo />
         <Products></Products>
         <Footer></Footer>
      </div>
   );
};

export default Home;