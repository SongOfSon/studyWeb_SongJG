import React, { useState } from 'react';

import '../styles/SignUp.css'

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [authType, setAuthType] = useState('email'); // 인증 유형 기본값을 '이메일'로 설정
  const [authInfo, setAuthInfo] = useState(''); // 휴대폰 번호 또는 이메일 입력
  const [authCode, setAuthCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 회원가입 처리를 해주는 API와 연결
    console.log(`Name: ${name}, Username: ${username}, Password: ${password}, Password Confirm: ${passwordConfirm}, Auth Info: ${authInfo}, Auth Code: ${authCode}`);
  };

  return (
    <div className='signUpContainer'>
      <img src={process.env.PUBLIC_URL + "./logo.png"} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="이름"
        />
        <input 
          type="text" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          placeholder="아이디"
        />
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="비밀번호"
        />
        <input 
          type="password" 
          value={passwordConfirm} 
          onChange={e => setPasswordConfirm(e.target.value)} 
          placeholder="비밀번호 확인"
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button type="button" onClick={() => setAuthType('phone')}>휴대폰 인증</button>
          <button type="button" onClick={() => setAuthType('email')}>이메일 인증</button>
        </div>
        <input 
          type={authType === 'email' ? 'email' : 'tel'} 
          value={authInfo} 
          onChange={e => setAuthInfo(e.target.value)} 
          placeholder={authType === 'email' ? '이메일' : '휴대폰 번호'}
        />
        <input 
          type="text" 
          value={authCode} 
          onChange={e => setAuthCode(e.target.value)} 
          placeholder="인증번호"
        />
        <input id='signUpConfirmBtn' type="submit" value="회원가입" />
      </form>
    </div>
  );
}

export default Signup;
