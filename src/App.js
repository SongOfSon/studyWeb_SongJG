// React import
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CSS import
import "./App.css"

// Pages Import
import Timer from "./components/Timer/Timer.js"
import CalendarPage from "./components/Calendar/Calendar.js";
import StudyGroup from "./components/StudyGroup/StudyGroup.js"
import Board from "./components/Board/Board.js"
import MileageShop from "./components/MileageShop/MileageShop.js"
import Inquery from "./components/Inquery/Inquery.js"

// Components Import
import Main from "./components/Main/Main.js"
import NavigationBar from "./components/Main/NavigationBar.js"
import NotExistPage from "./components/Common/NotExistPage.js"
import Footer from "./components/Main/Footer.js"

import Signup from "./components/Signup/Signup.js"
import Profile from "./components/Profile/Profile.js"

import CreateGroup from "./components/StudyGroup/CreateGroup.js"
import CurrentGroup from "./components/StudyGroup/CurrentGroup.js"

import WritePost from "./components/Board/WritePost.js"

// custom Package import


function App() {
  //generalData
  const [generalUserData, setGeneralUserData] = useState([
    {
      userNum: 0,
      userName: "관리자",
      userId: "admin",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: 5000,
      userInterest: "",
      userJoinGroup: [0]
    },
    {
      userNum: 1,
      userName: "a",
      userId: "aAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1]
    },
    {
      userNum: 2,
      userName: "b",
      userId: "bAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,2]
    },
    {
      userNum: 3,
      userName: "c",
      userId: "cAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,3]
    },
    {
      userNum: 4,
      userName: "d",
      userId: "dAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,4]
    },
    {
      userNum: 5,
      userName: "e",
      userId: "eAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,5]
    },
    {
      userNum: 6,
      userName: "f",
      userId: "fAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,6]
    },
    {
      userNum: 7,
      userName: "g",
      userId: "gAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,7]
    },
    {
      userNum: 8,
      userName: "h",
      userId: "hAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,8]
    },
    {
      userNum: 9,
      userName: "i",
      userId: "iAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,9]
    },
    {
      userNum: 10,
      userName: "j",
      userId: "jAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [1,10]
    },
    {
      userNum: 11,
      userName: "k",
      userId: "kAccount",
      userPassword: "1234",
      userEmail: "",
      userPhoneNum: "",
      userMileage: "",
      userInterest: "",
      userJoinGroup: [11]
    },
  ]);
  const [currentLoginUser, setCurrentLoginUser] = useState({
    userNum: 0,
    userName: '비 로그인 상태',
    userId:'',
    userPW:0,
  });
  const [isLogin, setIsLogin] = useState(false);
  const [generalGroupData, setGeneralGroupData] = useState([
    {
      groupId: 0,
      groupName: "테스트 그룹 000",
      groupInfo: "테스트 그룹 소갯글",
      groupInterest: "테스트 관심 분야",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'관리자',
      groupMamberList:['관리자',],
      joinable: false
    },
    {
      groupId: 1,
      groupName: "temp name 001",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 10,
      groupMaster:'a',
      groupMamberList:['a','b','c','d','e','f','g','h','i','j'],
      joinable: false
    },
    {
      groupId: 2,
      groupName: "temp name 002",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'b',
      groupMamberList:['b',],
      joinable: true
    },
    {
      groupId: 3,
      groupName: "temp name 003",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'c',
      groupMamberList:['c',],
      joinable: true
    },
    {
      groupId: 4,
      groupName: "temp name 004",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'d',
      groupMamberList:['d'],
      joinable: true
    },
    {
      groupId: 5,
      groupName: "temp name 005",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'e',
      groupMamberList:['e',],
      joinable: true
    },
    {
      groupId: 6,
      groupName: "temp name 006",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'f',
      groupMamberList:['f',],
      joinable: true
    },
    {
      groupId: 7,
      groupName: "temp name 007",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'g',
      groupMamberList:['g',],
      joinable: true
    },
    {
      groupId: 8,
      groupName: "temp name 008",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'h',
      groupMamberList:['h',],
      joinable: true
    },
    {
      groupId: 9,
      groupName: "temp name 009",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'i',
      groupMamberList:['i',],
      joinable: true
    },
    {
      groupId: 10,
      groupName: "temp name 010",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'j',
      groupMamberList:['j',],
      joinable: true
    },
    {
      groupId: 11,
      groupName: "temp name 011",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      groupMaster:'k',
      groupMamberList:['k'],
      joinable: true
    },
  ]);
  const [generalTimerData, setTimerData] = useState([
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 1',
    studyTime: 3600,
    studyDate: "2023-11-01"
    },
    {userNum: 0,
    userName:"관리자",
    studySubject: '테스트 과목 2',
    studyTime: 3601,
    studyDate: "2023-11-02"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 3',
    studyTime: 3602,
    studyDate: "2023-11-03"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 4',
    studyTime: 3603,
    studyDate: "2023-11-04"
    },
    {userNum: 0,
    userName:"관리자",
    studySubject: '테스트 과목 5',
    studyTime: 3604,
    studyDate: "2023-11-05"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 6',
    studyTime: 3605,
    studyDate: "2023-11-06"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 7',
    studyTime: 3606,
    studyDate: "2023-11-06"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 8',
    studyTime: 3607,
    studyDate: "2023-11-06"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 9',
    studyTime: 3607,
    studyDate: "2023-11-07"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 10',
    studyTime: 3607,
    studyDate: "2023-11-07"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 11',
    studyTime: 3607,
    studyDate: "2023-11-07"
    },
    {userNum: 1,
    userName: "a",
    studySubject: '테스트 과목 12',
    studyTime: 3607,
    studyDate: "2023-11-08"
    },
    {userNum: 1,
    userName: "a",
    studySubject: '테스트 과목 13',
    studyTime: 3607,
    studyDate: "2023-11-08"
    },
    {userNum: 1,
    userName: "a",
    studySubject: '테스트 과목 14',
    studyTime: 3607,
    studyDate: "2023-11-10"
    },
    {userNum: 2,
    userName: "b",
    studySubject: '테스트 과목 15',
    studyTime: 3607,
    studyDate: "2023-11-15"
    },
    {userNum: 2,
    userName: "b",
    studySubject: '테스트 과목 16',
    studyTime: 3607,
    studyDate: "2023-11-15"
    },
    {userNum: 3,
    userName: "c",
    studySubject: '테스트 과목 17',
    studyTime: 3607,
    studyDate: "2023-11-15"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 18',
    studyTime: 3607,
    studyDate: "2023-11-15"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 19',
    studyTime: 3607,
    studyDate: "2023-11-16"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 20',
    studyTime: 3607,
    studyDate: "2023-11-20"
    },
    {userNum: 0,
    userName: "관리자",
    studySubject: '테스트 과목 21',
    studyTime: 3601,
    studyDate: "2023-11-26"
    },
    {userNum: 1,
    userName: "a",
    studySubject: '테스트 과목 22',
    studyTime: 3602,
    studyDate: "2023-11-26"
    },
    {userNum: 2,
    userName: "b",
    studySubject: '테스트 과목 22',
    studyTime: 3602,
    studyDate: "2023-11-22"
    },
    {userNum: 2,
    userName: "b",
    studySubject: '테스트 과목 22',
    studyTime: 3602,
    studyDate: "2023-11-23"
    },
  ]);
  const [generalCalendarData, setCalendarData] = useState([
    {
      userNum: 0,
      attendanceDate: "2023-11-01",
      checkBool:false,
    },
    {
      userNum: 0,
      attendanceDate: "2023-11-02",
      checkBool:false,
    },
    {
      userNum: 0,
      attendanceDate: "2023-11-03",
      checkBool:false,
    },
    {
      userNum: 0,
      attendanceDate: "2023-11-04",
      checkBool:false,
    },
    {
      userNum: 0,
      attendanceDate: "2023-11-05",
      checkBool:false,
    },
    {
      userNum: 0,
      attendanceDate: "2023-11-06",
      checkBool:false,
    },
  ]);
  const [generalBoardData, setGeneralBoardData] = useState([
    {
      id: 1,
      title: "샘플 글 1",
      author: "작성자 1",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 2,
      title: "샘플 글 2",
      author: "작성자 2",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 3,
      title: "샘플 글 3",
      author: "작성자 3",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 4,
      title: "샘플 글 4",
      author: "작성자 4",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 5,
      title: "샘플 글 5",
      author: "작성자 5",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 6,
      title: "샘플 글 6",
      author: "작성자 6",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 7,
      title: "샘플 글 7",
      author: "작성자 7",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 8,
      title: "샘플 글 8",
      author: "작성자 8",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 9,
      title: "샘플 글 9",
      author: "작성자 9",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 10,
      title: "샘플 글 10",
      author: "작성자 10",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 11,
      title: "샘플 글 11",
      author: "작성자 11",
      content: "a",
      writeDate: "2023-05-11"
    },
    {
      id: 12,
      title: "샘플 글 12",
      author: "작성자 12",
      content: "a",
      writeDate: "2023-05-11"
    },
  ]);
  const [generalMileageData, setMileageData] = useState([
    {
      userNum:0,
      givenType: 'oneHourStudy',
      recordingTime: 8,
      givenMileage: 8000,
      givenDate:'2023-11-06',
    }
  ]);

// generalFunc
  // control User Data Func
  const signupAction = (num, name, id, pw, email, phone) => {
    setGeneralUserData([...generalUserData,{
      userNum: num,
      userName: name,
      userId: id,
      userPassword: pw,
      userEmail: email,
      userPhoneNum: phone,
      userMileage: "",
      userInterest: "",
      userJoinGroup: []
    }])
  };
  const loginAction = ( num, name,  id, pw ) =>{
    setCurrentLoginUser({
      userNum: num,
      userName: name,
      userId: id,
      userPW: pw,
    });
  };
  //control Timer Data Func
  const recordTimeToUser = (id, subject, time, date) => {
    setTimerData([...generalTimerData,
      {
      userNum: id,
      userName: generalUserData[id].userName,
      studySubject: subject,
      studyTime: time,
      studyDate: date,
    }])
  }
  // control Calendar Data Func
  
  //control Group Data Func
  const joinGroupAction = (id, newGroup) => {
    generalUserData[id].userJoinGroup = [...generalUserData[id].userJoinGroup ,newGroup];
    let findIdx = generalUserData.findIndex(UserData => UserData.id === id);
    let copdiedData = [...generalBoardData];
    copdiedData[findIdx].title = newGroup;

  };
  const handleMaxMember = ( id ) => {
    if(generalGroupData[id].groupMaxMember === generalGroupData[id].groupCurrentMember){
      return true; // Max
    }else return false; // None-max
  }
  //control Board Data Func
  const modifyPostAction = ( currentPostId, title, content) => {
    let findIdx = generalBoardData.findIndex(BoardData => BoardData.id === currentPostId);
    let copdiedData = [...generalBoardData];
    copdiedData[findIdx].title = title;
    copdiedData[findIdx].content = content;
    setGeneralBoardData(copdiedData);
  }
  // control Profile Data Func

  //handle
  const handleLogin = (bool) => setIsLogin(Boolean(bool));

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header-container">
          <NavigationBar 
                generalUserData={generalUserData}
                currentLoginUser={currentLoginUser}
                loginAction={loginAction}
                handleLogin={handleLogin}
                isLogin={isLogin}
                generalCalendarData={generalCalendarData}
                setCalendarData={setCalendarData}
            />
        </header>
        <main className="main-container">
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route
              path="/join"
              exact element={
                <Signup
                  generalUserData={generalUserData}
                  signupAction={signupAction}
                />
              }
            />
          {isLogin?
          <>
              <Route
              path="/Timer"
              exact
              element={
                <Timer
                  isLogin={isLogin}
                  currentLoginUser={currentLoginUser}
                  generalTimerData={generalTimerData}
                  setTimerData={setTimerData}
                  recordTimeToUser={recordTimeToUser}
                  generalMileageData={generalMileageData}
                  setMileageData={setMileageData}
                />
              }
            />
            <Route 
              path="/Calendar" 
              exact 
              element={<CalendarPage 
                currentLoginUser={currentLoginUser}
                generalTimerData={generalTimerData}
                generalCalendarData={generalCalendarData}
                isLogin={isLogin}/>} />
            <Route
              path="/StudyGroup"
              exact
              element={
                <StudyGroup
                  isLogin={isLogin}
                  currentLoginUser={currentLoginUser}
                  generalUserData={generalUserData}
                  setGeneralUserData={setGeneralUserData}
                  generalGroupData={generalGroupData}
                  setGeneralGroupData={setGeneralGroupData}
                  generalTimerData={generalTimerData}
                  setTimerData={setTimerData}
                  joinGroupAction={joinGroupAction}
                  handleMaxMember={handleMaxMember}
                />
              }
            />
            <Route 
              path="/creategroup"
              exact
              element={<CreateGroup
                isLogin={isLogin}
                currentLoginUser={currentLoginUser}
                generalUserData={generalUserData}
                setGeneralUserData={setGeneralUserData}
                generalGroupData={generalGroupData}
                setGeneralGroupData={setGeneralGroupData}
              />}/>
            <Route
              path="/currentgroup"
              exact
              element={<CurrentGroup
                isLogin={isLogin}
                currentLoginUser={currentLoginUser}
                generalUserData={generalUserData}
                setGeneralUserData={setGeneralUserData}
                generalGroupData={generalGroupData}
                setGeneralGroupData={setGeneralGroupData}
                generalTimerData={generalTimerData}
                setTimerData={setTimerData}/>}/>
            <Route
              path="/Board"
              exact
              element={
                <Board
                  isLogin={isLogin}
                  currentLoginUser={currentLoginUser}
                  generalUserData={generalUserData}
                  generalBoardData={generalBoardData}
                  setGeneralBoardData={setGeneralBoardData}
                  modifyPostAction={modifyPostAction}
                />
              }
            />
            <Route path="/WritePost" 
            exact 
            element={<WritePost
              currentLoginUser={currentLoginUser}
              generalUserData={generalUserData}
              generalBoardData={generalBoardData}
              setGeneralBoardData={setGeneralBoardData}/>}/>
            
            <Route path="/MileageShop" 
              exact 
              element={<MileageShop 
                currentLoginUser={currentLoginUser}
                generalUserData={generalUserData}
                setGeneralUserData={setGeneralUserData}
                generalMileageData={generalMileageData}
                setMileageData={setMileageData}/>} />
            <Route 
              path="/Inquery" 
              exact 
              element={<Inquery 
                currentLoginUser={currentLoginUser}/>} />
            <Route
              path="/Profile"
              exact
              element={
                <Profile
                  isLogin={isLogin}
                  currentLoginUser={currentLoginUser}
                  generalUserData={generalUserData}
                  setGeneralUserData={setGeneralUserData}
                  generalGroupData={generalGroupData}
                  setGeneralGroupData={setGeneralGroupData}
                  generalTimerData={generalTimerData}
                  setTimerData={setTimerData}
                  generalCalendarData={generalCalendarData}
                  setCalendarData={setCalendarData}
                  generalMileageData={generalMileageData}
                  setMileageData={setMileageData}
                />
              }
            />
            </>
            :<></>}
            <Route 
              path="/*" 
              exact element={<NotExistPage
              isLogin={isLogin} />} />
          </Routes>
          
        </main>
        <footer className="footer-container">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}
// ReactModal.setAppElement('#root')

export default App;
