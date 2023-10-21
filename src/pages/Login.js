import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: 인증 처리를 해주는 API와 연결
        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <div className='loginContainer'>
            <img src={process.env.PUBLIC_URL + "./logo.png"} alt="Logo" />
                <form onSubmit={handleSubmit} className='insertClientInfoCon'>
                    <input 
                        className='insertClientInfoBox'
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        placeholder="아이디"
                    />    
                                 
                    <input 
                        className='insertClientInfoBox'
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
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
