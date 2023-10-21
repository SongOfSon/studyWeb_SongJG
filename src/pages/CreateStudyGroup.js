import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';

const CreateStudyGroup = ( ) => {

  const fields = ["국어", "수학", "영어", "과학", "역사", "프로그래밍", "공무원", "자격증"];
  const memberCount = [ 1,2,3,4,5,6,7,8,9,10 ];
  const navigate = useNavigate('');

  return (
    <div className="CreateStudyGroupCon">
      <h2>스터디 그룹 만들기</h2>
      <form>
        <table>
          <tr>
            <td><label for="createGroupName">그룹 이름</label></td>
            <td><input id="createGroupName" type="text" placeholder="그룹 이름을 입력하세요" maxLength={20}/></td>
          </tr>

          <tr>
            <td><label for="createGroupTitle">제목</label></td>
            <td><input id="createGroupTitle" type="text" placeholder="제목을 입력하세요" maxLength={20}/></td>
          </tr>

          <tr>
            <td><label for="createGroupIntro">그룹 소개글</label></td>
            <td><input id="createGroupIntro" type="text" placeholder="그룹을 소개하는 글을 작성하세요" maxLength={200}/></td>
          </tr>

          <tr>
            <td><label>관심 분야</label></td>
            <td><select>  
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
              <select> 
                {memberCount.map((memberNum, index) => (
                  <option key={index}>
                    {memberNum} 명
                  </option>
              ))}
              </select>
            </td>
          </tr>
      </table>

      <button 
        type="submit" 
        onClick={ e => navigate("/studygroup")}>
          그룹 만들기
      </button>
    </form>
  </div>
  );
};

export default CreateStudyGroup;
