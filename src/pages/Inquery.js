import React from 'react';
import ChatBot from 'react-simple-chatbot'
import {ThemeProvider} from 'styled-components'

const Inquery = (props) => {
const userName = '사용자';

    const steps = [
        {
        id:'1',
        message:`안녕하세요 ${userName}님 무엇을 도와드릴까요?`,
        trigger:'2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          end: true,}
        ];
    const theme = {
        background: "#f5f8fb",
        fontFamily: "Helvetica Neue",
        headerBgColor: "#EF6C00",
        headerFontColor: "#fff",
        headerFontSize: "15px",
        botBubbleColor: "#EF6C00",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4a4a4a",
        };

    return (
        <div className='Inquery-wrapper'>
            <ThemeProvider theme={theme}>
                <ChatBot steps={steps}/>
            </ThemeProvider>
        </div>
    );
};

export default Inquery;