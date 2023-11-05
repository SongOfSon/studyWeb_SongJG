import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Signup( props ) {
// React hooks
  const nav = useNavigate('');

// userData
  const [newUserIdNum, setNewUserIdNum] = useState(0)
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [authType, setAuthType] = useState('email'); // 인증 유형 기본값을 '이메일'로 설정
  const [userEmail, setUserEmail] = useState(''); // 휴대폰 번호 또는 이메일 입력
  const [userPhoneNum, setUserPhoneNum] = useState(''); // 휴대폰 번호 또는 이메일 입력
  const [authCode, setAuthCode] = useState('');

  let newUserData = {
    userIdNum : Number(props.generalUserData.length),
    userName : userName,
    userId : userId,
    userPassword : userPassword,
    userEmail : userEmail,
    userPhoneNum : userPhoneNum,
    userMileage : '',
    userInterest : '',
    userJoinGroup : [],
  };

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

// 회원가입 기능
  const handleSignUp = (e) => {
    e.preventDefault();
    let generalUserDatas = props.generalUserData;
    let pushNewData = [...generalUserDatas, newUserData];
    props.setGeneralUserData(pushNewData);
    /*
    fetch('서버주소', {
      method: "POST",
      headers: {
        "Contnet-Type : "application/json,
      },
      body: JSON.stringify({
        userIdNum : Number(props.generalUserData.length),
        userName : userName,
        userId : userId,
        userPassword : userPassword,
        userEmail : userEmail,
        userPhoneNum : userPhoneNum,
        userMileage : '',
        userInterest : '',
        userJoinGroup : [],
      }),
    })
     .then((response) => response.json())
     .then((data) => console.log(data))


    */
    console.log(props.generalUserData);
    alert(
      `회원가입을 축하합니다
      현재 입력된 회원정보
      Name: ${userName}
      ID: ${userId}`);
      nav('/');
  };

// 유효성 검사
  //회원가입 input 공란 검사
  const [allow, setAllow] = useState(true);

  useEffect(() => { 
  if(userName && userId && userPassword){
    if(userPassword === passwordConfirm){
    setAllow(false)
    }return;
  }setAllow(true);
  }, [userName, userId, userPassword, passwordConfirm]);

// UI
  return (
    <div className='signUpContainer'>
      <img src={process.env.PUBLIC_URL + "./NavIcons/logo.png"} alt="Logo" />

      <form name="signUpForm" onSubmit={handleSignUp}>
        <input name="NameInputBox"            type="text"      value={userName}              onChange={handleUserName}             placeholder="이름" />
        <input name="IdInputBox"              type="text"      value={userId}                onChange={handleUserId}               placeholder="아이디" />
        <input name="PasswordInputBox"        type="password"  value={userPassword}          onChange={handleUserPassword}         placeholder="비밀번호" />
        <input name="PasswordConfirmInputBox" type="password"  value={passwordConfirm || ''} onChange={handleUserPasswordConfirm}  placeholder="비밀번호 재입력" />
        
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
          {allow && <button disabled={allow} style={{backgroundColor:"gray",border:"0px"}} type="submit">회원가입</button>}
          {!allow && <button disabled={allow} type="submit">회원가입</button>}          
        </div>
      </form>
    </div>
  );
}

export default Signup;