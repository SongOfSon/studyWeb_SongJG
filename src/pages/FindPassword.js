import React, {useState} from "react";

const FindPassword = () => {
  const [authType, setAuthType] = useState("email");

  return (
    <div className="FindPassword">
      <img src={process.env.PUBLIC_URL + "./logo.png"} alt="Logo" />
      <h2>비밀번호 찾기</h2>
     
      <form className="InsertFormInFindPassword">
        <input type="text" placeholder="이름을 입력하세요"/>
        <input type="text" placeholder="아이디를 입력하세요"/>
          <select onChange={e => setAuthType(e.target.value)}>
            <option value="email">이메일 인증</option>
            <option value="phone">핸드폰 인증</option>
          </select>
          {authType === "email" ? 
            <input type="email" placeholder="이메일을 입력하세요"/>
          :
          <input type="text" placeholder="휴대폰 번호를 입력하세요"/>
          }
        <button >비밀번호 찾기</button>
      </form>
    </div>
  );
};

export default FindPassword;
