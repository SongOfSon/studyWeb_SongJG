import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "샘플 글 1",
      author: "작성자 1",
      date: "2023-05-11",
    },
    {
      id: 2,
      title: "샘플 글 2",
      author: "작성자 2",
      date: "2023-05-10",
    },
    {
      id: 3,
      title: "샘플 글 3",
      author: "작성자 3",
      date: "2023-05-09",
    },
    {
      id: 4,
      title: "샘플 글 4",
      author: "작성자 4",
      date: "2023-05-09",
    },
    {
      id: 5,
      title: "샘플 글 5",
      author: "작성자 5",
      date: "2023-05-09",
    },
    {
      id: 6,
      title: "샘플 글 6",
      author: "작성자 6",
      date: "2023-05-09",
    },
    {
      id: 7,
      title: "샘플 글 7",
      author: "작성자 7",
      date: "2023-05-09",
    },
    {
      id: 8,
      title: "샘플 글 8",
      author: "작성자 8",
      date: "2023-05-09",
    },
  ]);

  const navigate = useNavigate('');

  return (
    <div className="BoardTableCon"> 
      <h2>게시판</h2>
        <table className="BoardTable">

          <thead className="HeadTableInB">
            <tr>
              <th>글번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id}  
                id={`${!(post.id % 2) && post.id !== 0?'InsertLine':'NoLine'}`}>
                
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>

        </table>
        
        <div className="BoardTableConBottom">
          <div className="BoardTableConBottomPagination">
          {'<'} 1 | 2 | 3 | 4 | 5 {'>'}
          </div>

          <button name="wirteBtn" onClick={e => navigate('/WritePost')}>글 작성</button>
          <button name="removeBtn">글 삭제</button>
        </div>
    </div>
  );
};

export default Board;
