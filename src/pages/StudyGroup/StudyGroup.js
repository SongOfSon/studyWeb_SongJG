import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CustomPagination from '../../components/CustomPagiantion/CustomPagination'
import GroupModal from "./GroupModal";

import './StudyGroup.css'


const StudyGroup = ( props ) => {

// React hooks
  const nav = useNavigate("");

// data
  const currentClickedGroupNum = (pagenationNum, currentId) =>{
    return ((pagenationNum - 1)*8 + currentId);  
  } 

// Modal
const [modalIsOpen, setModalIsOpen] = useState(false);
const openModal = (idx) => {
  document.body.style.overflow = "hidden"; // 스크롤 감춤
  setClickModalNum(idx);
  setModalIsOpen(true);
};
const closeModal = () => {
  document.body.style.overflow = "unset";
  setModalIsOpen(false);
};
const [clickedModalNum, setClickModalNum] = useState(0); 
 
// Pagination을 위한 변수
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

// handle
  const handleCreateGroup = () => {
    if( props.isLogin === true){
      nav("/creategroup")
    }else alert('로그인이 필요합니다');
  }

  const handleMaxMember = (idx) => {
    if(props.generalGroupData[idx].groupMaxMember === props.generalGroupData[idx].groupCurrentMember){
      return true; // Max
    }else return false; // None-max
  } 
  const handleCurrentJoinGroup = (idx) => {
    if(props.isLogin === false)
      return false;
    if(props.generalUserData[props.currentLoginUser.userNum].userJoinGroup.includes(props.generalGroupData[idx].groupId)){
      return true; // joined
    }else return false; // None-joined
  }

return (
  <div className="StudyGroup-wrapper">
    <div className="StudyGroup-wrapper-inner" >
      <div className="Group-Poster-inner-top">
                
      {props.generalGroupData.slice(offset, offset + limit).map((groupData, idx, groupDataT) => (
        <React.Fragment>
            {idx < 4 ?
            <div 
              key={groupData.id} 
              className="Group-Poster-body"
              onClick={() => openModal(idx)}>{console.log(groupDataT[idx].groupId)}
              <div className="Group-Poster-body-header">
                <div className="Group-Poster-body-header-groupId">
                  {groupData.groupId}</div>
                <div className="Group-Poster-body-header-groupName">
                  {groupData.groupName}</div>
              </div>
              <div className="Group-Poster-body-footer">
                <div className="Group-Poster-body-footer-interest">
                  {groupData.groupInterest}</div>
                <div 
                  className={props.handleMaxMember(currentClickedGroupNum(page,idx))?
                    "Group-Poster-body-footer-member-con-maxMem":
                    handleCurrentJoinGroup(currentClickedGroupNum(page,idx))?
                      "Group-Poster-body-footer-member-con-joined"
                      :"Group-Poster-body-footer-member-con"}>
                  <div className="Group-Poster-body-footer-member">
                    {groupData.groupCurrentMember} / {groupData.groupMaxMember}</div>
                </div>
              </div>
            </div>:null}
            {modalIsOpen?
            <GroupModal
              groupData={groupData}
              groupDataT={groupDataT}
              page={page}
              idx={idx}
              clickedModalNum={clickedModalNum}
              handleMaxMember={handleMaxMember}
              currentClickedGroupNum={currentClickedGroupNum}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              isLogin={props.isLogin}
              currentLoginUser={props.currentLoginUser}
              generalUserData={props.generalUserData}
              setGeneralUserData={props.setGeneralUserData}
              generalGroupData={props.generalGroupData}
              setGeneralGroupData={props.setGeneralGroupData}
            />:<></>}
          </React.Fragment>
        ))}
          </div>
      <div className="Group-Poster-inner-bottom">
      {props.generalGroupData.slice(offset, offset + limit).map((groupData, idx, groupDataT) => (
        <React.Fragment>
          {!(idx < 4 )?
            <div className="Group-Poster-body" onClick={() => openModal(idx)}>
              <div className="Group-Poster-body-header">
                <div className="Group-Poster-body-header-groupId">
                  {groupData.groupId}</div>
                <div className="Group-Poster-body-header-groupName">
                  {groupData.groupName}</div>
              </div>
              <div className="Group-Poster-body-footer">
                <div className="Group-Poster-body-footer-interest">
                  {groupData.groupInterest}</div>
                  <div 
                    className={props.handleMaxMember(currentClickedGroupNum(page,idx))?
                    "Group-Poster-body-footer-member-con-maxMem":
                    handleCurrentJoinGroup(currentClickedGroupNum(page,idx))?
                    "Group-Poster-body-footer-member-con-joined"
                      :"Group-Poster-body-footer-member-con"}>
                  <div className="Group-Poster-body-footer-member">
                    {groupData.groupCurrentMember} / {groupData.groupMaxMember}</div>
                </div>
              </div>
            </div>
            :null}
        </React.Fragment>
      ))}</div>
    </div>
    <div className="StudyGroup-footer">
      <div className="StudyGroup-footer-pagination">
        <CustomPagination 
          total={props.generalGroupData.length} 
          limit={limit} 
          page={page} 
          setPage={setPage}/>
      </div>
      <div className="StudyGroup-footer-create-buttons">
        <button 
        className="StudyGroup-footer-create-button"
        type="submit" 
        onClick={handleCreateGroup}>
        그룹 만들기
        </button>
      </div>
    </div>
  </div>
  );
};

export default StudyGroup;