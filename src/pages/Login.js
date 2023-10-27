import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/Login.css'

function Login(props) {
// React hook
    const nav = useNavigate('');

// LoginUser Data 
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    let userDataSize = props.generalUserData.length;
// handle
    const onChangeId = (e) => setUserId(e.target.value);
    const onChangePassword = (e) => setUserPassword(e.target.value);

    const handleLogin = () => {
        for( ; userDataSize < -1; userDataSize--){
            if(userId === props.generalUserData[userDataSize].userId && 
               userPassword === props.generalUserData[userDataSize].userPassword){
                console.log(props.generalUserData[userDataSize].userId);
                console.log(props.generalUserData[userDataSize].userPassword);
                props.setCurrentUserId(userId);
                alert(`${userId}`+'님 접속을 환영합니다');
                nav('/');
                props.setIsLogin(true);
                return;
            }else return;
        }alert("계정과 비밀번호를 확인해 주세요")
        console.log(`Username: ${userId}, Password: ${userPassword}`);
    };

// UI   
  return (
      <div className='loginContainer'>
        <img src={process.env.PUBLIC_URL + "./logo.png"} alt="Logo" />
          <div className='insertClientInfoCon'>
            <input 
              className='insertClientInfoBox'
              type="text" 
              value={userId} 
              onChange={onChangeId} 
              placeholder="아이디"
            />    
                                 
            <input 
              className='insertClientInfoBox'
              type="password" 
              value={userPassword} 
              onChange={onChangePassword} 
              placeholder="비밀번호"
              />
              <button className='checkLoginBox' onClick={handleLogin} value="로그인">로그인</button>
            </div>
            {/* <div className='loginConBottom'>
                <Link className='findIdLink' to="/findid">ID 찾기</Link>
                <Link className='findPWLink' to="/findpassword">PW 찾기</Link>
                <Link className='signUpLink' to="/signup">회원 가입</Link>
            </div> */}
      </div>
  );
}

export default Login;
