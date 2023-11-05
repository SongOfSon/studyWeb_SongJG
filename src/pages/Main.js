import React from 'react';
import { useNavigate } from 'react-router-dom';


// custom Component
import ImageSlider from '../Components/ImageSlider';

function Main() {

  const navigate = useNavigate("");

  return (
    <div className='main-wrapper'>
      <ImageSlider/>
      <div className='main-saying-box'>
        <br/>
        <p>“나태함, 그 순간은 달콤하고 결과는 비참하다.”</p>
        <button onClick={(e) => navigate("/Timer")}>학습 시작!</button>
      </div>
    </div>
  );
}

export default Main;
