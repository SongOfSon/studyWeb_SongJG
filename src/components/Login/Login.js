// React import
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

// custom Pakcage import
import moment from 'moment';

// CSS import
import "./Login.css"

const Login = ( props ) => {
// React hook
const navigate = useNavigate('');

// User Data
  const [userId, setUserId] = useState('');
  const [userPW, setUserPW] = useState('');
  const date = new Date();
  const dateFormat = moment(date).format('YYYY-MM-DD');

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

  const checkAttendance = (userNum) => {
    const copiedCal = props.generalCalendarData;
    const attendance = {
      userNum: userNum,
      attendanceDate: dateFormat,
      checkBool:false,
    }
    if(props.generalCalendarData.length !== 0){
      for(let i = 0 ; i < props.generalCalendarData.length ; i++){
        if(props.generalCalendarData[i].userNum === userNum){
          if(props.generalCalendarData[i].attendanceDate !== dateFormat){
            props.setCalendarData([...copiedCal, attendance]);
          }else if(props.generalCalendarData[i].attendanceDate === dateFormat){
            props.setCalendarData([...copiedCal]);
          }
        }
      }
    }else if(props.generalCalendarData.length === 0){
      props.setCalendarData([...copiedCal, attendance]);
    }
  }

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
            checkAttendance(props.currentLoginUser.userNum);
            props.handleLogin(true);
            alert(`${props.generalUserData[i].userName}님 접속을 환영합니다`);
            closeModal();
            navigate('/');
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