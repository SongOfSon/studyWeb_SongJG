import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarPage = ( props ) => {

// calendar Data
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [studyTime, setStudyTime] = useState({});

// handle
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleStudyTimeSave = (hours) => {
        setStudyTime(prev => ({ ...prev, [selectedDate.toLocaleDateString()]: hours }));
    }

    const getTotalStudyTimeForMonth = () => {
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();
        let total = 0;
        Object.keys(studyTime).forEach(date => {
            const dateObj = new Date(date);
            if (dateObj.getMonth() === month && dateObj.getFullYear() === year) {
                total += Number(studyTime[date]);
            }
        });
        return total;
    }

// UI
    return (
        <div className="Calendar-wrapper">
                <div className='Calendar-container'>
                    <Calendar 
                        className="customCalendar"
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </div>
                <div className='Calendar-recordTime-table-container'>
<table>
    <tbody>
        <tr>
        {/* 로그인한 유저 확인 후 해당 유저의 학습한 내용을 금일 날짜에 맞춰 map이용하여 표 나열 */}
        <td>
            금일 공부 : {/* 타이머로부터 과목명 및 해당 공부 시간 호출 */}
        </td>
        </tr>
    </tbody>
</table>
{/* 
                    <div>
                        <label>
                            {selectedDate.toLocaleDateString()} 공부시간: 
                            <select 
                                onChange={(e) => handleStudyTimeSave(e.target.value)}
                                value={studyTime[selectedDate.toLocaleDateString()] || 0}
                            >
                                {Array.from({length: 25}, (_, i) => <option key={i} value={i}>{i}</option>)}
                            </select> 시간
                        </label>
                    </div>
                    <p>이번달 총 공부시간: {getTotalStudyTimeForMonth()} 시간</p>*/}
                </div> 
        </div>
    );
}

export default CalendarPage;