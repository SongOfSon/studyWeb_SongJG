import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Login.css'
import axios from 'axios';
import { useEffect } from 'react';

function Login({setIsLogin}) {
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleUserId = e => setUserId(e.target.value);
    const handleUserPassword = e => setUserPassword(e.target.value);

    const userData = {
        userId: userId,
        userPassword: userPassword,
    };

    const handleLogin = () => {
        axios.post('서버주소 기입 필', userData)
        .then(res =>{
            if(res.data.userId === userId){
                sessionStorage.setItem('userId',userId)
            }else if(res.data.userId === undefined){
                alert('입력하신 id 가 일치하지 않습니다.')
            }else if(res.data.userId === null){
                alert('입력하신 비밀번호 가 일치하지 않습니다.')
            }document.location.href = '/'
        })
        .catch()
    };

    // 서버주소 미기입으로 오동작을 일으켜 주석 처리
    // useEffect(() => {
    //     axios.get('서버 주소 기입')
    //     .then(res => console.log(res))
    //     .catch()
    // },[])

    return (
    <div className='loginContainer'>
        <img src={process.env.PUBLIC_URL + "./logo.png"} alt="Logo" />

        <form onSubmit={handleLogin} className='insertClientInfoCon'>
            <input 
                className='insertClientInfoBox'
                type="text" 
                value={userId} 
                onChange={handleUserId} 
                placeholder="아이디"
            />    
                            
            <input 
                className='insertClientInfoBox'
                type="password" 
                value={userPassword} 
                onChange={handleUserPassword} 
                placeholder="비밀번호"
            />
            <button className='checkLoginBox' type="submit" value="로그인">로그인</button>
        </form>

        <div className='loginConBottom'>
            <Link className='findIdLink' to="/findid">ID 찾기</Link>
            <Link className='findPWLink' to="/findpassword">PW 찾기</Link>
            <Link className='signUpLink' to="/signup">회원 가입</Link>
        </div>
    </div>
    );
}

export default Login;