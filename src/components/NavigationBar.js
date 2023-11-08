import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../IndexControl/PagesList";
import { Login } from "../IndexControl/PagesList";

const NavigationBar = props => {
  // state

  // handle

  // UI
  return (
    <div className="Entire-NavBar-wrapper">
      <div className="Top-NavBar-wrapper">
        <div className="Logo-NavBar-wrapper">
          <Link to={"/"}>
            <img
              src={process.env.PUBLIC_URL + "./NavIcons/logo.png"}
              alt="logoImg"
            />
          </Link>
        </div>
        {props.isLogin === true ? (
          // 로그인 상태 (true 상태)
          <div className="UserCompo-NavBar-wrapper">
            <div className="Logout-NavBar-wrapper">
              <Link to={"/"} onClick={props.handleLogin}>
                로그아웃
              </Link>
            </div>
            <div className="Profie-NavBar-wrapper">
              <Link to={"Profile"}>프로필</Link>
            </div>
          </div>
        ) : (
          // 로그아웃 상태 (false 상태)
          <div className="UserCompo-NavBar-wrapper">
            <div className="Login-NavBar-wrapper">
              <Login />
            </div>
            <div className="Signup-NavBar-wrapper">
              <Link to={"/join"}>회원가입</Link>
            </div>
          </div>
        )}
      </div>
      <div className="Components-NavBar-wrapper">
        <Link to={"/Timer"}>
          <img
            src={process.env.PUBLIC_URL + "./NavIcons/timer_icon.png"}
            alt="TimerImg"
          />
        </Link>
        <Link to={"/Calendar"}>
          <img
            src={process.env.PUBLIC_URL + "./NavIcons/calendar_icon.png"}
            alt="ClaendarImg"
          />
        </Link>
        <Link to={"/StudyGroup"}>
          <img
            src={process.env.PUBLIC_URL + "./NavIcons/studyGroup_icon.png"}
            alt="studyGroupImg"
          />
        </Link>
        <Link to={"/Board"}>
          <img
            src={process.env.PUBLIC_URL + "./NavIcons/board_icon.png"}
            alt="board_iconImg"
          />
        </Link>
        <Link to={"/MileageShop"}>
          <img
            src={process.env.PUBLIC_URL + "./NavIcons/mileageShop_icon.png"}
            alt="mileageShopImg"
          />
        </Link>
        <Link to={"/Inquery"}>
          <img
            src={process.env.PUBLIC_URL + "./NavIcons/inquery_icon.png"}
            alt="inqueryImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
