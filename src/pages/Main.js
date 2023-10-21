import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

function Main() {

  const navigate = useNavigate("");

  return (
    <>
    <ImageSlider/>
    <div className='mainPage'>
      <br/>
      <p>“나태함, 그 순간은 달콤하고 결과는 비참하다.”</p>
      <button onClick={(e) => navigate("/Timer")}>학습 시작!</button>
    </div>
    </>
  );
}

export default Main;
