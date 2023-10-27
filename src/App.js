import React, { useState } from "react";

import TopMenuBar from "./components/TopMenuBar";

function App() {
  
  //generalData
  const [generalUserData, setGeneralUserData] = useState([{
    userIdNum : 0,
    userName : '송정근',
    userId : "admin",
    userPassword : "1234",
    userEmail : '',
    userPhoneNum : '',
    userMileage : '',
    userInterest : '',
    userJoinGroup : [ ],
  }]);
  const [currentLoginUser, setCurrentLoginUser] = useState('');
  const [generalGroupData, setGeneralGroupData] = useState([{
    groupId : 0,
    groupName : '',
    groupTitle : '',
    groupContent : '',
    groupInterest : '',
    groupMember : 0,
    joinable : false,
  },
  { groupId: 1, groupName: "temp name 001", groupTitle: "temp title", groupInterest: "temp field", groupMember: 10, joinable: false },
  { groupId: 2, groupName: "temp name 002", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 3, groupName: "temp name 003", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 4, groupName: "temp name 004", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 5, groupName: "temp name 005", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 6, groupName: "temp name 006", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 7, groupName: "temp name 007", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 8, groupName: "temp name 008", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 9, groupName: "temp name 009", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 10, groupName: "temp name 010", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 11, groupName: "temp name 011", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 12, groupName: "temp name 012", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 13, groupName: "temp name 013", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 14, groupName: "temp name 014", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 15, groupName: "temp name 015", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 16, groupName: "temp name 016", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 17, groupName: "temp name 017", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 18, groupName: "temp name 018", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 19, groupName: "temp name 019", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 20, groupName: "temp name 020", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 21, groupName: "temp name 021", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 22, groupName: "temp name 022", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  { groupId: 23, groupName: "temp name 023", groupTitle: "temp title", groupInterest: "temp field", groupMember: 1, joinable: true },
  ]);
  const [generalTimerData, setTimerData]=useState([{
    userName : generalUserData.userName,
    userTotalStudyTime : '',
  }]);
  const [generalCalendarData, setCalendarData] = useState([{
    userName :  generalUserData.userName,
    userCalMemo : '',
  }]);
  const [generalBoardData, setGeneralBoardData] = useState([
  { id: 1, title: "샘플 글 1", author: "작성자 1",content : '', writeDate: "2023-05-11"},
  { id: 2, title: "샘플 글 2", author: "작성자 2", content : '', writeDate: "2023-05-11"},
  { id: 3, title: "샘플 글 3", author: "작성자 3", content : '', writeDate: "2023-05-11"},
  { id: 4, title: "샘플 글 4", author: "작성자 4", content : '',writeDate: "2023-05-11"},
  { id: 5, title: "샘플 글 5", author: "작성자 5", content : '',writeDate: "2023-05-11"},
  { id: 6, title: "샘플 글 6", author: "작성자 6", content : '',writeDate: "2023-05-11"},
  { id: 7, title: "샘플 글 7", author: "작성자 7", content : '',writeDate: "2023-05-11"},
  { id: 8, title: "샘플 글 8", author: "작성자 8", content : '',writeDate: "2023-05-11"},
  { id: 9, title: "샘플 글 9", author: "작성자 9", content : '',writeDate: "2023-05-11"},
  { id: 10, title: "샘플 글 10", author: "작성자 10", content : '',writeDate: "2023-05-11"},
  { id: 11, title: "샘플 글 11", author: "작성자 11", content : '',writeDate: "2023-05-11"},
  { id: 12, title: "샘플 글 12", author: "작성자 12", content : '',writeDate: "2023-05-11"},
  { id: 13, title: "샘플 글 13", author: "작성자 13", content : '',writeDate: "2023-05-11"},
  { id: 14, title: "샘플 글 14", author: "작성자 14", content : '',writeDate: "2023-05-11"},
  { id: 15, title: "샘플 글 15", author: "작성자 15", content : '',writeDate: "2023-05-11"},
  { id: 16, title: "샘플 글 16", author: "작성자 16", content : '',writeDate: "2023-05-11"},
  { id: 17, title: "샘플 글 17", author: "작성자 17", content : '',writeDate: "2023-05-11"},
  { id: 18, title: "샘플 글 18", author: "작성자 18", content : '',writeDate: "2023-05-11"},
  { id: 19, title: "샘플 글 19", author: "작성자 19", content : '',writeDate: "2023-05-11"},
  { id: 20, title: "샘플 글 20", author: "작성자 20", content : '',writeDate: "2023-05-11"},
  { id: 21, title: "샘플 글 21", author: "작성자 21", content : '',writeDate: "2023-05-11"},
  { id: 22, title: "샘플 글 22", author: "작성자 22", content : '',writeDate: "2023-05-11"},
  { id: 23, title: "샘플 글 23", author: "작성자 23", content : '',writeDate: "2023-05-11"},
  { id: 24, title: "샘플 글 24", author: "작성자 24", content : '',writeDate: "2023-05-11"},
  { id: 25, title: "샘플 글 25", author: "작성자 25", content : '',writeDate: "2023-05-11"},
  { id: 26, title: "샘플 글 26", author: "작성자 26", content : '',writeDate: "2023-05-11"},
  { id: 27, title: "샘플 글 27", author: "작성자 27", content : '',writeDate: "2023-05-11"},
  { id: 28, title: "샘플 글 28", author: "작성자 28", content : '',writeDate: "2023-05-11"},
  { id: 29, title: "샘플 글 29", author: "작성자 29", content : '',writeDate: "2023-05-11"},
  { id: 30, title: "샘플 글 30", author: "작성자 30", content : '',writeDate: "2023-05-11"},
  ]);
  
  const [generalMileageData, setMileageData] = useState({

  });

  // generalFunc
    // control User Data Func
    const postNewUserData = newUserData => 
      setGeneralUserData([...generalUserData, newUserData]);
    const [isLogin, setIsLogin] = useState(true);
    
    //control Group Data Func

    //control Board Data Func
  //handle
  const handleLogin = e => setIsLogin(e.target.value);

  //UI
  return (
    <>
      <TopMenuBar 
        //State props
        generalUserData={generalUserData}
        setGeneralUserData={setGeneralUserData}
        currentLoginUser={currentLoginUser}
        setCurrentLoginUser={setCurrentLoginUser}
        generalGroupData={generalGroupData}
        setGeneralGroupData={setGeneralGroupData}
        generalTimerData={generalTimerData}
        setTimerData={setTimerData}
        generalCalendarData={generalCalendarData}
        setCalendarData={setCalendarData}
        generalBoardData={generalBoardData}
        setGeneralBoardData={setGeneralBoardData}
        generalMileageData={generalMileageData}
        setMileageData={setMileageData}
        // Func props
        handleLogin={handleLogin}
        isLogin={isLogin}
        setIsLogin={setIsLogin}/>
    </>
  );
}

export default App;
