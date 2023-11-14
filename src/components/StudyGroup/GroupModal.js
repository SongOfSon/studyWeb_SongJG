import React from 'react';

const GroupModal = ( props ) => {
// data
  
// Modal

// handle
 
// func

// UI
  return (
    <div className="Group-modal-background">
      <div className="Group-modal-body">
        <div className="Group-modal-body-header">
          <button className="Group-modal-close-button" 
            onClick={()=>props.closeModal()}>
              X</button>
        </div>
        <div className='Group-modal-body-content'>
          <div className='Group-modal-body-content-top-groupName'>
            {props.groupDataT[props.clickedModalNum].groupName}</div>
          <div className='Group-modal-body-content-top-groupInfo'>
            {props.groupDataT[props.clickedModalNum].groupInfo}</div>
        </div>
        <div className='Group-modal-body-footer'>
          <div className='Group-modal-body-footer-groupInterest'>
            {props.groupDataT[props.clickedModalNum].groupInterest}</div>
          <div className='Group-modal-body-footer-groupMamber'>
            {props.groupDataT[props.clickedModalNum].groupCurrentMember} / {props.groupDataT[props.clickedModalNum].groupMaxMember}</div>
        </div>
      </div>
    </div>
  );
};

export default GroupModal;