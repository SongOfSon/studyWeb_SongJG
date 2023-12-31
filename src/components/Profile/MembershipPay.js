// React import 
import React, { useState }  from 'react';

// custom components import
import IamportPayment from "../Common/IamportPayment";

// CSS import
import "./MembershipPay.css"

const MembershipPay = (props) => {
// Modal
const [modalIsOpen, setModalIsOpen] = useState(false);
const openModal = (e) => {
  document.body.style.overflow = "hidden"; // 스크롤 감춤
  setModalIsOpen(true);
};
const closeModal = (e) => {
  document.body.style.overflow = "unset";
  setModalIsOpen(false);
};


// UI
  return (
    <>
      <div>
          <button className="membership-button" onClick={(e)=>openModal(e)}>회원권</button>
      </div>
      {modalIsOpen?
        <div className='Membership-madal-background'>
          <div className='Membership-madal-body'>
            <div className='Membership-madal-header'>
              <button className='Membership-modal-close-Btn' 
                onClick={closeModal}>X</button>
            </div>
            <div className='Membership-madal-content'>
              <img className='Membership-madal-productImg'
                src={process.env.PUBLIC_URL + "./productImg/ticket.png"} alt='membershipticket'/>
              <div className='Membership-madal-content-bottom'>
                <div className='Membership-madal-product'>Membership 30days + 마일리지</div>
                <div className='Membership-madal-price'>15000원</div>
              </div>
              <div className='Membership-madal-bottom'>
                <IamportPayment 
                  totalPrice={15000}/>
              </div>
            </div>
          </div>
        </div>
      :<></>}
    </>
  );
};

export default MembershipPay;