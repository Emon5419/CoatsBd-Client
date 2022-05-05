import React from 'react';
import './ExtraSectionOne.css';
import icon1 from '../../images/Factory icon.png';
import icon2 from '../../images/Globe icon.png';
import icon3 from '../../images/Thinking icon.png';

const ExtraSectionOne = () => {
   return (
      <div className=' mt-5 text-center'>
         <p>The world's leading Industrial Thread Company</p>
         <div className='main-container w-50 mx-auto mt-5'>
            <div className='ms-auto text-center'>
               <img src={icon1} alt="" />
               <p>1,000+ Customers</p>
            </div>
            <div className='ms-auto  text-center'>
               <img src={icon2} alt="" />
               <p>55 Countries</p>
            </div>
            <div className='ms-auto  text-center'>
               <img src={icon3} alt="" />
               <p>25+ Years experience</p>
            </div>
         </div>
      </div>
   );
};

export default ExtraSectionOne;