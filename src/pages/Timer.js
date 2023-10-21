import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timeRecords, setTimeRecords] = useState([]);
  const [subject, setSubject] = useState("");
  const [totalStudyTime, setTotalStudyTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        setTotalStudyTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const resetTimer = () => {
    setTime(0);
  };

  const recordTime = () => {
    setTimeRecords((prevRecords) => [...prevRecords, { subject, time }]);
    resetTimer();
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours} h 
      ${minutes.toString().padStart(2, "0")} m 
      ${seconds.toString().padStart(2, "0")} s`;
  };

  return (
      <div>
        <div className="timerComponents">

          <div className="clockInTimer">
              {formatTime(time)}
          </div>

          <div className="headtitleInTimer">
            <h2>총 공부 시간: {formatTime(totalStudyTime)}</h2>
            <h2>현재 집중 시간: {formatTime(time)}</h2>

            <input
                type="text"
                placeholder="과목 이름"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <br/>
              
            <div className="btnInTimer">
                <button 
                  onClick={() => setTimerOn((prevTimerOn) => !prevTimerOn)}
                  className={`${timerOn? 'stopTimerBtn' : 'startTimerBtn'}`}
                  >{timerOn ? "멈춤" : "시작"}
                </button>

                <button 
                  style={{backgroundColor:'yellow'}} 
                  onClick={resetTimer}>초기화
                </button>
                
                <button 
                  style={{backgroundColor:'rgb(96, 218, 255)'}} 
                  onClick={recordTime}>기록
                </button>
              </div>
            </div>  

            <ul className="recordingListInTimer">
              <li>
                <h2>기록</h2>
              </li>
              {timeRecords.map((record, index) => (
                <li key={index}>
                  과목 : {record.subject} / {formatTime(record.time)}
                </li>
              ))}
            </ul>
          </div>  
      </div>
  );
};

export default Timer;
