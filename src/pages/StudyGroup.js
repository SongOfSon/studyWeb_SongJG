import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CustomPagination from "../components/CustomPagination";


const FindStudyGroup = ( props 
  /*{generalGroupData, setGeneralGroupData}*/ ) => {

// React hooks
  const nav = useNavigate("");

// Group Data
  const [groupData, setGroupData] = useState([{
    groupId : 0,
    groupName : '',
    groupTitle : '',
    groupInterest : '',
    groupMember : 0,
  }])
  const sampleData = props.generalGroupData;
  
// Pagination을 위한 변수
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  

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
          {sampleData.slice(offset, offset + limit).map((data, index) => (
            <tr key={index} id={`${index % 2 && index !== 0?'InsertLine':'NoLine'}`}>
              <td>{data.groupName}</td>
              <td>{data.groupTitle}</td>
              <td>{data.groupInterest}</td>
              <td>{data.groupMember} / 10</td>
              <td style={{textAlign:"center",}}>
                {data.joinable ? 
                  <button style={{border:"0",borderRadius:"10px",backgroundColor:"greenyellow",fontWeight:"bold",width:"75px" }}>
                    가능</button> : 
                  <button onClick={(e)=>{alert('현재 참여가 불가능 합니다')}} style={{ border:"0", borderRadius:"10px", backgroundColor:"rgb(255, 52, 52)", fontWeight:"bold", width:"75px"}}>
                    불가능</button>}</td>
            </tr>
          ))}
            
          </tbody>

      </table>
        <div className="StudyGroupTableConBottom">
          <div className="StudyGroupTableConBottomPagination">
          <CustomPagination total={sampleData.length} limit={limit} page={page} setPage={setPage}/>
          </div>
            <button 
              type="submit" 
              onClick={e=>nav("/createstudygroup")}
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
