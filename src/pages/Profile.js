import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import MembershipPay from "../Components/Profile/MembershipPay";

const Profile = ( props ) => {
// React hook
const navigate = useNavigate('');

// data - only raed
  const userNum =  Number(props.currentLoginUser.userNum)
  const userName = props.currentLoginUser.userName;
  const userId = props.currentLoginUser.userId;
  const timerData = props.generalTimerData;  
  const userData = props.generalUserData[userNum]

// userData
  const [memberShipTime, setMemberShipTime] = useState(90061);
  const [userMileage, setUserMileage] = useState(0);
  const [userInterst, setUserInterest] = useState(null);

  const interstList = [
    {value:null, name: '선택'},
    {value:"회계사", name : "회계사"},
    {value:"자산 운용사", name : "자산 운용사"},
    {value:"토목공학 기술자", name : "토목공학 기술자"},
    {value:"공인중개사", name : "공인중개사"},
    {value:"세무사", name : "세무사"},
    {value:"관세사", name : "관세사"},
    {value:"공무원", name : "공무원"},
    {value:"자격증", name : "자격증"},
  ]

//handle
  const [visableInter, setVisableInter] = useState(false);
  const handleVisableInter = e => setVisableInter(!visableInter);

  const handleInterest = e => setUserInterest(e.target.value);
  const allStudyTime = () => {
    let studyTimeSum = 0;
    for(let i = 0; i< timerData.length; i++){
      if(props.generalTimerData[i].userNum === userNum){
        studyTimeSum += props.generalTimerData[i].studyTime;
      }
    }
    const hours = Math.floor(studyTimeSum / 3600);
    const minutes = Math.floor((studyTimeSum % 3600) / 60);
    const seconds = studyTimeSum % 60;
    return `${String(hours)}시간 ${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(2, '0')} 초`
  };

  const handleMemberShipTime = () => {
    const days = Math.floor(memberShipTime / 86400);
    const hours = Math.floor((memberShipTime % 60));
    const minutes = Math.floor((memberShipTime % 3600) / 60);
    return `${String(days)}일 ${String(hours).padStart(2, '0')}시간 ${String(minutes).padStart(2, '0')}분`
  }

  const handleGroupQuit = (groupId) =>{
    let savedData = props.generalUserData;
    let filtered = savedData[userNum].userJoinGroup.filter(id => id !== groupId);
    savedData[userNum].userJoinGroup = filtered;
    props.setGeneralUserData(savedData);

    props.changeGroupMember(groupId);
    navigate('/Profile');
  }

// UI
return (
  <div className="Profile-wrapper">
  {props.isLogin?
  <>
    <div className="Profile-header">
      <h2> 
        <div className="Profile-userName-box"> {userName} </div> 
        님의 정보 입니다. 
      </h2>
      <div className="Profile-membership">
        <MembershipPay setMemberShipTime={setMemberShipTime}/>
        <div className="Profile-membership-time">잔여 시간 <br/>{handleMemberShipTime()}</div>
      </div>
    </div>
    <table className="ClientInfoTable">
      <tr className="ClientInfoTable-timer">
        {/* 사용자명 + 학습한 시간 */}
        <td className="makeLine" colSpan="2">
          {userName} 님의 학습한 시간</td>
        <td></td>
      </tr>
      <tr>
        {/* 학습한 시간 표시 */}   
       <div className="dataViewLine"> 
        {allStudyTime()}</div>
      </tr>
      <tr>
        <td className="makeLine">보유 마일리지</td>
        <td className="makeLine">
          <button >
            적립 내역 확인하기</button></td>
      </tr>
      <tr>    {/* 보유 마일리지 표시 */}
        <div className="dataViewLine">{userMileage} Point</div>
      </tr>
      <tr>
        <td className="makeLine">관심 분야</td>
        <td className="makeLine"><button onClick={handleVisableInter}>관심분야 수정하기</button></td>
      </tr>
      <tr>    {/* 사용자가 등록한 관심분야 표시 */}
        <div className="dataViewLine"> 
          {!visableInter && <td>{userInterst}</td> }
          {visableInter && 
            <select 
              onChange={handleInterest}
              className= "selectInterstBox">
                {interstList.map((option) => 
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>)}
            </select>}
          {visableInter && 
          <button className="selectBoxBtn" onClick={handleVisableInter}>
          등록하기
          </button>}
          </div>
      </tr>
          <tr>
            <td className="makeLine">현재 가입한 스터디 그룹</td>
            <td className="makeLine">
              <button onClick={(e)=> navigate('/studygroup')}>
                스터디 그룹 찾기</button></td>
          </tr>
      <tr>    {/* 사용자가 가입한 스터디 그룹 표시*/}
        <div className="dataViewLine-studyGroup">
          {props.generalUserData[userNum].userJoinGroup.length > 0?
            props.generalUserData[props.currentLoginUser.userNum].userJoinGroup.map((group, idx, groupT) => (
            <div className="Profile-group-view">
                <div className="Profile-group-view-groupName">
                  {props.generalGroupData[group].groupName}</div>
                <div className="Profile-group-view-bottom">
                  <div className="Profile-group-view-groupMember">
                    {props.generalGroupData[group].groupCurrentMember} / {props.generalGroupData[group].groupMaxMember}</div>
                  <button 
                    className="Profile-group-view-quitBtn" 
                    onClick={e=>handleGroupQuit(group, props.page)}>X</button>
                </div>
            </div>
            )):
          <></>}
        </div>
      </tr>
    </table>
    </>:navigate('/')}
  </div>
)
}

export default Profile;