// React import
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// CSS import
import "./SignUp.css"

function Signup(props) {
  // React hooks
  const navigate = useNavigate("");

  // userData
  const userNum = props.generalUserData.length;
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userEmail, setUserEmail] = useState(""); // 휴대폰 번호 또는 이메일 입력
  const [userPhoneNum, setUserPhoneNum] = useState(""); // 휴대폰 번호 또는 이메일 입력

  // handle
  const handleUserName = e => setUserName(e.target.value);
  const handleUserId = e => setUserId(e.target.value);
  const handleUserPassword = e => setUserPassword(e.target.value);
  const handleUserPasswordConfirm = e => setPasswordConfirm(e.target.value);
  // func
  const handleSignup = async () => {
    console.log(`이름 ${userName} / ID ${userId} / PW ${userPassword}`)
    if(userName !== ''){
      if(userId !== ''){
        if(userPassword === passwordConfirm){
          const newUserData = {
            user_id:userId,
            username:userName,
            password:userPassword,
          };
          await axios.
            post('/join', newUserData, {
            header: {
              'Contnent-Type': 'application/json',
            },
          }).then((res) => {
            alert(`${res}`);
            navigate('/');
          }).catch(err => {
            alert(err);
            console.log(err);
          });
          return;
        }alert('비밀번호 불일치');
        return;
      }alert('ID 공란');
      return;
    }alert('이름 공란');
    return;
  };

  const handleSignupOnLocal = () =>{
    if(userName != null){
      if(userId != null){
        if(userPassword != null){
          if(userPassword === passwordConfirm){
            props.signupAction(
              userNum, 
              userName, 
              userId, 
              userPassword, 
              userEmail, 
              userPhoneNum);
            alert(`${userName}님 회원가입을 축하드립니다`);
            return navigate('/');
          }return alert('비밀번호 불일치');
        }return alert('비밀번호 공란');
      }return alert('ID 공란');
    }return alert('이름 공란');
  };

  // UI
  return (
    <div className="signup-wrapper">
      <img src={process.env.PUBLIC_URL + "./NavIcons/logo.png"} alt="Logo" />

      <div className="signup-input-wrapper">
        <input
          name="NameInputBox"
          type="text"
          value={userName}
          onChange={handleUserName}
          placeholder="이름"
        />
        <input
          name="IdInputBox"
          type="text"
          value={userId}
          onChange={handleUserId}
          placeholder="아이디"
        />
        <input
          name="PasswordInputBox"
          type="password"
          value={userPassword}
          onChange={handleUserPassword}
          placeholder="비밀번호"
        />
        <input
          name="PasswordConfirmInputBox"
          type="password"
          value={passwordConfirm || ""}
          onChange={handleUserPasswordConfirm}
          placeholder="비밀번호 재입력"
        />

        {/* <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button type="button" onClick={() => setAuthType('phone')}>휴대폰 인증</button>
          <button type="button" onClick={() => setAuthType('email')}>이메일 인증</button>
        </div>
        
        <input 
          type = 'text'
          value = {authType === 'email'? userEmail : userPhoneNum} 
          onChange = {authType === 'email'?handleUserEmail:handleUserPhoneNum} 
          placeholder = {authType === 'email' ? '이메일' : '휴대폰 번호'}
        />
        <input 
          type="text" 
          value={authCode || ''} 
          onChange={e => setAuthCode(e.target.value)} 
          placeholder="인증번호"
        />
        <div>
          <button type='button' onClick={handleAuthCode}>인증 확인</button>
          <br/> */}
        <div>
          <button onClick={handleSignupOnLocal}>
              회원가입
            </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
