// React import
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS import
import './CurrentGroup.css';
import moment from 'moment';

const CurrentGroup = ( props ) => {
// React hook
  const nav = useNavigate();
// value
  const [clickedGroupNum, setClickedGroupNum] = useState(0);
  const [defaultShowGroup, setDefalutShowGroup] = useState(false);
  const [checkGroupMaster, setCheckGroupMaster] = useState(false);
// props data
  const currentUserName = props.currentLoginUser.userName;
  const currentUserJoinedGroupList = props.generalUserData[props.currentLoginUser.userNum].userJoinGroup;
  const date = new Date();
  const dateFormat = moment(date).format('YYYY-MM-DD');

  const currentGroupTodayTime = ( Member, returnType ) => {
    let time = 0;
    if(returnType === 'today'){
      for(let i = 0 ; i < props.generalTimerData.length ; i++){
        if(Member === props.generalTimerData[i].userName){
          if(dateFormat === props.generalTimerData[i].studyDate){
            time = time + props.generalTimerData[i].studyTime
          }
        }
      }
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }else if(returnType === 'all'){
      for(let i = 0 ; i < props.generalTimerData.length ; i++){
        if(Member === props.generalTimerData[i].userName){
          time = time + props.generalTimerData[i].studyTime
        }
      }
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }

  const todayBest = () =>{
    let todayBestGroupMember = '';
    let compareA = {
      userName : '',
      time:0,
    };
    let compareB = {
      userName : '',
      time:0,
    };

    for(let memIdx = 0 ; memIdx < props.generalGroupData.length ; memIdx++){
      for(let timeIdx = 0 ; timeIdx < props.generalTimerData.length ; timeIdx++){
        if(props.generalGroupData[clickedGroupNum].groupMamberList.length < 2){
          return '멤버 부족'
        }
        if(props.generalGroupData[clickedGroupNum].groupMamberList[memIdx] === props.generalTimerData[timeIdx].userName){
          if(props.generalTimerData[timeIdx].studyDate === moment(date).format('YYYY-MM-DD')){
            compareA.userName = props.generalGroupData[clickedGroupNum].groupMamberList[memIdx];
            compareA.time += props.generalTimerData[timeIdx].studyTime;
            }
          }
        }
        if( compareA.time > compareB.time ){
          compareB = compareA;
          compareA = {
            userName : '',
            time:0,
          };
        }else if(compareA.time <= compareB.time){
          
        }
      }todayBestGroupMember = compareB.userName;
    if(compareB.time < 3600){
      return '시간 부족'
    }else return  `${todayBestGroupMember} 님`;
  }
  const whatThisWeek = (type) =>{
    const tempDate = new Date();
    const thisWeekStart = tempDate.setDate(tempDate.getDate() - tempDate.getDay());
    const thisWeekEnd = tempDate.setDate(tempDate.getDate() +6);
    if(type === 'start'){
      return moment(thisWeekStart).format('YYYY-MM-DD');
    }else if(type === 'end'){
      return moment(thisWeekEnd).format('YYYY-MM-DD');
    }
  }
  const weekBest = () => {
    let todayBestGroupMember = '';
    let compareA = {
      userName : '',
      time:0,
    };
    let compareB = {
      userName : '',
      time:0,
    };
    for(let memIdx = 0 ; memIdx < props.generalGroupData.length ; memIdx++){
      compareA.userName = props.generalGroupData[clickedGroupNum].groupMamberList[memIdx];

      for(let timeIdx = 0 ; timeIdx < props.generalTimerData.length ; timeIdx++){
        if(props.generalGroupData[clickedGroupNum].groupMamberList.length < 2){
          return '멤버 부족'
        }
        if(props.generalGroupData[clickedGroupNum].groupMamberList[memIdx] === props.generalTimerData[timeIdx].userName){
          if(props.generalTimerData[timeIdx].studyDate >= whatThisWeek('start') &&
             props.generalTimerData[timeIdx].studyDate <= whatThisWeek('end') ){
              compareA.time = compareA.time + Number(props.generalTimerData[timeIdx].studyTime);
            }
          }
        }
        if( compareA.time > compareB.time ){
          compareB = {
            userName : compareA.userName,
            time:compareA.time,
          };
          compareA = {
            userName : '',
            time:0,
          };
        }else if(compareA.time <= compareB.time){
          
        }
      }todayBestGroupMember = compareB.userName;
    if(compareB.time < 3600){
      return '시간 부족'
    }else return `${todayBestGroupMember} 님`;
  }
  const monthBest = () =>{
    let monthBestGroupMember = '';
    let compareA = {
      userName : '',
      time:0,
    };
    let compareB = {
      userName : '',
      time:0,
    };

    for(let memIdx = 0 ; memIdx < props.generalGroupData.length ; memIdx++){
      compareA.userName = props.generalGroupData[clickedGroupNum].groupMamberList[memIdx];

      for(let timeIdx = 0 ; timeIdx < props.generalTimerData.length ; timeIdx++){
        if(props.generalGroupData[clickedGroupNum].groupMamberList.length < 2){
          return '멤버 부족'
        }
        if(props.generalGroupData[clickedGroupNum].groupMamberList[memIdx] === props.generalTimerData[timeIdx].userName){
          if(props.generalTimerData[timeIdx].studyDate.slice(0, 7) === moment(date).format('YYYY-MM')){
            compareA.time = compareA.time + Number(props.generalTimerData[timeIdx].studyTime);
            }
          }
        }
        if( compareA.time > compareB.time ){
          compareB = {
            userName : compareA.userName,
            time : compareA.time,
          };
        }
        compareA = {
          userName : '',
          time:0,
        }
      }monthBestGroupMember = compareB.userName;
    if(compareB.time < 3600){
      return '시간 부족'
    }else return `${monthBestGroupMember} 님`;
  }

  const handleGroupQuit = (groupId) =>{
    let savedUserData = props.generalUserData;
    let savedGroupData = props.generalGroupData;
    if(props.generalUserData[props.currentLoginUser.userNum].userJoinGroup.includes(groupId)){
    if(currentUserName === props.generalGroupData[groupId].groupMaster){
      if(props.generalGroupData[groupId].groupCurrentMember !== 1){
        return alert('그룹장은 그룹원이 없거나 그룹장이 아닐 때 탈퇴 가능 합니다');
      }else if(savedGroupData[groupId].groupCurrentMember === 1){
        let filteredGroup = savedGroupData.filter( Id => Id.groupId !== groupId);
        props.setGeneralGroupData(filteredGroup);
        return alert('그룹이 삭제 되었습니다');
        }
      }
      /* 유저가 가진 그룹 값 삭제 */
      let filteredUser = savedUserData[props.currentLoginUser.userNum].userJoinGroup.filter(id => id !== groupId);
      savedUserData[props.currentLoginUser.userNum].userJoinGroup = filteredUser;
      props.setGeneralUserData(savedUserData);

      /* 그룹 데이터에서 해당 그룹과 현재 유저의 연결 삭제 */
      let filteredGroup = savedGroupData[groupId].groupMamberList.filter(user => user !== currentUserName);
      let filterdMember = savedGroupData[groupId].groupCurrentMember - 1; 
      savedGroupData[groupId].groupMamberList = filteredGroup;
      savedGroupData[groupId].groupCurrentMember = filterdMember;
      props.setGeneralGroupData(savedGroupData);
      alert('탈퇴 완료 되었습니다');
      nav("/currentgroup");}
      else return alert('가입한 그룹이 없습니다');
  };

  const handleGroupMaster = (groupId) =>{
    if(props.generalGroupData[groupId].groupCurrentMember === 1){
      alert('그룹장을 받을 그룹원이 없습니다');
    }else if(currentUserName !== props.generalGroupData[groupId].groupMaster){
      alert('그룹장만 그룹장을 넘길 수 있습니다');
    }
    else{
      setCheckGroupMaster(!checkGroupMaster);
    }
  }
  const makeGroupMaster = (groupId, groupMember) =>{
    let savedGroupData = props.generalGroupData;
    let savedGroupMaster = savedGroupData[groupId].groupMaster;
    savedGroupMaster = groupMember;
    savedGroupData[groupId].groupMaster = savedGroupMaster;
    props.setGeneralGroupData(savedGroupData);
    setCheckGroupMaster(false);
    nav('/currentgroup');
  }

  return (
    <>
    {props.isLogin?
    <div className='CurrentGroup-wrapper'>
        <div className='CurrentGroup-group-list'>
          <div className='CurrentGroup-group-list-top'>
            <div className='CurrentGroup-group-list-userName'>
              {'< '}{currentUserName}{' >'}
            </div>
            <div className='CurrentGroup-group-list-userName-side'>
              님의 가입 목록
            </div>
          </div>
          <div className='CurrentGroup-group-list-bottom'>
            {currentUserJoinedGroupList.map(( groupNum, idx, groupData)=>(
                props.generalGroupData.map(( generalGroup, idxP, generalGroupData) =>(
                  generalGroup.groupId === groupNum?
                  <div 
                    className='CurrentGroup-group-list-group-name'
                    onClick={()=>{setClickedGroupNum(groupNum);setDefalutShowGroup(true)}}>
                      {generalGroup.groupName}
                  </div>:<></>
                  ))
              ))}
          </div>
        </div>
        <div className='CurrentGroup-group-info'>
          <div className='CurrentGroup-group-members-con'>
        {props.generalUserData[props.currentLoginUser.userNum].userJoinGroup.length !== 0?
          defaultShowGroup !== false?
            <>
              {props.generalGroupData.map(( generalGroup, idx, generalGroupData) =>(
                generalGroup.groupId === clickedGroupNum?
                <div className={
                  props.currentLoginUser.userName === generalGroup.groupMaster?
                  'CurrentGroup-group-master-my-con'
                  :'CurrentGroup-group-master-con'}>
                  <div className='CurrentGroup-group-master-name-con'>
                    <div className='CurrentGroup-group-master-name-right'>
                      그룹장</div>
                    <div className='CurrentGroup-group-master-name-left'>
                      {generalGroup.groupMaster} 님</div>
                  </div>
                  <div className='CurrentGroup-group-master-today-time-con'>
                    <div className='CurrentGroup-group-master-today-time-right'>
                      오늘 학습한 시간  </div>
                    <div className='CurrentGroup-group-master-today-time-left'>
                      {currentGroupTodayTime(generalGroup.groupMaster, 'today')}</div>
                  </div>
                  <div className='CurrentGroup-group-master-all-time-con'>
                    <div className='CurrentGroup-group-master-all-time-right'>
                      총 학습한 시간  </div>
                    <div className='CurrentGroup-group-master-all-time-left'>
                      {currentGroupTodayTime(generalGroup.groupMaster, 'all')}</div>
                  </div>
                </div>:<></>))}
                <div className='CurrentGroup-group-best-today-member-con'>
                  <div className='CurrentGroup-group-best-today-member-p'>금일 최고</div>
                  <div className='CurrentGroup-group-best-today-member-data'>{todayBest()}</div>
                </div>
                <div className='CurrentGroup-group-best-week-member-con'>
                  <div className='CurrentGroup-group-best-today-member-p'>금주 최고</div>
                  <div className='CurrentGroup-group-best-today-member-data'>{weekBest()}</div>
                </div>
                <div className='CurrentGroup-group-best-month-member-con'>
                  <div className='CurrentGroup-group-best-today-member-p'>금월 최고</div>
                  <div className='CurrentGroup-group-best-today-member-data'>{monthBest()}</div>
                </div>
              <div className='CurrentGroup-group-member-con'>
                {props.generalGroupData.map(( generalGroup, idx, generalGroupData) =>(
                  generalGroup.groupId === clickedGroupNum?
                    generalGroup.groupMamberList.map((groupMember, idx, ) =>
                    (groupMember !== generalGroup.groupMaster?
                      <div 
                        className={
                          props.currentLoginUser.userName === groupMember?
                        'CurrentGroup-group-member-my-con'
                        :'CurrentGroup-group-member-info-con'}>
                      {checkGroupMaster?
                        <button 
                          className='CurrentGroup-group-member-to-master'
                          onClick={()=>makeGroupMaster(generalGroup.groupId, groupMember)}/>:<></>}
                        <div 
                          className='CurrentGroup-group-member-name-con'>
                          <div className='CurrentGroup-group-member-name-right'>
                            그룹원</div>
                          <div className='CurrentGroup-group-member-name-left'>
                            {groupMember} 님</div>
                        </div>
                        <div className='CurrentGroup-group-member-today-time-con'>
                          <div className='CurrentGroup-group-member-today-time-right'>
                            오늘 학습한 시간</div>
                          <div className='CurrentGroup-group-member-today-time-left'>
                            {currentGroupTodayTime(groupMember, 'today')}</div>
                        </div>
                        <div className='CurrentGroup-group-member-all-time-con'>
                          <div className='CurrentGroup-group-member-all-time-right'>
                            총 학습한 시간</div>
                          <div className='CurrentGroup-group-member-all-time-left'>
                            {currentGroupTodayTime(groupMember, 'all')}</div>
                        </div>
                      </div>
                  :<></>)):<></>))}
            </div>
          </>:
            <div className='CurrentGroup-group-info-no-show-con'>
              <div className='CurrentGroup-group-info-no-show'>
                목록에서 그룹을 선택해 주세요
              </div>
            </div>
          :<div className='CurrentGroup-group-info-no-show-con'>
          <div className='CurrentGroup-group-info-no-show'>
            가입한 그룹이 없습니다
          </div>
        </div>
        }
        </div>
        <div className='CurrentGroup-group-info-bottom'>
          <button
            className='CurrentGroup-group-info-bottom-handle-group-master'
            onClick={()=>handleGroupMaster(clickedGroupNum)}>
            그룹장 넘기기
          </button>
          <button 
            className='CurrentGroup-group-info-bottom-handle-group-exit'
            onClick={()=>handleGroupQuit(clickedGroupNum)}>
            탈퇴
          </button>
        </div>
      </div>
    </div>
    :
    <></>
    }
    </>
  );
};

export default CurrentGroup;