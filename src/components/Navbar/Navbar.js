// React import
import React from 'react';
import { Link } from 'react-router-dom';

// CSS import
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="Components-NavBar-wrapper">
      <Link to={"/Timer"}>
        <img 
          className='Navbar-logoimg'
          src={process.env.PUBLIC_URL + "./NavIcons/timer_icon.png"}
          alt="TimerImg"
        />
      </Link>
      <Link to={"/Calendar"}>
        <img
          className='Navbar-logoimg'
          src={process.env.PUBLIC_URL + "./NavIcons/calendar_icon.png"}
          alt="ClaendarImg"
        />
      </Link>
      <Link to={"/StudyGroup"}>
        <img
          className='Navbar-logoimg'
          src={process.env.PUBLIC_URL + "./NavIcons/studyGroup_icon.png"}
          alt="studyGroupImg"
        />
      </Link>
      <Link to={"/Board"}>
        <img
          className='Navbar-logoimg'
          src={process.env.PUBLIC_URL + "./NavIcons/board_icon.png"}
          alt="board_iconImg"
        />
      </Link>
      <Link to={"/MileageShop"}>
        <img
          className='Navbar-logoimg'
          src={process.env.PUBLIC_URL + "./NavIcons/mileageShop_icon.png"}
          alt="mileageShopImg"
        />
      </Link>
      <Link to={"/Inquery"}>
        <img
          className='Navbar-logoimg'
          src={process.env.PUBLIC_URL + "./NavIcons/inquery_icon.png"}
          alt="inqueryImg"
        />
      </Link>
      </div>
  );
};

export default Navbar;