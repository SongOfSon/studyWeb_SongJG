import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CustomPagination from "../components/CustomPagination";


const FindStudyGroup = ( props /*{generalGroupData, setGeneralGroupData}*/ ) => {
  const nav = useNavigate("");

  const [groupData, setGroupData] = useState([{
    groupId : 0,
    groupName : '',
    groupTitle : '',
    groupInterest : '',
    groupMember : 0,
  }])
  const sampleData = [
    { groupId: 1, groupName: "temp name 001", title: "temp title", field: "temp field", members: 10, joinable: true },
    { groupId: 2, groupName: "temp name 002", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 3, groupName: "temp name 003", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 4, groupName: "temp name 004", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 5, groupName: "temp name 005", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 6, groupName: "temp name 006", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 7, groupName: "temp name 007", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 8, groupName: "temp name 008", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 9, groupName: "temp name 009", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 10, groupName: "temp name 010", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 11, groupName: "temp name 011", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 12, groupName: "temp name 012", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 13, groupName: "temp name 013", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 14, groupName: "temp name 014", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 15, groupName: "temp name 015", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 16, groupName: "temp name 016", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 17, groupName: "temp name 017", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 18, groupName: "temp name 018", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 19, groupName: "temp name 019", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 20, groupName: "temp name 020", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 21, groupName: "temp name 021", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 22, groupName: "temp name 022", title: "temp title", field: "temp field", members: 1, joinable: true },
    { groupId: 23, groupName: "temp name 023", title: "temp title", field: "temp field", members: 1, joinable: true },
  ];
  const handleGroupData = () =>{
    props.setGeneralGroupDate(props.generalGroupData = groupData.groupId)
  }

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
              <td>{data.title}</td>
              <td>{data.field}</td>
              <td>{data.members} / 10</td>
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
