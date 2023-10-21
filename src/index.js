import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import './styles/Chatbot.css'
import './styles/MileageShop.css'
import './styles/WritePost.css'
import './styles/Board.css'
import './styles/Calendar.css'
import './styles/CreateStudyGroup.css'
import "./styles/StudyGroup.css";
import './styles/FindID.css';
import './styles/FindPassword.css';
import './styles/Timer.css'
import './styles/Main.css'
import './styles/TopMenuBar.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);