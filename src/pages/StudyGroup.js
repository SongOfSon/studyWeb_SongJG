import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CustomPagination from "../Components/CustomPagination";


const StudyGroup = ( props ) => {

// React hooks
  const nav = useNavigate("");

// Group Data
  const [groupData, setGroupData] = useState([{
    groupId: 0,
    groupName: "",
    groupInfo: "",
    groupInterest: "",
    groupMaxMember: "",
    groupCurrentMember: 0,
    joinable: false
  }])
  const sampleData = props.generalGroupData;
  
// Pagination을 위한 변수
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  

  return (
    <div className="StudyGroup-wrapper">
      <table className="StudyGroup-table">
        <thead className="StudyGroup-table-header">
          <tr className="StudyGroup-table-header-tr">
            <th className="StudyGroup-table-header-group-name">그룹 이름</th>
            <th className="StudyGroup-table-header-group-interest">관심 분야</th>
            <th className="StudyGroup-table-header-group-member">참여 인원</th>
            <th className="StudyGroup-table-header-group-checkJoin">참여</th>
          </tr>
        </thead>

        <tbody className="StudyGroup-table-body">
          {sampleData.slice(offset, offset + limit).map((data, index) => (
            <tr className="StudyGroup-table-body-tr">
              <td className="StudyGroup-table-body-group-name">{data.groupName}</td>
              <td className="StudyGroup-table-body-group-interest">{data.groupInterest}</td>
              <td className="StudyGroup-table-body-group-member">{data.groupCurrentMember}/{data.groupMaxMember}</td>
              <td className="StudyGroup-table-body-group-checkJoin" >
                {data.joinable ? 
                  <button 
                    className="StudyGroup-joinable-possiable">
                    가능</button> : 
                  <button 
                    onClick={(e)=>{alert('현재 참여가 불가능 합니다')}} 
                    className="StudyGroup-joinable-impossiable">
                    불가능</button>}
                  </td>
            </tr>
          ))}
            
          </tbody>

      </table>
      <div className="StudyGroup-footer">
        <div className="StudyGroup-footer-pagination">
        <CustomPagination total={sampleData.length} limit={limit} page={page} setPage={setPage}/>
        </div>
        <div className="StudyGroup-footer-create-buttons">
          <button 
            className="StudyGroup-footer-create-button"
            type="submit" 
            onClick={e=>nav("/creategroup")}
            style={{ 
              }}>
            그룹 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyGroup;