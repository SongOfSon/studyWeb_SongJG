// React import
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages,Components import
  // Pages
  import Main from './pages/Main/Main';
  import Signup from './components/Signup/Signup';
  import Timer from './pages/Timer/Timer';
  import Calendar from './pages/Calendar/Calendar';
  import StudyGroup from './pages/StudyGroup/StudyGroup';
  import Board from './pages/Board/Board';
  import MileageShop from './pages/MileageShop/MileageShop';
  import Inquery from './pages/Inquery/Inquery';

  // Components
  import Header from './components/Header/Header';
  import Navbar from './components/Navbar/Navbar';
  import Footer from './components/Footer/Footer';
  import NotExistPage from './pages/NotExistPage/NotExistPage';
  import Profile from './components/Profile/Profile';

// CSS import
import './App.css';

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
      userMileage: "",
      userInterest: "",
      userJoinGroup: [5]
    }
  ]);
  const [currentLoginUser, setCurrentLoginUser] = useState({
    userNum: null,
    userName: '사용자',
    userId:null,
    userPW:null,
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
      joinable: false
    },
    {
      groupId: 1,
      groupName: "temp name 001",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 10,
      joinable: false
    },
    {
      groupId: 2,
      groupName: "temp name 002",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 3,
      groupName: "temp name 003",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 4,
      groupName: "temp name 004",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 5,
      groupName: "temp name 005",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 6,
      groupName: "temp name 006",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 7,
      groupName: "temp name 007",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 8,
      groupName: "temp name 008",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 9,
      groupName: "temp name 009",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 10,
      groupName: "temp name 010",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
    {
      groupId: 11,
      groupName: "temp name 011",
      groupInfo: "temp info", 
      groupInterest: "",
      groupMaxMember: 10,
      groupCurrentMember: 1,
      joinable: true
    },
  ]);
  const [generalTimerData, setTimerData] = useState([
    {
      userNum: 0,
      userName: generalUserData[0].userName,
      studySubject: '테스트 과목 1',
      studyTime: 3661,
      studyDate: "2023-11-14"
    },{
      userNum: 0,
      userName: generalUserData[0].userName,
      studySubject: '테스트 과목 2',
      studyTime: 7241,
      studyDate: "2023-11-14"
    },{
      userNum: 0,
      userName: generalUserData[0].userName,
      studySubject: '테스트 과목 3',
      studyTime: 6100,
      studyDate: "2023-11-14"
    },
  ]);
  const [generalCalendarData, setCalendarData] = useState([
    {
      userNum: "",
      userName: "",
      userCalMemo: ""
    }
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
  const changeGroupMember = (groupId) => {
    const copiedData = generalGroupData;
    copiedData[groupId].groupCurrentMember --
    if(copiedData[groupId].groupCurrentMember === 0){
      let filteredData = copiedData.filter( id => id.groupId !== groupId);
      return setGeneralGroupData(filteredData);
    }
    setGeneralBoardData(copiedData);
  }
   //handle
   const handleLogin = (bool) => setIsLogin(Boolean(bool));

// UI
  return (
    <>
    <BrowserRouter>
      <div className="App">
          <div className='App-Header-con'>
            <Header  
                generalUserData={generalUserData}
                currentLoginUser={currentLoginUser}
                loginAction={loginAction}
                handleLogin={handleLogin}
                isLogin={isLogin}/>
            <Navbar />
          </div>
          <div className='App-Body-con'>
            <Routes>
              <Route path='/' exact element={<Main />}/>
              <Route path='/signup' exact element={<Signup 
                generalUserData={generalUserData}
                signupAction={signupAction}/>}/>
              <Route path='/timer' exact element={<Timer 
                isLogin={isLogin}
                currentLoginUser={currentLoginUser}
                generalTimerData={generalTimerData}
                setTimerData={setTimerData}
                recordTimeToUser={recordTimeToUser}/>}/>
              <Route path='/calendar' exact element={<Calendar 
                currentLoginUser={currentLoginUser}
                generalTimerData={generalTimerData}
                generalCalendarData={generalCalendarData}
                isLogin={isLogin}/>}/>
              <Route path='/studygroup' exact element={<StudyGroup 
                isLogin={isLogin}
                currentLoginUser={currentLoginUser}
                generalUserData={generalUserData}
                setGeneralUserData={setGeneralUserData}
                generalGroupData={generalGroupData}
                setGeneralGroupData={setGeneralGroupData}
                joinGroupAction={joinGroupAction}
                handleMaxMember={handleMaxMember}/>}/>
              <Route path='/board' exact element={<Board 
                 isLogin={isLogin}
                 currentLoginUser={currentLoginUser}
                 generalUserData={generalUserData}
                 generalBoardData={generalBoardData}
                 setGeneralBoardData={setGeneralBoardData}
                 modifyPostAction={modifyPostAction}/>}/>
              <Route path='/mileageshop' exact element={<MileageShop 
                generalUserData={generalUserData}/>}/>
              <Route path='/inquery' exact element={<Inquery 
                currentLoginUser={currentLoginUser}/>}/>
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
                  changeGroupMember={changeGroupMember}
                />
              }
            />
              <Route path='/*' exact element={<NotExistPage />}/>
            </Routes>
          </div>
          <div className='App-Footer-con'>
            <Footer/>
          </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
