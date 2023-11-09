import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Profile = ( props ) => {
    const navigate = useNavigate('');

    //userData
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [userStudyTime, setUserStudyTime] = useState({
        hour : 0,
        min: 0,
        sec: 0,
    });
    const [userMileage, setUserMileage] = useState(0);
    const [userInterst, setUserInterest] = useState(null);
    const [joinGroupList, setJoinGroupList] = useState([{
            groupName:'', 
            groupMemberNum : 0, 
            groupInterest:'',
        }]);

    const interstList = [
        {value:null, name: '선택'},
        {value:"국어", name : "국어"},
        {value:"수학", name : "수학"},
        {value:"영어", name : "영어"},
        {value:"과학", name : "과학"},
        {value:"역사", name : "역사"},
        {value:"프로그래밍", name : "프로그래밍"},
        {value:"공무원", name : "공무원"},
        {value:"자격증", name : "자격증"},
    ]

    //handle
    const [visableInter, setVisableInter] = useState(false);
    const handleVisableInter = e => setVisableInter(!visableInter);
    const [visableGroupList, setVisableGroupList] = useState(false);
    const handleVisableGroupList = e => setVisableGroupList(!visableGroupList);

    const handleInterest = e => setUserInterest(e.target.value);

    return (
        <div className="Profile-wrapper">
            <div className="Profile-header">
                <h2> 
                    <div className="Profile-userName-box"> {userName} </div> 
                    님의 정보 입니다. 
                </h2>
                <button className="Profile-membership-button">회원권</button>
            </div>
            <table className="ClientInfoTable">
                <tr>    {/* 사용자명 + 학습한 시간 */}
                    <td className="makeLine" colSpan="2">ID : {userId} 님의 학습한 시간</td>
                    <td></td>
                </tr>
                <tr>    {/* 학습한 시간 표시 */}
                    <div className="dataViewLine">{userStudyTime.hour}시간 {userStudyTime.min}분 {userStudyTime.sec}초 입니다</div>
                </tr>
                <tr>
                    <td className="makeLine">보유 마일리지</td>
                    <td className="makeLine"><button onClick={(e)=> navigate('/calendar')}>적립 내역 확인하기</button></td>
                </tr>
                <tr>    {/* 보유 마일리지 표시 */}
                    <div className="dataViewLine">{userMileage} Point</div>
                </tr>
                <tr>
                    <td className="makeLine">등록된 관심 분야</td>
                    <td className="makeLine"><button onClick={handleVisableInter}>관심분야 수정하기</button></td>
                </tr>
                <tr>    {/* 사용자가 등록한 관심분야 표시 */}
                    <div className="dataViewLine"> 
                      {!visableInter && <td>{userInterst}</td> }
                      {visableInter && 
                        <select 
                          onChange={handleInterest}
                          className= "selectInterstBox">
                        {interstList.map((option) => 
                          <option key={option.value} value={option.value}>
                            {option.name}
                          </option>)}
                      </select>}
                      {visableInter && 
                      <button className="selectBoxBtn" onClick={handleVisableInter}>
                        등록하기
                      </button>}
                    </div>
                </tr>
                <tr>
                    <td className="makeLine">현재 가입한 스터디 그룹</td>
                    <td className="makeLine"><button onClick={(e)=> navigate('/studygroup')}>스터디 그룹 찾기</button></td>
                </tr>
                <tr>    {/* 사용자가 가입한 스터디 그룹 표시*/}
                    {visableGroupList && 
                    <div className="dataViewLine">
                        그룹명      :{joinGroupList.groupName}<br/>
                        그룹멤버 수 :{joinGroupList.groupMemberNum}<br/>
                        관심분야    :{joinGroupList.groupInterest}
                    </div>}
                </tr>
            </table>
        </div>
    )
}

export default Profile;