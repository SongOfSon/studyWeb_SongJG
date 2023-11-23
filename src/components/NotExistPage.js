import React from "react";

const NotExistPage = () => {
  return (
    <div className="NotExistPage-wrapper">
      <img src={process.env.PUBLIC_URL + "./NavIcons/logo.png"} alt="logo" />
      <h1>잘못된 경로입니다 주소를 확인해주세요</h1>
    </div>
  );
};

export default NotExistPage;
