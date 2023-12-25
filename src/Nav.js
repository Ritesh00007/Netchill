import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  if (window.scrollY > 100) {
    handleShow(true);
  } else {
    handleShow(false)
  }
};

useEffect(() => {
window.addEventListener("scroll", transitionNavBar);
return () => window.removeEventListener("scroll", transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_contents'>

         <img
        className='nav_logo' 
        src='https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/d7f6b1b03c3fd929d1c5794538c702f1-1609958216/netchill-1/design-a-eye-catching-logo-and-banner.png' 
        alt=''/>

        <img
         className='nav_avatar'
         src='https://lens-storage.storage.googleapis.com/png/8291c9c3eea844548a23ec9595a7376a' 
         alt=''/>
        </div>
        
      
    </div>
  )
}

export default Nav
