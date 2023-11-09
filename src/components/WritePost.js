import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WritePost = (props) => {
// React hooks
  const navigate = useNavigate('');
  
// BoardData
  const userName = props.currentLoginUser;
  const [boardId, setBoardId] = useState(0);
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContent, setBoardContent] = useState('');
  const date = new Date();
  const dateFormat = date.getFullYear() + '-' + 
                     (date.getMonth() + 1 < 9 ? "0"+(date.getMonth() + 1):(date.getMonth() + 1)) + '-' + 
                     (date.getDate()< 9 ? "0"+(date.getDate() ):(date.getDate() ));
  const currentBoardDataSize = props.generalBoardData.length;
  const newBoardData = {
    id : currentBoardDataSize + 1,
    title : boardTitle,
    author : '송정근',
    content : boardContent,
    writeDate : dateFormat,
  };
  
// handle
  const handleBoardTitle = e => setBoardTitle (e.target.value);
  const handleBoardContent = e => setBoardContent(e.target.value);


  const hadleWriteSubmit = () =>{
    if(boardTitle ==='' || boardContent === ''){
      alert('공란')
      return
    }
    props.setGeneralBoardData([...props.generalBoardData, newBoardData]);
    navigate('/board');
    console.log(props.generalBoardData);
  };

// UI
return (

    <div className="WritePost-wrapper">
      <h2 className="WritePost-header">게시글 작성</h2>
      <form 
        className="WritePost-form" 
        onSubmit={hadleWriteSubmit}>
          <div className="WritePost-input-con">
            <input 
              className="WritePost-title-input" 
              type="text"
              value={boardTitle} 
              onChange={handleBoardTitle} 
              placeholder="제목을 입력하세요"/>
            <input 
              className="WritePost-content-input" 
              type="text"
              value={boardContent} 
              onChange={handleBoardContent} 
              placeholder="내용을 입력하세요"/>
          </div>
          <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default WritePost;
