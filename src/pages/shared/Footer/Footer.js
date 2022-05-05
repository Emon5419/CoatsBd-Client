import React from 'react';
import './Footer.css';


const Footer = () => {
   return (
      <div className="">

         <footer
            className="text-center text-lg-start text-white"
            style={{ backgroundColor: '#1c2331' }}
         >
            <section
               className="d-flex justify-content-between p-4"
               style={{ backgroundColor: '#1c2331' }}
            >
            </section>

            <section className="">
               <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                     <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Coats Bangladesh</h6>
                        <hr
                           className="mb-4 mt-0 d-inline-block mx-auto"
                        />
                        <p>
                           Coats is the world’s leading industrial thread company. Headquartered in the UK, we have a workforce of 18,000 in some 50 countries, across six continents around the world.
                        </p>
                     </div>
                     <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <hr
                           className="mb-4 mt-0 d-inline-block mx-auto"
                        />
                        <p>
                           <a href="https://www.coats.com/en/Products?type=Threads" className="text-white">Threads</a>
                        </p>
                        <p>
                           <a href="https://www.coats.com/en/Products?type=Yarns" className="text-white">Yarns</a>
                        </p>
                        <p>
                           <a href="https://www.coats.com/en/Products?type=Zips" className="text-white">Zips</a>
                        </p>
                        <p>
                           <a href="https://www.coats.com/en/Products?type=Trims" className="text-white">Trims</a>
                        </p>
                        <p>
                           <a href="https://www.coats.com/en/Products?type=Fabrics" className="text-white">Fabrics</a>
                        </p>
                        <p>
                           <a href="https://www.coats.com/en/Products?type=Composites" className="text-white">Composites</a>
                        </p>
                     </div>
                     <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Useful Social links</h6>
                        <hr
                           className="mb-4 mt-0 d-inline-block mx-auto"
                        />
                        <p>
                           <a href="https://www.facebook.com/coats" className="text-white">Facebook</a>
                        </p>
                        <p>
                           <a href="https://www.instagram.com/coats_group/" className="text-white">Instagram</a>
                        </p>
                        <p>
                           <a href="https://www.linkedin.com/company/coats/mycompany/verification/" className="text-white">Linkedin</a>
                        </p>
                        <p>
                           <a href="https://twitter.com/CoatsGroup" className="text-white">Twitter</a>
                        </p>
                     </div>
                     <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <hr
                           className="mb-4 mt-0 d-inline-block mx-auto"
                        />
                        <p>4-Longwalk Road, Stockley Park,</p>
                        <p>Uxbridge, UB11 1FE,</p>
                        <p>Company number: 103548,</p>
                        <p>+01 234 567 89</p>
                     </div>
                  </div>
               </div>
            </section>

            <div
               className="text-center p-3"
            >
               ©Coats Group PLC 2022
            </div>
         </footer>
      </div>
   );
};

export default Footer;