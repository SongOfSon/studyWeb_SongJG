import React from "react";
import { useNavigate } from 'react-router-dom';

const FindStudyGroup = () => {
  const sampleData = [
    { groupName: "JavaScript 스터디", 
      title: "자바스크립트를 함께 배워요!", 
      field: "프로그래밍", 
      members: "5/10", 
      joinable: true },
    { groupName: "수학 동아리", 
      title: "수학 문제 함께 풀어보아요", 
      field: "수학", 
      members: "6/6", 
      joinable: false },
    { groupName: "과학 동아리", 
      title: "과학 좋아하시는 분 구합니다!", 
      field: "과학", 
      members: "11/11", 
      joinable: false }
  ];

  const navigate = useNavigate("");
  

  return (
    <div className="StudyGroupTableCon">
      <h2>스터디 그룹 찾기</h2>
      <table className="StudyGroupTable">

        <thead>
          <tr className="HeadTableInSG">
            <th>그룹 이름</th>
            <th>제목</th>
            <th>관심 분야</th>
            <th>참여 인원</th>
            <th name="checkJoin">참여 가능 여부</th>
          </tr>
        </thead>

        <tbody>
          {sampleData.map((data, index) => (
            <tr key={index} id={`${index % 2 && index !== 0?'InsertLine':'NoLine'}`}>
              <td>{data.groupName}</td>
              <td>{data.title}</td>
              <td>{data.field}</td>
              <td>{data.members}</td>
              <td style={{textAlign:"center",}}>
                      {data.joinable ? 
                        <button 
                          onClick={(e)=>{navigate('/JoiningGruopList')}}
                          style={{
                            border:"0",
                            borderRadius:"10px",
                            backgroundColor:"greenyellow",
                            fontWeight:"bold",
                            width:"75px"
                          }}
                          >가능</button> : 
                        <button 
                          onClick={(e)=>{alert('현재 참여가 불가능 합니다')}}
                          style={{
                            border:"0",
                            borderRadius:"10px",
                            backgroundColor:"rgb(255, 52, 52)",
                            fontWeight:"bold",
                            width:"75px"
                          }}
                          >불가능</button>}</td>
            </tr>
          ))}
        </tbody>

      </table>
        <div className="StudyGroupTableConBottom">
          <div className="StudyGroupTableConBottomPagination">
          {'<'} 1 | 2 | 3 | 4 | 5 {'>'}
          </div>

            <button 
              type="submit" 
              onClick={e=>navigate("/createstudygroup")}
              style={{ 
                textAlign: 'center', 
                margin: '20px'
                }}>
              그룹 만들기
            </button>
        </div>
      </div>
  );
};

export default FindStudyGroup;
