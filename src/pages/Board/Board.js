import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomPagination from '../../components/CustomPagiantion/CustomPagination'
import BoardModal from "./BoardModal";

import './Board.css'

const Board = ( props ) => {
    // React hooks
  const navigate = useNavigate('');

  // BoardData
    const posts = props.generalBoardData;
  
  // Modal
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = (idx) => {
      document.body.style.overflow = "hidden"; // 스크롤 감춤
      setClickModalNum(idx);
      setModalIsOpen(true);
    };
    const closeModal = () => {
      document.body.style.overflow = "unset";
      setModalIsOpen(false);
    };
    const [clickedModalNum, setClickModalNum] = useState(0);
  
  // Pagination을 위한 변수
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
  // handle
  
  //Func
  const writeAction = () => {
    if(props.isLogin === true){
    navigate('/WritePost')
    }else alert('로그인이 필요한 서비스입니다.');
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
          {posts.slice(offset, offset + limit).map((post, idx, postT) => (
          <>
            <tr key={post.id} onClick={()=>openModal(idx)} className="Board-table-tr">
              <td className="Board-table-td-Num">{post.id}</td>
              <td className="Board-table-td-Title">{post.title}</td>
              <td className="Board-table-td-Author">{post.author}</td>
              <td className="Board-table-td-CreateDate">{post.writeDate}</td>
            </tr>
            {modalIsOpen?
            <BoardModal
              postT={postT}
              page={page}
              clickedModalNum={clickedModalNum}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              modifyPostAction={props.modifyPostAction}
              isLogin={props.isLogin}
              currentLoginUser={props.currentLoginUser}
              generalBoardData={props.generalBoardData}
              setGeneralBoardData={props.setGeneralBoardData}
              />:<></>
            }
          </>
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
            onClick={writeAction}>
              글 작성
          </button>
        </div>
      </div>
    </div>
  );
};

export default Board;