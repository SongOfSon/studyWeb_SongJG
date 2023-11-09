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
            <tr className="Board-table-tr">
              <td className="Board-table-td-Num">{post.id}</td>
              <td className="Board-table-td-Title">{post.title}</td>
              <td className="Board-table-td-Author">{post.author}</td>
              <td className="Board-table-td-CreateDate">{post.writeDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="board-footer">
        <div className="Board-table-Footer-Pagination">
          <CustomPagination total={posts.length} limit={limit} page={page} setPage={setPage}/>
        </div>
        <div className="Board-table-Footer-Buttons">
          <button 
            className="Board-writePost-Button"
            onClick={e=>navigate('/WritePost')}>
              글 작성
          </button>
          <button 
            className="Board-deletePost-Button"
            onClick={deletePost}>
              글 삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;