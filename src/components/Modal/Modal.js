// React hook
import React, { useState } from 'react';

// CSS import
import './Modal.css'

const Modal = ( { modalType, ModalName} ) => {
// React
  const [isModalOpen, setIsModalOpen] = useState(false);

// Handle
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
// UI
  return (
    <>
    <button 
      className='Modal-Outter-button'
      onClick={e=>handleOpenModal()}>
        {ModalName}</button>
    {isModalOpen?
    <div className='Modal-background'>
      {modalType === 'Login'?
        <div className='Modal-mainbody'>
          <div className='Modal-header'>
            <div className='Modal-close-button-con'>
            <button 
              className='Modal-close-button'
              onClick={e=>handleCloseModal()}>
                X</button></div>
            <img 
              className='Modal-Logoimg'
              src={process.env.PUBLIC_URL + "./Logo/logo.png"} 
              alt='logo-img'/>
          </div>
          <div className='Modal-body'>
            <div className='Modal-ID-input-con'>
              <label htmlFor='userID'>
                ID
              </label>
              <input
                id='userID' 
                name='userID'
                className='Modal-Login-ID-input' 
                type='text'/>
            </div>
            <div className='Modal-PW-input-con'>
              <label htmlFor='userPW'>
                PW
              </label>
              <input 
                id='userPW'
                name='userPW'
                className='Modal-Login-PW-input' 
                type='password'/>
            </div>
            <button
              className='Modal-Login-button'>
                로그인</button>
          </div>
          <div className='Modal-Login-footer'>
            <button>ID 찾기</button>
            <button>PW 찾기</button>
            <button>회원가입</button>
          </div>
        </div>:
      modalType === 'showBoard'?
        <div className='Modal-mainbody'>
          <div className='Modal-header'>
            <button onClick={e=>handleCloseModal()}>
              X
            </button>
          </div>
          <div className='Modal-body'>

          </div>
          <div className='Modal-footer'>

          </div>
        </div>:
      modalType === 'showGroup'?
        <div className='Modal-mainbody'>
          <div className='Modal-header'>
            <button onClick={e=>handleCloseModal()}>
              X
            </button>
          </div>
          <div className='Modal-body'>

          </div>
          <div className='Modal-footer'>

          </div>
        </div>:
      <div className='Modal-mainbody'>
        <div className='Modal-header'>
          <button onClick={e=>handleCloseModal()}>
            X
          </button>
        </div>
        <div className='Modal-body'>

        </div>
        <div className='Modal-footer'>

        </div>
      </div>
      }
    </div>
    :<></>
    }</>
  );
};

export default Modal;