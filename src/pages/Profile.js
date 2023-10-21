import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import '../styles/Profile.css'

const Profile = () => {

    const [name, setName] = useState('User');       // 이름
    const [username, setUsername] = useState('');   // ID

    const navigate = useNavigate('');

    return (
        <div className="ProfileContainer">
            <h2> <div className="nameContainer">{name}</div> 님의 정보 입니다. </h2>
            
            <table className="ClientInfoTable">
                <tr>    {/* 사용자명 + 학습한 시간 */}
                    <td className="makeLine" colSpan="2">ID : {username} 님의 학습한 시간</td>
                    <td></td>
                </tr>
                <tr>    {/* 학습한 시간 표시 */}
                    <div className="dataViewLine">{}시간 {}분 {}초 입니다</div>
                </tr>
                <tr>
                    <td className="makeLine">보유 마일리지</td>
                    <td className="makeLine"><button onClick={(e)=> navigate('/calendar')}>적립 내역 확인하기</button></td>
                </tr>
                <tr>    {/* 보유 마일리지 표시 */}
                    <div className="dataViewLine">Point</div>
                </tr>
                <tr>
                    <td className="makeLine" >등록된 관심 분야</td>
                    <td className="makeLine"><button>관심분야 수정하기</button></td>
                </tr>
                <tr>    {/* 사용자가 등록한 관심분야 표시 */}
                    <div className="dataViewLine">NULL</div>
                </tr>
                <tr>
                    <td className="makeLine">현재 가입한 스터디 그룹</td>
                    <td className="makeLine"><button onClick={(e)=> navigate('/study_group')}>스터디 그룹 찾기</button></td>
                </tr>
                <tr>    {/* 사용자가 가입한 스터디 그룹 표시*/}
                    <div className="dataViewLine">NULL</div>
                </tr>
            </table>
        </div>
    )
}

export default Profile;