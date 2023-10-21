import React from "react";
import { useNavigate } from "react-router-dom";

const WritePost = () => {

  const navigate = useNavigate('');

  return (

    <div className="WritePostCon">
      <h2>게시글 작성</h2>
      <form>
          <table>
            <tr>
              <td><label>제목</label></td>
              <td><input type="text" placeholder="제목을 입력하세요" /></td>
            </tr> 
            <tr>
            <td><label>내용</label></td>
            <td><input placeholder="내용을 입력하세요"/></td>
            </tr>
          </table>

          <button type="submit" onClick={e=> navigate('/board')} >
            등록
          </button>
      </form>
    </div>
  );
};

export default WritePost;
