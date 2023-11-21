import React from 'react';
import ChatBot from 'react-simple-chatbot'
import {ThemeProvider} from 'styled-components'

import './Inquery.css'

const Inquery = (props) => {
  const userName = props.currentLoginUser.userName;

  const steps=[
    {
      id: '1',
      message: `안녕하세요 ${userName}님`,
      trigger: '2',
    },
    {
      id: '2',
        options: [
          { value: 1, label: '마일리지가 뭐야?', trigger: '3' },
          { value: 2, label: '오늘 날씨 알려줘', trigger: '4' },
          { value: 3, label: '어떻게 사용하는거야?', trigger: '5' },
        ],
    },
    {
      id: '3',
      message: '마일리지는 학습한 시간을 토대로 증정되는 저희 사이트의 재화이며 여러 상품과 교환 할 수 있답니다',
      end: true,
    },
    {
      id: '4',
      message: '오늘은 매우 쌀쌀한 날씨네요 따뜻하게 입으시는걸 추천드릴게요',
      end: true,
    },
    {
      id: '5',
      message: '상단의 메뉴 좌측에 위치한 타이머로 공부한 시간을 측정하고 캘린더를 통해 얼마나 공부를 했는지 확인 할 수 있답니다',
      end: true,
    },
  ]


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
        <ChatBot 
          steps={steps}
          hideHeader={true}
          placeholder={'채팅이 불가능합니다.'}
          />
      </ThemeProvider>
    </div>
  );
};

export default Inquery;