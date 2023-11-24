// React import 
import React, { useState } from 'react';

// custom Package import
import Calendar from 'react-calendar';
import moment from 'moment';

// custom components import
import CustomPagination from '../Common/CustomPagination';

// CSS import
import "./Calendar.css"

const CalendarPage = ( props ) => {

// calendar Data
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [studyTime, setStudyTime] = useState({});
    const timerData = props.generalTimerData;
    const formatSeletedDate = moment(selectedDate).format('YYYY-MM-DD');

// Pagination을 위한 변수
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

// handle
  const handleDateChange = (date) => setSelectedDate(date);
 
  const todayStudyTime = () => {
    let studyTimeSum = 0;
    for(let i = 0; i < timerData.length; i++){
      if(props.generalTimerData[i].userNum === props.currentLoginUser.userNum){
        if(props.generalTimerData[i].studyDate === formatSeletedDate){
          studyTimeSum += props.generalTimerData[i].studyTime;
        }
      }
    }
    const hours = Math.floor(studyTimeSum / 3600);
    const minutes = Math.floor((studyTimeSum % 3600) / 60);
    const seconds = studyTimeSum % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  };
  const allStudyTime = () => {
    let studyTimeSum = 0;
    for(let i = 0; i< timerData.length; i++){
      if(props.generalTimerData[i].userNum === props.currentLoginUser.userNum){
        studyTimeSum += props.generalTimerData[i].studyTime;
      }
    }
    const hours = Math.floor(studyTimeSum / 3600);
    const minutes = Math.floor((studyTimeSum % 3600) / 60);
    const seconds = studyTimeSum % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  };

// UI
  return (
    <div className="Calendar-wrapper">
      <div className='Calendar-container'>
          <Calendar 
            onChange={handleDateChange}
            value={selectedDate}
            formatDay={(locale, date) => moment(date).format("DD")}
            showNeighboringMonth={false}
            minDetail="year"
            navigationLabel={null}
          />
      </div>
      <div className='Calendar-recordTime-table-container'>
        <div className='Calendar-recordTime-table-top'>
            { props.isLogin !== false?
             timerData
              .map((data, idx, dataT)=>(
                props.currentLoginUser.userNum === props.generalTimerData[idx].userNum ?
                props.generalTimerData[idx].studyDate === formatSeletedDate?
                  <div className='Calendar-recordTime-table-top-head'>
                    <div>{data.studySubject}</div>
                    <div>
                      {String(Math.floor(data.studyTime / 3600)).padStart(2, '0')}
                      :{String(Math.floor((data.studyTime % 3600) / 60)).padStart(2, '0')}
                      :{String(Math.floor((data.studyTime% 60))).padStart(2, '0')}
                    </div>
                  </div>
              :<></>:<></>
            )):<div className='Calendar-recordTime-table-top-head-alert'>로그인이 필요합니다</div>}
          <div className='Calendar-recordTime-table-top-body'>
          </div>
        </div>
        
          { props.isLogin !== false?
          <div className='Calendar-recordTime-table-bottom'>
            <div className='Calendar-recordTime-table-bottom-today'>
              <div className='Calendar-recordTime-table-bottom-today-left'>
                금일 학습 시간</div>
              <div className='Calendar-recordTime-table-bottom-today-right'>
                {todayStudyTime()}</div>
            </div>
            <div className='Calendar-recordTime-table-bottom-allday'>
              <div className='Calendar-recordTime-table-bottom-allday-left'>
                총 학습 시간</div>
              <div className='Calendar-recordTime-table-bottom-allday-right'>
                {allStudyTime()}</div>
            </div>
          </div> 
          :<></>}
        </div>
      
    </div>
  );
}

export default CalendarPage;