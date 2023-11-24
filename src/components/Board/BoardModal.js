// React import
import React, { useState } from 'react';

// CSS import
import "./BoardModal.css"

const BoardModal = ( props ) => {  
// data
  const [checkModify, setcheckModify] = useState(false);

  const [currentPostTitle, setCurrentPostTitle] = useState(props.postT[props.clickedModalNum].title);
  const [currentPostContent, setCurrentPostContent] = useState(props.postT[props.clickedModalNum].content);
// Modal

// handle
  const handleTitle = e => setCurrentPostTitle(e.target.value);
  const handleContent = e => setCurrentPostContent(e.target.value);

// func
  const modifyCheck = (bool) => setcheckModify(Boolean(bool));
  const allowModify = () => {
    if(props.isLogin === true){
      if(props.currentLoginUser.userName === props.postT[props.clickedModalNum].author){
        return true
      }else return false
    }else return false
  }
  const modifyPost = ( clickedModalNum, pageNum ) =>{
    const currentPostNum = (pageNum - 1)*10 + clickedModalNum + 1;
    if(props.currentLoginUser.userName === props.postT[props.clickedModalNum].author)
      if(currentPostTitle !== '' && currentPostTitle !== null)
        if(currentPostContent !== '' && currentPostContent !== null){
          props.modifyPostAction(currentPostNum, currentPostTitle, currentPostContent);
          setcheckModify(false);
    }else alert('실패');
  }
  const deletePost = ( postId, pageNum) => {
    props.closeModal();
    const filterValue = (pageNum - 1)*10 + postId + 1;
    props.setGeneralBoardData(props.generalBoardData.filter(post => post.id !== filterValue));
  }


// UI
  return (
    <div className="Board-modal-background">
      <div className="Board-modal-body">
        <div className="Board-modal-body-head">
          <button className="Board-modal-close-button" onClick={()=>props.closeModal()}>X</button>
        </div>
        <div className="Board-modal-body-body">
          <div className="Board-modal-body-body-top">
            <div  className="Board-modal-body-body-top-top">
              <div className="Board-modal-body-body-id">글번호 : {props.postT[props.clickedModalNum].id}</div>
              <div className="Board-modal-body-body-Author">{props.postT[props.clickedModalNum].author}</div>
            </div>
            <div className="Board-modal-body-body-WriteDate">{props.postT[props.clickedModalNum].writeDate}</div>
          </div>
          {checkModify
          ?<div className="Board-modal-body-Modify">
            <input 
              className='Board-modal-body-Modify-Title' 
              type='text'
              value={currentPostTitle}
              onChange={handleTitle}/>
            <textarea 
              className='Board-modal-body-Modify-Content'
              value={currentPostContent}
              onChange={handleContent} />
          </div>
          :<div className="Board-modal-body-body-body">
            <div className="Board-modal-body-body-Title">
              <div>글제목 : {props.postT[props.clickedModalNum].title}
              </div>
            </div>
            <div className="Board-modal-body-body-content">
              <div>{props.postT[props.clickedModalNum].content
                .split('\n').map((line)=>{
                 return(<span>{line}<br/></span>)
              })}</div>
            </div>
          </div>}
          

        </div>
        <div className="Board-modal-body-foot"><div className="Board-modal-body-foot-buttons">
          {allowModify()?
            checkModify?
              <button 
                className='Board-modal-foot-modify-confirm-button'
                onClick={() => modifyPost(props.clickedModalNum, props.page)}>
                수정하기</button>
            :<>
              <button 
                className='Board-modal-foot-modify-button'
                onClick={e => modifyCheck(e, true)}>
                글 수정</button>
              <button className='Board-modal-foot-delete-button'
              onClick={ () => deletePost(props.clickedModalNum, props.page)}>
                글 삭제</button>
            </>:<></>
          }</div>
        </div>
      </div>
    </div>
  );
};

export default BoardModal;