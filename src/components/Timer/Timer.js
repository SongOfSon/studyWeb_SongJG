// React import
import React, { useEffect, useState } from 'react';

// custom Package import
import moment from 'moment';
// custom components import
import CustomPagination from '../Common/CustomPagination';

// CSS import
import "./Timer.css"

const Timer = ( props ) => {
// user Data
  const userNum = props.currentLoginUser.userNum;
// timer Data
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [record, setRecord] = useState([])
  const date = new Date();
  const dateFormat = moment(date).format('YYYY-MM-DD')
  const [subject, setSubject] = useState('');

// Pagination을 위한 변수
    const [limit, setLimit] = useState(10); // 한 페이지에 나타나는 수
    const [page, setPage] = useState(1);    // 현재 페이지 저장 변수
    const offset = (page - 1) * limit;

// handle
    const handleRecordTimer = e => setSubject(e.target.value);
    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const startTimer = () => {
      if(props.isLogin !== false){
        if(subject !== null && subject !== ''){
          setIsActive(!isActive)
        }else alert('과목을 입력하세요');
      }else alert('로그인이 필요한 서비스 입니다.');
    }
    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
      if(time !== 0){
        setRecord([...record,{
          userNum:'',
          subject:subject,
          recordTime:displayTime(),
        }]);
        props.recordTimeToUser(userNum, subject, time, dateFormat);
        console.log(props.generalTimerData);
        setSubject(null);
        setIsActive(false);
        setTime(0);
      }
    };

    const displayTime = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

     // 페이지 변경 시 멈춤 기능 추가
     const stopTimer = (event) => {
      event.preventDefault();
      resetTimer();
    };
    window.addEventListener('beforeunload', stopTimer);
    document.addEventListener('visibilitychange', stopTimer);

// UI
  return (
    <div className="timer-container">
      <div className='timer-container-left'>
        <h1 className="timer-title">Study Timer</h1>
          <div className="timer-display">{displayTime()}</div>
            {!isActive ? 
              <div className="timer-controls">
                <button 
                 className="timer-button" onClick={startTimer}>
                  <img src={process.env.PUBLIC_URL + './TimerIcons/playBtn.png'}alt='playBtn'/>
                </button>
                <input 
                  className="timer-subject-input"
                  type='text' 
                  value={subject} 
                  onChange={e => handleRecordTimer(e)}/>
              </div>
              :
              <div className="timer-controls">
                <button className="timer-button" onClick={toggleTimer}>
                  <img src={process.env.PUBLIC_URL + './TimerIcons/pauseBtn.png'}alt='pauseBtn'/>
                </button>
                <button className="timer-button" onClick={resetTimer}>
                  <img src={process.env.PUBLIC_URL + './TimerIcons/resetBtn.png'}alt='resetBtn'/>
                </button>
              </div>
             }
      </div>
      <div className='timer-container-right'>
          <table className='timer-record-table'>
              <thead className='timer-record-table-header'>
                  <tr>
                      <th>과목</th>
                      <th>시간</th>
                  </tr>
              </thead>
              <tbody className='timer-record-table-body'>
                  {record.slice(offset, offset + limit).map((record, index) =>(
                  <tr key={index}>
                      <td>{record.subject}</td>
                      <td>{record.recordTime}</td>
                  </tr>))
                  }
              </tbody>
          </table>
          {record.length > 10 ?
          <div className="Timer-table-Footer-Pagination">
            <CustomPagination total={record.length} limit={limit} page={page} setPage={setPage}/>
          </div>:<></>}
        </div>
    </div>
  );
};

export default Timer;