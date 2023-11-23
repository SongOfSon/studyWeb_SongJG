import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateGroup = ( props ) => {
// React hooks
  const navigate = useNavigate();
// StudyGroup Data
  const [groupName, setGroupName] = useState('');
  const [groupInfo, setGroupInfo] = useState('');
  const [groupInterest, setGroupInterest] = useState('선택해주세요');
  const userName = props.currentLoginUser.userName;
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
  const [groupMaxMember, setGroupMaxMember] = useState('');

  const newGroupData =
    { 
      groupId: props.generalGroupData.at(-1).groupId + 1,
      groupName: groupName,
      groupInfo: groupInfo,
      groupInterest: groupInterest,
      groupMaxMember: groupMaxMember,
      groupCurrentMember: 1,
      groupMaster: userName,
      groupMamberList:[userName,],
      joinable: true,
    };
// handle
  const handleGroupName = e => setGroupName(e.target.value);
  const handleGroupInfo = e => setGroupInfo(e.target.value);
  const handleGroupInterest = e => setGroupInterest(e.target.value);
  const handleGroupMaxMember = e => setGroupMaxMember(e.target.value);

  const createNewGroup = () =>{
    if(props.isLogin === false){
      alert('로그인이 필요한 서비스 입니다');
      return navigate('/');
    }
    if(groupName !== null){
      if(groupInfo !== null){
        if(groupInterest !== null){
          if(groupMaxMember !== null){
            if(groupMaxMember <= 10 && groupMaxMember > 0){
              let currentUserDataCopied = props.generalUserData;
              currentUserDataCopied[props.currentLoginUser.userNum].userJoinGroup.push(newGroupData.groupId);
              props.setGeneralUserData(currentUserDataCopied);
              props.setGeneralGroupData([...props.generalGroupData, newGroupData]);
              return navigate('/StudyGroup');
            }alert('인원수는 1 ~ 10 사이에서 입력해주세요');
              return;
          }alert('인원수를 입력해주세요');
            return;
        }alert('관심분야를 설정해주세요');
         return;
      }alert('그룹 소개글을 입력해주세요');
        return;
    }alert('그룹명을 입력해주세요');
      return;
  };

// UI
  return (
    <div 
      className="Create-group-wrapper">
      <h2 className="Create-group-header">새 그룹 만들기</h2>
      <form 
        className="Create-group-form"
        onSubmit={createNewGroup}>
          <div className="Create-group-input-con">
            <input 
              className="Create-group-name-input" 
              type="text"
              value={groupName} 
              onChange={e => handleGroupName(e)} 
              placeholder="그룹명을 입력하세요"/>
            <textarea 
              className="Create-group-info-input" 
              type="textarea"
              value={groupInfo} 
              onChange={e => handleGroupInfo(e)} 
              placeholder="그룹 소개글을 입력하세요"/>
            <div className='Create-group-interest-select-con'>
              <label>관심분야</label>
              <select 
                className="Create-group-interest-select"
                value={groupInterest} 
                onChange={e => handleGroupInterest(e)}>
                {interstList.map((param) => 
                <option 
                  value={param.value} 
                  key={param.value}>
                    {param.name}
                  </option>)}
              </select>
            </div>
            <div className='Create-group-max-member-input-con'>
              <input 
                className={groupMaxMember?'Create-group-max-member-input-in':'Create-group-max-member-input-none'}
                type='text'
                value={groupMaxMember}
                onChange={e => handleGroupMaxMember(e)}
                placeholder='인원 수를 적어주세요'/>명
            </div>
            <div className='Create-group-button-con'>
              <button type="submit">등록</button>
            </div>
          </div>
      </form>
    </div>
  );
};

export default CreateGroup;