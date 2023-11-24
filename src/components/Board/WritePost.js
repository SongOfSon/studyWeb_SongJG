// React import
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// CSS import
import "./WritePost.css"

const WritePost = (props) => {
// React hooks
  const navigate = useNavigate('');
  
// BoardData
  const userName = props.currentLoginUser.userName;
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContent, setBoardContent] = useState('');
  const date = new Date();
  const dateFormat = date.getFullYear() + '-' + 
                     (date.getMonth() + 1 < 9 ? "0"+(date.getMonth() + 1):(date.getMonth() + 1)) + '-' + 
                     (date.getDate()< 9 ? "0"+(date.getDate() ):(date.getDate() ));
  
  const newBoardData = {
    id : props.generalBoardData.at(-1).id + 1,
    title : boardTitle,
    author : userName,
    content : boardContent,
    writeDate : dateFormat,
  };
  
// handle
  const handleBoardTitle = e => setBoardTitle (e.target.value);
  const handleBoardContent = e => setBoardContent(e.target.value);


  const hadleWriteSubmit = () =>{
  //   if(boardTitle ==='' || boardContent === ''){
  //     alert('공란')
  //     return
  //   }
    axios.post('/chat', newBoardData ,{
      header: {
        'Contnent-Type': 'application/json',
      },
    }).then(() => {
      navigate('/board');
    }).catch(err => {
      console.log(err);
    });
    // props.setGeneralBoardData([...props.generalBoardData, newBoardData]);
    // navigate('/board');
    // console.log(props.generalBoardData);
  };

  const handleWriteSubmitOnLocal = (e) => {
    if(boardTitle !== null && boardTitle !== ''){
      if(boardContent !== null && boardContent !== ''){
      props.setGeneralBoardData([...props.generalBoardData, newBoardData]);
      navigate('/board');
      }else alert('내용이 비어있습니다');
    }else alert('제목이 비어있습니다');
  };

// UI
return (

    <div className="WritePost-wrapper">
      <h2 className="WritePost-header">게시글 작성</h2>
      <div
        className="WritePost-form">
          <div className="WritePost-input-con">
            <input 
              className="WritePost-title-input" 
              type="text"
              value={boardTitle} 
              onChange={handleBoardTitle} 
              placeholder="제목을 입력하세요"/>
            <textarea
              className="WritePost-content-input" 
              value={boardContent} 
              onChange={handleBoardContent} 
              placeholder="내용을 입력하세요"/>
          </div>
          <button onClick={handleWriteSubmitOnLocal}>등록</button>
      </div>
    </div>
  );
};

export default WritePost;
