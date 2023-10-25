import React, { useEffect, useState } from 'react';

import '../styles/SignUp.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupRenew({ userData }) {

  const nav = useNavigate('');

  // userInfo
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [authType, setAuthType] = useState('email'); // 인증 유형 기본값을 '이메일'로 설정
  const [userEmail, setUserEmail] = useState(''); // 휴대폰 번호 또는 이메일 입력
  const [userPhoneNum, setUserPhoneNum] = useState(''); // 휴대폰 번호 또는 이메일 입력
  const [authCode, setAuthCode] = useState('');

  // handle
  const handleUserName = e => setUserName(e.target.value);
  const handleUserId = e => setUserId(e.target.value); 
  const handleUserPassword = e => setUserPassword(e.target.value);
  const handleUserPasswordConfirm = e => setPasswordConfirm(e.target.value);
  const handleUserEmail = e => setUserEmail(e.target.value);
  const handleUserPhoneNum = e => setUserPhoneNum(e.target.value);
  const handleAuthCode = () =>{
    if(authCode === null){
      alert('인증번호를 입력해주세요')
    }else if(authCode === ' '){
      //인증번호 확인 함수
    }
  };

 

  const handleSignUp = () => {
    // //CORS 문제 시 @CrossOrigin(originPatterns="서버주소")
    //   axios.post("https://7609cfe4-4d76-4d77-91f8-521b28961bc3.mock.pstmn.io/", userInfo) 
    //   .then((res) => {
    //     console.log(res.data);
    //     if(res.data.userPassword !== passwordConfirm){
    //       alert('비밀번호가 일치하지 않습니다')
    //     }
    //     alert('회원가입 성공');
    //     navigate('/');
    //   })
    //   .catch((error) => alert('회원가입 실패'))
    alert(
      "회원가입을 축하합니다" + '\n' +
      "현재 입력된 회원정보"  + '\n' +
        `Name: ${userName}` + '\n' +
         `ID: ${userId}`
        //  Password: ${userPassword}, 
        //  Password Confirm: ${passwordConfirm}, 
        //  Auth email: ${userEmail}, 
        //  Auth Phone: ${userPhoneNum}, 
        //  Auth Code: ${authCode}`
        );
    nav('/');
  };


 const [allow, setAllow] = useState(true);

 useEffect(() => { 
  if(userName && userId && userPassword){
    setAllow(false)
    return;
  }setAllow(true);
 }, [userName, userId, userPassword])


  return (
    <div className='signUpContainer'>
      <img src={process.env.PUBLIC_URL + "./logo.png"} alt="Logo" />

      <form onSubmit={handleSignUp}>
        <input type="text"      value={userName}     onChange={handleUserName}             placeholder="이름" />
        <input type="text"      value={userId}       onChange={handleUserId}               placeholder="아이디" />
        <input type="password"  value={userPassword} onChange={handleUserPassword}         placeholder="비밀번호" />
        <input type="password"  value={passwordConfirm || ''} onChange={handleUserPasswordConfirm}  placeholder="비밀번호 재입력" />
        
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
          <button disabled={allow} type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default SignupRenew;
