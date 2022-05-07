import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NotFound = () => {
   return (
      <div className="container text-center">
         <div className="row">
            <div className="col-md-12">
               <div>
                  <h1>
                     Oops!</h1>
                  <h2>
                     404 Not Found</h2>
                  <div>
                     Sorry, an error has occurred, Requested page not found!
                  </div>
                  <div>
                     <Button className='btn btn-primary mt-5'><Link to='/home'>Go Back</Link></Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NotFound;