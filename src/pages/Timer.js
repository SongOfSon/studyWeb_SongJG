import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;
        if (isActive) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (!isActive && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setTime(0);
    };

    const displayTime = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="timer-container">
            <h1 className="timer-title">Study Timer</h1>
            <div className="timer-display">{displayTime()}</div>
            <div className="timer-controls">
                <button className="timer-button" onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
                <button className="timer-button" onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
