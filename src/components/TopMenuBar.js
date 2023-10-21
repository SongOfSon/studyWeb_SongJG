import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// 페이지 import 
import Main from "../pages/Main";
import Timer from "../pages/Timer";
import Calendar from "../pages/Calendar";
import Board from "../pages/Board";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import WritePost from '../components/WritePost';
import FindPassword from "../pages/FindPassword";
import FindID from "../pages/FindID";
import Profile from "../pages/Profile";
import CreateStudyGroup from "../pages/CreateStudyGroup";

// Temp components for non-existing pages
import StudyGroup from "../pages/StudyGroup";
import MileageShop from "../pages/MileageShop";
import Inquiry from "../pages/Inquiry";

const TopMenuBar = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    return(
    <BrowserRouter>
      <ul className="menuStyle">
        <li> 
          <Link to="/main">
          <img src={process.env.PUBLIC_URL + "./logo.png"}
                alt="Logo" 
                style={{
                width: "50px",height:"auto",
                marginRight:"3px"
                }}/> 
          StudyWeb</Link> 
        </li>
        <li className="LineInMenu">|</li>
            <li> <Link to="/timer">타이머</Link> </li>
            <li> <Link to="/calendar">캘린더</Link> </li>
            <li> <Link to="/studygroup">스터디 그룹</Link> </li>
            <li> <Link to="/board">게시판</Link> </li>
            <li> <Link to="/mileage_shop">마일리지 샵</Link> </li>
            <li> <Link to="/inquiry">문의사항</Link> </li>
        <li className="LineInMenu">|</li>

{/* 로그인 상태 확인 후 메뉴 바 변경*/}
          {isLogin ? 
              <>
                <li> <Link to="/main" onClick={(e)=>setIsLogin(e.target.false)}>로그아웃</Link> </li>
                <li> <Link to="/profile">회원정보</Link> </li>
              </>
            :
              <>
                <li> <Link to="/login">로그인</Link> </li>
                <li> <Link to="/signup">회원가입</Link> </li>
              </>
          }
        </ul>

        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/board" element={<Board />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/studygroup" element={<StudyGroup/>} />
            <Route path="/mileage_shop" element={<MileageShop />} />
            <Route path="/inquiry" element={<Inquiry />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            <Route path="/profile" element={<Profile />} />
            
            <Route path="/findid" element={<FindID />} />
            <Route path="/findpassword" element={<FindPassword />} />
            
            <Route path="/createstudygroup" element={<CreateStudyGroup/>} />
            <Route path="/writepost" element={<WritePost />} />
        </Routes>
    </BrowserRouter>
    );
}

export default TopMenuBar;