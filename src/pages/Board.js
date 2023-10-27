import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomPagination from "../components/CustomPagination";

const Board = ( props ) => {
// React hooks
  const navigate = useNavigate('');

// BoardData
  const posts = props.generalBoardData;

// Pagination을 위한 변수
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
// handle
  const handleNav = e => navigate('/WritePost');

//Func
const deletePost = () => {

}

//UI
  return (
    <div className="BoardTableCon"> 
      <h2>게시판</h2>
        <table className="BoardTable">

          <thead className="HeadTableInB">
            <tr>
              <th className="BoardTableIdTh">글번호</th>
              <th className="BoardTableTitleTh">제목</th>
              <th className="BoardTableAuthorTh">작성자</th>
              <th className="BoardTableDateTh">작성일</th>
            </tr>
          </thead>

          
          <tbody>
            {posts.slice(offset, offset + limit).map((post) => (
              <tr key={post.id} Link={`/board/${props.generalBoardData.groupId}`}
                id={`${!(post.id % 2) && post.id !== 0?'InsertLine':'NoLine'}`}>
                <td className="BoardTableIdTd">{post.id}</td>
                <td className="BoardTableTitleTd">{post.title}</td>
                <td className="BoardTableAuthorTd">{post.author}</td>
                <td className="BoardTableDateTd">{post.writeDate}</td>
              </tr>
            ))}
          </tbody>

        </table>
        
        <div className="BoardTableConBottom">
          <div className="BoardTableConBottomPagination">
            <CustomPagination total={posts.length} limit={limit} page={page} setPage={setPage}/>
          </div>
          <button name="wirteBtn" onClick={handleNav}>글 작성</button>
          <button name="removeBtn" onClick={deletePost}>글 삭제</button>
        </div>
    </div>
  );
};

export default Board;
