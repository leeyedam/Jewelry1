import { useState } from 'react';
import List from './list';
import LoginPage from '../../pages/login';

const RoomContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  return (
    <section className="reservation-content">
      <div className="container">
          <div style={{backgroundImage: 'url(/images/reservation-1.jpg)'}} className="reservation-item">
          {/* <LoginPage/> */}
          </div>
          <LoginPage/>
          {/* <div className='featured-item-small-first'> 
            <h3>About Us</h3>
          <h4>We get design inspiration from nature. For example, it is reflected using colors and lines from the stone itself. Or inspired by trees and leaves.</h4>
          </div> */}
        </div>
  
    </section>
  );
};
  
export default RoomContent;
  