// React import
import React from 'react';

// CSS import
import "./GroupModal.css"

const GroupModal = ( props ) => {
// data - only read
  const groupName = props.groupDataT[props.clickedModalNum].groupName;
  const groupInfo = props.groupDataT[props.clickedModalNum].groupInfo;
  const groupInterest = props.groupDataT[props.clickedModalNum].groupInterest;
  const maxMemberNum = Number(props.groupDataT[props.clickedModalNum].groupMaxMember);
  const currentMemberNum = Number(props.groupDataT[props.clickedModalNum].groupCurrentMember);
// Modal

// handle
 
// func
  const handleJoinGroup = (  ) => {
    console.log(props.clickedModalNum);
    if(!props.isLogin)
      return alert('로그인이 필요합니다');
    if(props.generalUserData[props.currentLoginUser.userNum].userJoinGroup.length >= 4)
      return alert('가입 가능한 그룹 수를 초과하였습니다');
    if(maxMemberNum === currentMemberNum){
      alert('참여 불가');
      props.closeModal();
    }else if(props.generalUserData[props.currentLoginUser.userNum].userJoinGroup.includes(props.groupDataT.groupId)){
      alert('현재 참여중');
      props.closeModal();
    }else if(maxMemberNum > currentMemberNum){
      const savedUserData = props.generalUserData;
      const savedGroupData = props.generalGroupData;

      savedUserData[props.currentLoginUser.userNum].userJoinGroup.push(props.groupDataT[props.clickedModalNum].groupId);

      savedGroupData[props.groupDataT[props.clickedModalNum].groupId].groupMamberList.push(props.currentLoginUser.userName);
      savedGroupData[props.groupDataT[props.clickedModalNum].groupId].groupCurrentMember++;
      props.setGeneralGroupData(savedGroupData);
      props.setGeneralUserData(savedUserData);
      alert('참여 완료');
      props.closeModal();
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
              onClick={() => handleJoinGroup()}>
              참여</button>
          </div>
      </div>
    </div>
  );
};

export default GroupModal;