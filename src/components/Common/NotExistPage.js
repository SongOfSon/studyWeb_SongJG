// React import
import React from "react";

// CSS import
import "./NotExistPage.css"

const NotExistPage = (props) => {
  return (
    <div className="NotExistPage-wrapper">
      <img src={process.env.PUBLIC_URL + "./NavIcons/logo.png"} alt="logo" />
      {props.isLogin?
      <h1>잘못된 경로입니다 주소를 확인해주세요</h1>:
      <h1>로그인이 필요합니다</h1>}
    </div>
  );
};

export default NotExistPage;
