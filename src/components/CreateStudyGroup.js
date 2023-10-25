import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';

const CreateStudyGroup = ( props ) => {

  const [groupId , setGourpId] = useState('');
  const [groupName , setGroupName] = useState('');
  const [groupTitle , setGroupTitle] = useState('');
  const [groupContent, setGroupContent] = useState('');
  const [groupInterest, setGroupInterest] = useState('');
  const [groupMemberNum , setGroupMemberNum] = useState('');

  const fields = ["국어", "수학", "영어", "과학", "역사", "프로그래밍", "공무원", "자격증"];
  const memberCount = [ 1,2,3,4,5,6,7,8,9,10 ];
  const navigate = useNavigate('');

  //handle
  const handleGroupId = props => {
    let idNum = props.generalGroupData.length
    return idNum + 1;
  };
  const handleGroupName  = e => setGroupName(e.target.value);
  const handleGroupTitle  = e => setGroupTitle(e.target.value);
  const handleGroupContent  = e => setGroupContent(e.target.value);
  const handleGroupInterest  = e => setGroupInterest(e.target.value);
  const handleGroupMemberNum = e => setGroupMemberNum(e.target.value);
  const handleCreateGroup = (e) => {
    props.setGeneralGroupData([...props.generalGroupData, {
      groupId: handleGroupId,
      groupName:groupName,
      groupTitle:groupTitle,
      groupContent:groupContent,
      groupInterest:groupInterest,
      groupMemberNum:groupMemberNum,
    }])
  }

  return (
    <div className="CreateStudyGroupCon">
      <h2>스터디 그룹 만들기</h2>
      <form onSubmit={handleCreateGroup}>
        <table>
          <tr>
            <td><label for="createGroupName">그룹 이름</label></td>
            <td><input id="createGroupName" type="text" onChange={handleGroupName} value={groupName} placeholder="그룹 이름을 입력하세요" maxLength={20}/></td>
          </tr>

          <tr>
            <td><label for="createGroupTitle">제목</label></td>
            <td><input id="createGroupTitle" type="text" onChange={handleGroupTitle} value={groupTitle} placeholder="제목을 입력하세요" maxLength={20}/></td>
          </tr>

          <tr>
            <td><label for="createGroupIntro">그룹 소개글</label></td>
            <td><input id="createGroupIntro" type="text" onChange={handleGroupContent} value={groupContent} placeholder="그룹을 소개하는 글을 작성하세요" maxLength={200}/></td>
          </tr>

          <tr>
            <td><label>관심 분야</label></td>
            <td><select value={groupInterest} onChange={handleGroupInterest}>  
                {fields.map((field, index) => (
                  <option key={index}>
                    {field}
                  </option>
                ))}
              </select>
            </td>
          </tr>

          <tr>
          <td><label>인원 설정</label></td>
            <td>
              <select value={groupMemberNum} onChange={handleGroupMemberNum}> 
                {memberCount.map((memberNum, index) => (
                  <option key={index}>
                    {memberNum} 명
                  </option>
              ))}
              </select>
            </td>
          </tr>
      </table>

      <button type="submit">그룹 만들기</button>
    </form>
  </div>
  );
};

export default CreateStudyGroup;
