// React import
import React, { useState, useEffect } from 'react';

// custom components import
import CustomPagenation from "../Common/CustomPagination"
import moment from 'moment';

// CSS import
import './MileageListModal.css'

const MileageListModal = ( props ) => {
  const [checkModal, setCheckModal] = useState(false);
  const timerData = props.generalTimerData;
  const today = new Date();
  const formatDate = moment(today).format('YYYY-MM-DD');

  // Pagination을 위한 변수
  const [limit, setLimit] = useState(15);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  // func
  const handleModal = boolValue => {
    setCheckModal(boolValue);
  }

  const studyTime = () => {
    let studyTimeSum = 0;
    for(let i = 0; i< timerData.length; i++){
      if(props.generalTimerData[i].userNum === props.currentLoginUser.userNum){
        studyTimeSum += props.generalTimerData[i].studyTime;
      }
    }
    return studyTimeSum;
  };
// Mileage given type
  const oneHourStudyTypeMileage = () => {
    let remainsTime = Math.floor(studyTime()/3600);
    let giveMileage = 0;
    let copiedUserData = props.generalUserData;

    for(let i = 0 ; i < props.generalMileageData.length; i++ ){
      if(props.generalMileageData[i].userNum === props.currentLoginUser.userNum){
        if(props.generalMileageData[i].givenType === 'oneHourStudy'){
          remainsTime = remainsTime - props.generalMileageData[i].recordingTime;
        }}
    }if(remainsTime > 0 ){
      giveMileage = remainsTime * 100;
      copiedUserData[props.currentLoginUser.userNum].userMileage = copiedUserData[props.currentLoginUser.userNum].userMileage + giveMileage;
      props.setGeneralUserData(copiedUserData);
      props.setMileageData([...props.generalMileageData, {
        userNum: props.currentLoginUser.userNum,
        givenType: 'oneHourStudy',
        recordingTime: remainsTime,
        givenMileage: giveMileage,
        givenDate: formatDate,
      }]);
      return alert(`지급이 완료 되었습니다
      미지급된 시간 : ${remainsTime} 시간`);
    }else if(remainsTime < 0 || remainsTime === 0){
      return alert('받을 수 있는 마일리지가 없습니다');
    }
  }
  const attendanceTypeMileage = () => {
    let tempNum = 0;
    let giveMileage = 0;
    let copiedUserData = props.generalUserData;
    let copiedCal = props.generalCalendarData;
    let countTrue = 0;
    
    for(tempNum ; tempNum < props.generalCalendarData.length ; tempNum++){
      if(props.currentLoginUser.userNum === props.generalCalendarData[tempNum].userNum){
        if(props.generalCalendarData[tempNum].checkBool === false){
          copiedCal[tempNum].checkBool = true;
          giveMileage = giveMileage + 100;
          countTrue += 1 ;
        }
      }
    }
    if(countTrue > 0){
    copiedUserData[props.currentLoginUser.userNum].userMileage = copiedUserData[props.currentLoginUser.userNum].userMileage + giveMileage;
    props.setGeneralUserData(copiedUserData);
    props.setCalendarData(copiedCal);
    props.setMileageData([...props.generalMileageData, {
      userNum: props.currentLoginUser.userNum,
      givenType: 'attendance',
      givenMileage: giveMileage,
      givenDate: formatDate,
    }]);
    countTrue = 0;
    return alert('지급이 완료 되었습니다');
    }else if( countTrue === 0 ){
      return alert('받을 수 있는 마일리지가 없습니다');
    }
  }

  useEffect(()=>{

  },[])

  return (
  <>
    <div 
      className='Mileage-list-check-button'
      onClick={() => handleModal(true)}>
      마일리지 적립내역
    </div>
    {checkModal?
<>
  <div className='Mileage-list-background'>
    <div className='Mileage-list-modal'>
      <div className='Mileage-list-modal-header'>
        <button 
          className='Mileage-list-modal-header-exit-button'
          onClick={() => handleModal(false)}>
            X</button>
      </div>
      <div className='Mileage-list-modal-body'>
          <div className='Mileage-list-modal-body-table'>
            <div className='Mileage-list-modal-body-table-header'>
              <div className='Mileage-list-modal-body-table-header-given-mileage'>
                지급된 마일리지</div>
              <div className='Mileage-list-modal-body-table-header-given-date'>
                지급 일자</div>
            </div>
            <div className='Mileage-list-modal-body-table-body'>
            {props.generalMileageData
              .slice(offset, offset + limit)
              .map((mileageData, idx, timeT) => (
                mileageData.userNum === props.currentLoginUser.userNum ?
              <>
                <div 
                  key={mileageData.idx}
                  className='Mileage-list-modal-body-td'>
                    {mileageData.givenMileage}
                </div>
                <div 
                  key={mileageData.idx}
                  className='Mileage-list-modal-body-td'>
                  {mileageData.givenDate}
                </div>
              </>
            :<></>
            ))}</div>
        </div>
      </div>
      <div className='Mileage-list-modal-footer'>
        <div className='Mileage-list-CustomPagenation-con'>
          <CustomPagenation
            total={props.generalTimerData.length} 
            limit={limit} 
            page={page} 
            setPage={setPage}/>
        </div>
        <div className='Mileage-list-modal-footer-buttons'>
          <button 
            className='Mileage-list-modal-footer-check-mileage-oneHourStudyType-button'
            onClick={()=>oneHourStudyTypeMileage()}>
            시간 확인하기</button>
            <button 
            className='Mileage-list-modal-footer-check-mileage-attendanceType-button'
            onClick={()=>attendanceTypeMileage()}>
            출석 확인하기</button>
        </div>
      </div>
    </div>
  </div>
</>
    :<></>}
  </>
  );
};

export default MileageListModal;