import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomPagination from "../Components/CustomPagination"

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
    <div className="Board-wrapper"> 
        <table className="Board-table">
          <thead className="Board-table-Header">
            <tr>
              <th className="Board-table-th-Num">NO.</th>
              <th className="Board-table-th-Title">제목</th>
              <th className="Board-table-th-Author">작성자</th>
              <th className="Board-table-th-CreateDate">작성일</th>
            </tr>
          </thead>
          <tbody className="Board-table-Body">
            {posts.slice(offset, offset + limit).map((post) => (
              <tr key={post.id} Link={`/board/${props.generalBoardData.groupId}`}
                id={`${!(post.id % 2) && post.id !== 0?'InsertLine':'NoLine'}`}>
                <td className="Board-table-td-Num">{post.id}</td>
                <td className="Board-table-td-Title">{post.title}</td>
                <td className="Board-table-td-Author">{post.author}</td>
                <td className="Board-table-td-CreateDate">{post.writeDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="Board-table-Footer">
          <></>
          <div className="Board-table-Footer-Pagination">
            <CustomPagination total={posts.length} limit={limit} page={page} setPage={setPage}/>
          </div>
          <div className="Board-table-Footer-Buttons">
            <button name="Board-writePost-Button" onClick={handleNav}>글 작성</button>
            <button name="Board-deletePost-Button" onClick={deletePost}>글 삭제</button>
          </div>
        </div>
    </div>
  );
};

export default Board;