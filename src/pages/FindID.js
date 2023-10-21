import React, { useState } from "react";

const FindID = () => {
  const [authType, setAuthType] = useState("email");

  return (
    <div className="FindID" >
      <img src={process.env.PUBLIC_URL + "./logo.png"} alt="Logo" />
      <h2>아이디 찾기</h2>

      <form className="InsertFormInFindID">
          <input type="text" placeholder="이름을 입력하세요"/>
          <select onChange={e => setAuthType(e.target.value)}>
            <option value="email">이메일 인증</option>
            <option value="phone">핸드폰 인증</option>
          </select>
        {authType === "email" ? 
            <input type="email" placeholder="이메일을 입력하세요"/>
        :
            <input type="text" placeholder="휴대폰 번호를 입력하세요"/>
        }
        <button>아이디 찾기</button>
      </form>
      
    </div>
  );
};

export default FindID;
