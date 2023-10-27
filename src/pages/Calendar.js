import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [studyTime, setStudyTime] = useState({});

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

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: '5%' }}>
            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
                <div style={{ width: '50%', paddingRight: '20px' }}>
                    <Calendar 
                        className="customCalendar"
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </div>
                <div style={{ width: '50%' }}>
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
                    <p>이번달 총 공부시간: {getTotalStudyTimeForMonth()} 시간</p>
                </div>
            </div>
        </div>
    );
}

export default CalendarPage;
