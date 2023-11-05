import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ( props ) => {
// React hook
const nav = useNavigate('');

// User Data
    const [userId, setUserId] = useState('');
    const [userPW, setUserPW] = useState('');
    let savedUserId = props.generalUserData;
    let savedUserPassword = props.generalUserData;
    let userDataSize = 1;

// Modal
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
// handle
    const handleUserId = e => setUserId(e.target.value);
    const handleUserPW = e => setUserPW(e.target.value);
    const openModal = () => setLoginModalIsOpen(true);
    const closeModal = () => setLoginModalIsOpen(false);

    const handleLogin = (e) => {
        console.log("로그인 버튼 클릭");
        let i = 0
        for(i ; i < 2 ; i ++){
          console.log(userDataSize + ' / ' + savedUserId[i].userId + ' / ' + savedUserPassword[i].userPassword)
          console.log(`반복문 작동중 ${i + 1} 회`);
            if(userId === savedUserId[i].userId){
              if(userPW !== savedUserPassword[i].userPassword){
                return alert("비밀번호를 확인해 주세요");
              }else if(userPW === savedUserPassword[i].userPassword){
                  props.setCurrentLoginUser(userId);
                  alert(`${userId}`+'님 접속을 환영합니다');
                  nav('/');
                  return props.setIsLogin(true);
              }
            }else if(userId === userPW === null){
             return alert("계정과 비밀번호를 입력해 주세요");
            };
          };
          // console.log(`Username: ${userId}, Password: ${userPassword}`);
          // console.log(typeof userId); console.log(typeof userPassword);
      };
  

// UI
    return (
    <div className='Login-wrapper'>
        <button className='Login-modal-open-Btn' onClick={() => setLoginModalIsOpen(true)}>로그인</button>
            {loginModalIsOpen ?
                <div className='Login-modal-wrapper' >
                <div className='Login-modal-header'>
                    <button className='Login-modal-close-Btn' onClick={() => setLoginModalIsOpen(false)}>X</button>
                </div>
                <div className='Login-modal-body'>
                    <form className='Login-madal-form' onSubmit={handleLogin}>
                        <input className='Login-modal-Id-InputBox' type='text' value={userId} onChange={handleUserId} placeholder='아이디를 입력해주세요'/>
                        <input className='Login-modal-PW-InputBox' type='password' value={userPW} onChange={handleUserPW} placeholder='패스워드를 입력해주세요'/>
                        <button className='Login-modal-submitBtn' type='submit' onClick={() => {handleLogin();setLoginModalIsOpen(false);}}>로그인</button>
                    </form>
                </div>
                <div className='Login-modal-footer'>
                </div>
            </div>:null}
    </div>
    );
};

export default Login;