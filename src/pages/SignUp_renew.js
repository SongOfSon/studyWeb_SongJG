import React, { useEffect, useState } from 'react';

import '../styles/SignUp.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup(userInfo) {
  const navigate = useNavigate();

  // userInfo
  const [userName, setUserName] = useState(userInfo.userName);
  const [userId, setUserId] = useState(userInfo.userId);
  const [userPassword, setUserPassword] = useState(userInfo.userPassword);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userEmail, setUserEmail] = useState(userInfo.userEmail);
  const [userPhoneNum, setUserPhoneNum] = useState(userInfo.userPhoneNum);
  const [authType, setAuthType] = useState('email');
  const [authCode, setAuthCode] = useState('');

  // handle
  const handleUserName = e => setUserName(e.target.value);
  const handleUserId = e => setUserId(e.target.value);  
  const handleUserPassword = e => setUserPassword(e.target.value);
  const handleUserPasswordConfirm = e => setPasswordConfirm(e.target.value);
  const handleUserEmail = e => setUserEmail(e.target.value);
  const handleUserPhoneNum = e => setUserPhoneNum(e.target.value);
  const handleAuthType = e =>{
    if(authType === 'email'){
      setUserPhoneNum('');
      return handleUserEmail(e);
    }else if(authType === 'phone'){
      setUserEmail('');
      return handleUserPhoneNum(e);
    }alert('잘못된 인증수단');return;
  }
  const handleAuthCode = () =>{
    if(authCode === ''){
      alert('인증번호를 입력해주세요')
    }else if(authCode === ' '){
      //인증번호 확인 함수
    }
  };

  // 회원 가입 시 전달되는 데이터
  const userData = {
    userName: userName,
    userId: userId,
    userPassword: userPassword,
    userEmail: userEmail,
    userPhoneNum: userPhoneNum
  };

  const handleSignUp = () => {

    //CORS 문제 시 @CrossOrigin(originPatterns="서버주소")
      axios.post("서버주소 기입 필", userData) 
      .then((response) => {
        alert('회원가입 성공');
        navigate('/');
      })
      .catch((error) => alert('회원가입 실패'))
      
  //   console.log(
  //       `Name: ${userName}, 
  //        ID: ${userId}, 
  //        Password: ${userPassword}, 
  //        Password Confirm: ${passwordConfirm}, 
  //        Auth email: ${userEmail}, 
  //        Auth Phone: ${userPhoneNum}, 
  //        Auth Code: ${authCode}`);
  };


 const [allow, setAllow] = useState(true);

 useEffect(() => { 
  if(userName && userId && userPassword && authCode){
    setAllow(false)
    return;
  }setAllow(true);
 }, [userName, userId, userPassword, authCode])


  return (
    <div className='signUpContainer'>
      <img src={process.env.PUBLIC_URL + "./logo.png"} alt="Logo" />

      <form>
        <input 
          type="text" 
          value={userName} 
          onChange={handleUserName} 
          placeholder="이름"
        />
        <input 
          type="text" 
          value={userId} 
          onChange={handleUserId} 
          placeholder="아이디"
        />
        <input 
          type="password" 
          value={userPassword} 
          onChange={handleUserPassword} 
          placeholder="비밀번호"
        />
        <input 
          type="password" 
          value={passwordConfirm || ''} 
          onChange={handleUserPasswordConfirm} 
          placeholder="비밀번호 재입력"
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button type="button" onClick={() => setAuthType('phone')}>휴대폰 인증</button>
          <button type="button" onClick={() => setAuthType('email')}>이메일 인증</button>
        </div>
        <input 
          type = 'text'
          value = {authType === 'email'? userEmail : userPhoneNum} 
          onChange = {e => handleAuthType(e)} 
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
          <br/>
          <button disabled={allow} type="submit" onClick={handleSignUp}>회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
