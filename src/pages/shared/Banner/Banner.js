import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';
import './Banner.css';
const Banner = () => {
   return (
      <Carousel>
         <Carousel.Item>
            <img className="d-block w-100" src={slider1} alt="" />
            <Carousel.Caption>
               <h1>We have published our Annual Report 2021</h1>
               <p>It provides our shareholders and other key stakeholders with information about our strategy and business as well as our financial and operating performance during 2021</p>
               <button type="button" class="btn btn-outline-primary btn-a"><a href="https://www.coats.com/en/Investors/Results/2022/View-Year-in-Review-2021/Result-Article">Download Annual Report and View Online Report</a></button>
            </Carousel.Caption>
         </Carousel.Item>

         <Carousel.Item>
            <img className="d-block w-100" src={slider2} alt="" />
            <Carousel.Caption>
               <h1>2021 Full Year Results</h1>
               <p>We have announced our Full Year results for the year ended 31 December 2021</p>
               <button type="button" class="btn btn-outline-primary btn-a"><a href="https://www.coats.com/en/Investors/Results/2022/2021-Full-Year-results/Result-Article">2021 Full Year Results</a></button>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img className="d-block w-100" src={slider3} alt="" />


            <Carousel.Caption>
               <h1>Sustainability Report 2021</h1>
               <p>We have published our Sustainability Report for 2021 which provided an update on our targets for 2022</p>
               <button type="button" class="btn btn-outline-primary btn-a"><a href="https://www.coats.com/en/Sustainability/Sustainability-Overview">Download Sustainability Report 2021</a></button>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
};

export default Banner;