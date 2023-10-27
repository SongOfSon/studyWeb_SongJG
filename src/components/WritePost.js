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
    props.setGeneralBoardData([...props.generalBoardData, newBoardData]);
    navigate('/board');
    console.log(props.generalBoardData);
  };

// UI
return (

    <div className="WritePostCon">
      <h2>게시글 작성</h2>
      <form id="WriteForm" onSubmit={hadleWriteSubmit}>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td><label>제목</label></td>
                <td><input name="BoardTitleInputBox" type="text" value={boardTitle}
                      onChange={handleBoardTitle} placeholder="제목을 입력하세요" /></td>
              </tr> 
              <tr>
              <td><label>내용</label></td>
              <td><input name="BoardContentInputBox" type="textarea" value={boardContent} 
                    onChange={handleBoardContent} placeholder="내용을 입력하세요"/></td>
              </tr>
            </tbody>
          </table>

          <button type="submit" >등록</button>
      </form>
    </div>
  );
};

export default WritePost;
