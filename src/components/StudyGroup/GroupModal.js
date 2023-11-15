import React from 'react';

const GroupModal = ( props ) => {
// data - only read
  const groupName = props.groupDataT[props.clickedModalNum].groupName;
  const groupInfo = props.groupDataT[props.clickedModalNum].groupInfo;
  const groupInterest = props.groupDataT[props.clickedModalNum].groupInterest;
  const maxMemberNum = Number(props.groupDataT[props.clickedModalNum].groupMaxMember);
  const currentMemberNum = Number(props.groupDataT[props.clickedModalNum].groupCurrentMember);
  const currentSelectGroup = props.currentClickedGroupNum(props.page, 0);
// Modal

// handle
 
// func
  const handleJoinGroup = ( id ) => {
    if(maxMemberNum === currentMemberNum){
        alert('참여 불가');
        props.closeModal();
    }else if(props.generalUserData[props.currentLoginUser.userNum].userJoinGroup.includes(currentSelectGroup)){
        console.log(currentSelectGroup);
        alert('현재 참여중');
        props.closeModal();
    }else if(maxMemberNum > currentMemberNum){
      console.log(props.generalUserData[props.currentLoginUser.userNum].userJoinGroup.includes(currentSelectGroup));
      console.log(props.idx);
        alert('참여 완료');
    }
  }

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
            그룹명 : {groupName}</div>
          <div className='Group-modal-body-content-top-groupInfo'>
            {groupInfo}</div>
          <div className='Group-modal-body-content-groupInterest'>
            관심분야 :  {groupInterest}</div>
          <div className='Group-modal-body-content-groupMamber'>
            인원 :  {currentMemberNum} / {maxMemberNum}</div>
          </div>
          <div className='Group-modal-body-footer'>
            <button 
              className='Group-modal-body-footer-joinGroup-btn'
              onClick={() => handleJoinGroup(props.idx)}>
              참여</button>
          </div>
      </div>
    </div>
  );
};

export default GroupModal;