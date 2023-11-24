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
      giveMileage = remainsTime * 1000;
      copiedUserData[props.currentLoginUser.userNum].userMileage = copiedUserData[props.currentLoginUser.userNum].userMileage + giveMileage;
      props.setGeneralUserData(copiedUserData);
      props.setMileageData([...props.generalMileageData, {
        userNum: props.currentLoginUser.userNum,
        givenType: 'oneHourStudy',
        recordingTime: remainsTime,
        givenMileage: giveMileage,
        givenDate: formatDate,
      }]);
      return alert('지급이 완료 되었습니다');
    }else if(remainsTime < 0 || remainsTime === 0){
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
            className='Mileage-list-modal-footer-check-mileage-button'
            onClick={()=>oneHourStudyTypeMileage()}>
            마일리지 확인하기</button>
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