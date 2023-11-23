import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ( props ) => {
// React hook
const navigate = useNavigate('');

// User Data
    const [userId, setUserId] = useState('');
    const [userPW, setUserPW] = useState('');

// Modal
    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
// handle
    const handleUserId = e => setUserId(e.target.value);
    const handleUserPW = e => setUserPW(e.target.value);
    const openModal = (e) => {
      document.body.style.overflow = "hidden"; // 스크롤 감춤
      setLoginModalIsOpen(true);
    };
    const closeModal = (e) => {
      document.body.style.overflow = "unset";
      setLoginModalIsOpen(false);
    };

    const handleLogin = async() => {
      if(userId ==='' || userPW === ''){
        alert("공란없이 입력해주세요");
        setUserId('');
        setUserPW('');
        return;
      }
      const currentUserData = {
        user_id:userId,
        password:userPW,
      };
      await axios
        .get('서버주소', JSON.stringify(currentUserData),{
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          alert('로그인에 성공했습니다!');
          navigate('/');
        })
        .catch(
          (e) => alert(JSON.parse(e.request.response).error) // 오류 출력
        );
    };
  
    const handleLoginOnLocal = () => {
      if(userId !== '' && userPW !== ''){
        for(let i = 0 ; i < props.generalUserData.length ; i++){
          if(props.generalUserData[i].userId === userId &&
            props.generalUserData[i].userPassword === userPW){
            props.loginAction(
              props.generalUserData[i].userNum,
              props.generalUserData[i].userName,
              props.generalUserData[i].userId,
              props.generalUserData[i].userPassword,
            );
            props.handleLogin(true);
            alert(`${props.generalUserData[i].userName}님 접속을 환영합니다`);
            closeModal();
          }
        }
      }else alert('다시 입력해주세요');
    }

// UI
  return (
    <>
    {props.isLogin?
    navigate('/')
    :<>
    <button className='Login-modal-open-Btn' 
      onClick={openModal}>
        로그인</button>
      <div className={!loginModalIsOpen?'Login-wrapper':'Login-wrapper-show-background'}>
      {loginModalIsOpen ?
        <div className='Login-modal-wrapper'>
          <div className='Login-modal-header'>
            <button className='Login-modal-close-Btn' 
            onClick={closeModal}>X</button>
          </div>

          <div className='Login-modal-body'>
              <img className="Login-modal-logo" src={process.env.PUBLIC_URL + "./NavIcons/logo.png"} alt='logopng'/>
              <input className='Login-modal-Id-InputBox' 
                type='text' value={userId} 
                onChange={handleUserId} placeholder='아이디를 입력해주세요'/>
              <input className='Login-modal-PW-InputBox' 
                type='password' value={userPW} 
                onChange={handleUserPW} placeholder='패스워드를 입력해주세요'/>
              <button className='Login-modal-submitBtn' 
                onClick={handleLoginOnLocal}>로그인</button>
          </div>
          
          <div className='Login-modal-footer'>
          </div>
    </div>:null}
  </div></>}
  </>
);
};

export default Login;