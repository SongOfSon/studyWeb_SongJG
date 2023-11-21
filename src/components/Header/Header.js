// React import
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// CSS import
import './Header.css'

// Pages import

// Components import
import Modal from '../Modal/Modal';

const Header = (props) => {
// React hooks
  const [isLogin, setIsLogin] = useState(false);

// Handle
  const handleIsLogin = e => setIsLogin(e.target.value);
// UI
  return (
    <div className='Header-wrapper'>
      <div className='Header-Logo-con'>
        <Link to={"/"}>
        <img 
          className='Header-Logo-image' 
          src={process.env.PUBLIC_URL + "./Logo/logo.png"} 
          alt='logo-img'/>
        </Link>
      </div>
      <div className='Header-User-state-dependency-con'>
        {isLogin?
        <>
          <div className='Header-Logout-con' onClick={e => handleIsLogin(e)}>
          로그아웃
          </div>
          <div className='Header-Profile-con'>
          프로필
          </div>
        </>
        :<>
          <div className='Header-Login-con'>
            <Modal modalType='Login' ModalName='로그인'/>
          </div>
          <div className='Header-Signup-con'>
           <Link to={'/signup'} >
            회원가입
           </Link>
          </div>
        </>
        }
      </div>
    </div>
  );
};

export default Header;