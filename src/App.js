import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages Import
import {
  Main,
  Board,
  Calendar,
  Login,
  MileageShop,
  Profile,
  Signup,
  StudyGroup,
  Timer,
  Inquery,
} from "./IndexControl/PagesList.js";

// Components Import
import {
  NavigationBar,
  Footer,
  NotExistPage,
  WritePost,
  CreateGroup,
} from "./IndexControl/ComponentsList.js";
import CurrentGroup from "./Pages/CurrentGroup.js";

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
      groupMaster:'admin',
      groupMamberList:['admin',],
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
    studyTime: 3661,
    studyDate: "2023-11-14"
    },
    {userNum: 0,
    userName:"관리자",
    studySubject: '테스트 과목 2',
    studyTime: 7241,
    studyDate: "2023-11-14"
    },
    {userNum: 0,
    userName: "관리자",
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

  const [generalMileageData, setMileageData] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/home")
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, []);

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
            />
        </header>
        <main className="main-container">
          <Routes>
            <Route path="/" exact element={<Main />} />
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
                />
              }
            />
            <Route 
              path="/Calendar" 
              exact 
              element={<Calendar 
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
                generalUserData={generalUserData}/>} />
            <Route 
              path="/Inquery" 
              exact 
              element={<Inquery 
                currentLoginUser={currentLoginUser}/>} />
            <Route
              path="/join"
              exact
              element={
                <Signup
                  generalUserData={generalUserData}
                  signupAction={signupAction}
                />
              }
            />
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
            <Route path="/*" exact element={<NotExistPage />} />
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
