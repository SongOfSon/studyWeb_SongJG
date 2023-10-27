import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/Login.css'

function Login(props) {
// React hook
    const nav = useNavigate('');

// LoginUser Data 
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    let savedUserId = props.generalUserData;
    let savedUserPassword = props.generalUserData;
    let userDataSize = props.generalUserData.length;
// handle
    const onChangeId = (e) => setUserId(e.target.value);
    const onChangePassword = (e) => setUserPassword(e.target.value);

    const handleLogin = (e) => {
      console.log("로그인 버튼 클릭");
      e.preventDefault();
      let i = 0
      for(i ; i < 2 ; i ++){
        console.log(userDataSize + ' / ' + savedUserId[i].userId + ' / ' + savedUserPassword[i].userPassword)
        console.log(`반복문 작동중 ${i + 1} 회`);
          if(userId === savedUserId[i].userId){
            if(userPassword !== savedUserPassword[i].userPassword){
              return alert("비밀번호를 확인해 주세요");
            }else if(userPassword === savedUserPassword[i].userPassword){
                props.setCurrentLoginUser(userId);
                alert(`${userId}`+'님 접속을 환영합니다');
                nav('/');
                return props.setIsLogin(true);
            }
          }else if(userId === userPassword === null){
           return alert("계정과 비밀번호를 입력해 주세요");
          };
        };
        // console.log(`Username: ${userId}, Password: ${userPassword}`);
        // console.log(typeof userId); console.log(typeof userPassword);
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
