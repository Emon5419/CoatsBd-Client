import React from 'react';
import './ExtraSectionTwo.css';
import { Card, CardGroup } from 'react-bootstrap';
import name1 from '../../images/Gosnell.jpg';
import name2 from '../../images/Rajiv_Sharma.png';
import name3 from '../../images/Nicholas_Bull.jpg';
const ExtraSectionTwo = () => {
   return (
      <div className='mt-5'>
         <h5 className='text-center underline'><u>Board of Directors</u></h5>
         <CardGroup className='container'>

            <Card>
               <Card.Img variant="top" src={name1} />
               <Card.Body>
                  <Card.Title>David Gosnell OBE</Card.Title>
                  <Card.Text>
                     Chairman
                  </Card.Text>
               </Card.Body>
            </Card>

            <Card>
               <Card.Img variant="top" src={name2} />
               <Card.Body>
                  <Card.Title>Rajib Sharma</Card.Title>
                  <Card.Text>
                     Group Chief Executive
                  </Card.Text>
               </Card.Body>
            </Card>

            <Card>
               <Card.Img variant="top" src={name3} />
               <Card.Body>
                  <Card.Title>Nichoals Bull</Card.Title>
                  <Card.Text>
                     Senior Independent Non-Executive Director
                  </Card.Text>
               </Card.Body>
            </Card>

         </CardGroup>
      </div>
   );
};

export default ExtraSectionTwo;