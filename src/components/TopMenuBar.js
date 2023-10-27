import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

// 페이지 import 
import {Main, Timer, Calendar, Board, Login, FindPassword, FindID,Profile, Signup} from "../ImportIdxControl/PagesIndex"
import {CreateStudyGroup, WritePost} from "../ImportIdxControl/ComponentsIndex"

// Temp components for non-existing pages
import {FindStudyGroup, MileageShop, Inquiry } from "../ImportIdxControl/PagesIndex";
import DetailBoard from "./DetailBoard";

const TopMenuBar = ( {
  // App.js로 부터 Props 구조분해 할당으로 전달
  // data, setter
  generalUserData, setGeneralUserData, currentLoginUser, setCurrentLoginUser, generalGroupData, 
  setGeneralGroupData, generalTimerData, setTimerData, generalCalendarData, setCalendarData, 
  generalBoardData, setGeneralBoardData, generalMileageData, setMileageData, 
  // func
  postNewUserData, handleLogin,isLogin,setIsLogin
} ) => {

  return(
    <BrowserRouter>
{/* 상단 메뉴 UI */}
      <ul className="menuStyle">
        <li><Link to="/"><img src={process.env.PUBLIC_URL + "./logo.png"}
                alt="Logo" 
                style={{width: "85px",height:"65px",marginLeft:"20px"}}
                /> </Link></li>
        <li className="LineInMenu">|</li>
        <li> <Link to="/timer">타이머</Link> </li>
        <li> <Link to="/calendar">캘린더</Link> </li>
        <li> <Link to="/studygroup">스터디 그룹</Link> </li>
        <li> <Link to="/board">게시판</Link> </li>
        <li> <Link to="/mileage_shop">마일리지 샵</Link> </li>
        <li> <Link to="/inquiry">문의사항</Link> </li>
        <li className="LineInMenu">|</li>

{/* 로그인 상태 확인 후 상단 메뉴 UI 변경*/}
          {isLogin ? 
              <>
                <li> <><Link to="/" onClick={handleLogin}>로그아웃</Link></> </li>
                <li> <><Link to="/profile">회원정보</Link> </></li>
              </>
            :
              <>
                <li> <><Link to="/login">로그인</Link></> </li>
                <li> <><Link to="/Signup">회원가입</Link> </></li>
              </>
          }
        </ul>
{/* Router */}
      <Routes>
        <Route path="/" 
        exact element={<Main />} />

        <Route path="/timer" 
        exact element={<Timer />} />

        <Route path="/board" 
        exact element={<Board 
          currentLoginUser={currentLoginUser}
          generalUserData={generalUserData}
          generalBoardData={generalBoardData}
          setGeneralBoardData={setGeneralBoardData}
        />} />

        <Route path="/calendar" 
        exact element={<Calendar />} />

        <Route path="/studygroup" 
        exact element={<FindStudyGroup
          generalGroupData={generalGroupData}
          setGeneralGroupData={setGeneralGroupData}/>} />

        <Route path="/mileage_shop" 
        exact element={<MileageShop />} />

        <Route path="/inquiry" 
        exact element={<Inquiry />} />

        <Route path="/login" 
        exact element={<Login 
          currentLoginUser={currentLoginUser}
          setCurrentLoginUser={setCurrentLoginUser}
          generalUserData={generalUserData}
          setIsLogin={setIsLogin}/>} />

        <Route path="/Signup" 
        exact element={<Signup 
          generalUserData={generalUserData}
          setGeneralUserData={setGeneralUserData}
        />} />
        
        <Route path="/profile" 
        exact element={<Profile 
          setGeneralUserData={setGeneralUserData}
          setGeneralGroupData={setGeneralGroupData}/>} />
        
        <Route path="/findid" exact element={<FindID />} />
        <Route path="/findpassword" exact element={<FindPassword />} />
        
        <Route path="/createstudygroup" 
        exact element={<CreateStudyGroup 
          generalGroupData={generalGroupData}
          setGeneralGroupData={setGeneralGroupData}/>} />

        <Route path="/writepost" 
        exact element={<WritePost 
          generalUserData={generalUserData}
          generalBoardData={generalBoardData}
          setGeneralBoardData={setGeneralBoardData}
         />} />

          <Route path="/board/:idx" exact element={<DetailBoard 
          generalBoardData={generalBoardData}
          setGeneralBoardData={setGeneralBoardData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default TopMenuBar;