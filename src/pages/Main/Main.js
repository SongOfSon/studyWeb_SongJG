// React import
import React from 'react';
import { Navigate } from 'react-router';

// CSS import
import './Main.css'
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const Main = () => {
  return (
    <div className='Main-wrapper'>
      <ImageSlider />
      <div className='main-saying-box'>
        <br/>
        <p>“나태함, 그 순간은 달콤하고 결과는 비참하다.”</p>
        <button onClick={(e) => Navigate("/Timer")}>학습 시작!</button>
      </div>
    </div>
  );
};

export default Main;