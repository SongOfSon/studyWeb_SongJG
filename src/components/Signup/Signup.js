// React import
import React, { useEffect, useState } from 'react';

// CSS import
import './Signup.css'

const Signup = () => {
// React hooks

// value
  const [userInfo, setUserInfo] = useState({
    name: '',
    ID:'',
    PW:'',
    PWconfirm:'',
    Email:'',
    PhoneNum:'',
  })
  const [userInfoValid, setUserInfoValid] = useState({
    validName:false,
    validID:false,
    validPW:false,
    validPWconfirm:false,
    validEmail:false,
    validPhoneNum:false,
  })

  const inputRegexs = {
    nameRegex : /^[A-Za-zㄱ-ㅎㅏ-ㅣ가-힣]{3,10}$/,
    IDRegex : /^[A-Za-z][A-Za-z0-9]{4,20}$/,
    PWRegex : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,20}$/,
    EmailRegex : /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
    PhoneNumRegex : /^[0-9]{0,13}$/,
  }
  
// Func
  const onChangeValue = e => {
    setUserInfo({...userInfo, [e.target.name]:e.target.value})
  }

  const handleValueCheck = ( value, valueType ) => {
    /* 전체 공란 검사 */
    if(value === '' || value === null){
      return false
    }else 
    /* type 별 유효성 검사 */
    if(valueType === 'name'){
      let prevValidState = {...userInfoValid}
      prevValidState.validName = Boolean(userInfo.name.match(inputRegexs.nameRegex));
      setUserInfoValid(prevValidState)
      return userInfoValid.validName;
      }
    else if(valueType === 'ID'){
      userInfoValid.validID = Boolean(userInfo.ID.match(inputRegexs.IDRegex));
      return userInfoValid.validID;
      }
    else if(valueType === 'PW'){
      userInfoValid.validPW = Boolean(userInfo.PW.match(inputRegexs.PWRegex));
      return userInfoValid.validPW;
      }
    else if(valueType === 'PWconfirm'){
      userInfoValid.validPWconfirm = Boolean((userInfo.PWconfirm === userInfo.PW));
      return userInfoValid.validPWconfirm;
      }
    else if(valueType === 'Email'){
      userInfoValid.validEmail = Boolean(userInfo.Email.match(inputRegexs.EmailRegex));
      return userInfoValid.validEmail;
      }
    else if(valueType === 'PhoneNum'){
      userInfoValid.validPhoneNum = Boolean(userInfo.PhoneNum.match(inputRegexs.PhoneNumRegex));
      return userInfoValid.validPhoneNum;
      }
  }

  const checkValueMessage = ( valid, valueType ) =>{
    let message = '';
    if(valid === false){
      switch(valueType){
        case 'name':
          message = "3~10개의 영문자 또는 한글로 입력해주세요";
          return message;
        case 'ID':
          message = "4~20개의 영문자와 숫자로 입력해주세요";
          return message;
        case 'PW':
          message = "8~20개의 대소문자와 특수기호를 포함하여 입력해주세요";
          return message;
        case 'PWconfirm':
          message = "비밀번호가 일치하지 않습니다 다시 입력해주세요";
          return message;
        case 'Email':
          message = "다음 형식에 맞춰 입력해주세요 ex) example@example.com";
          return message;
        case 'PhoneNum':
          message = "숫자만 입력해주세요";
          return message;

        default: return ;
      }
    }else if(valid === true) return message = '';
  }

  const checkSignup = () => {
    if(
      userInfo.validName && 
      userInfo.validID && 
      userInfo.validPW && 
      userInfo.validPWconfirm && 
      userInfo.validEmail && 
      userInfo.validPhoneNum){
        return true;
    }else return false;
  }

  useEffect(() => {
    handleValueCheck()
  }, userInfoValid)
// UI
  return (
    <div className='Signup-wrapper'>
      <div className='Signup-containner'>
        <div className='Signup-containner-top'>
          <div className='Signup-name-value-containner'>
            <div className='Signup-name-value-containner-top'>
              <div className='Signup-name-value-containner-inner'>
                <label 
                  htmlFor='name'
                  className='Signup-value-label-box'>
                    이름</label>
                <input
                  id='name'
                  name='name' 
                  className='Signup-value-input-box'
                  type='text'
                  placeholder='이름을 입력하세요'
                  value={userInfo.name}
                  onChange={e => onChangeValue(e)}/>
              </div>
              <div 
                className={handleValueCheck(userInfo.name, 'name')?
                'Signup-containner-null-check-true':
                'Signup-containner-null-check-false'}>
              </div>
            </div>
            <div className='Signup-name-value-containner-bottom'>
              {checkValueMessage(userInfoValid.validID, 'name')}
              {console.log(userInfoValid.validID)}
            </div>
          </div>
          <div className='Signup-ID-value-containner'>
            <div className='Signup-ID-value-containner-inner'>
              <label 
                htmlFor='ID'
                className='Signup-value-label-box'>
                  ID</label>
              <input 
                id='ID'
                name='ID' 
                className='Signup-value-input-box'
                type='text'
                placeholder='원하는 ID을 입력하세요'
                value={userInfo.ID}
                onChange={onChangeValue}/>
            </div>
            <div 
              className={handleValueCheck(userInfo.ID, 'ID')?
              'Signup-containner-null-check-true':
              'Signup-containner-null-check-false'}></div>
          </div>
          <div className='Signup-PW-value-containner'>
            <div className='Signup-PW-value-containner-inner'>
              <label 
                htmlFor='PW'
                className='Signup-value-label-box'>
                  PW</label>
              <input 
                id='PW'
                name='PW'
                className='Signup-value-input-box'
                type='password'
                placeholder='비밀번호를 입력하세요'
                value={userInfo.PW}
                onChange={onChangeValue}/>
            </div>
            <div 
                className={handleValueCheck(userInfo.PW, 'PW')?
                'Signup-containner-null-check-true':
                'Signup-containner-null-check-false'}></div>
          </div>
          <div className='Signup-PWconfirm-value-containner'>
          <div className='Signup-PWconfirm-value-containner-inner'>
            <label
              htmlFor='PWconfirm'
              className='Signup-value-label-box'>
                PW 확인</label>
            <input 
              id='PWconfirm'
              name='PWconfirm'
              className='Signup-value-input-box'
              type='password'
              placeholder='비밀번호를 다시 입력하세요'
              value={userInfo.PWconfirm}
              onChange={onChangeValue}/>
              </div>
            <div 
              className={handleValueCheck(userInfo.PWconfirm, 'PWconfirm')?
              'Signup-containner-null-check-true':
              'Signup-containner-null-check-false'}></div>
          </div>
        </div>
        <div className='Signup-containner-bottom'>
          <div className='Signup-Email-value-containner'>
            <div className='Signup-Email-value-containner-inner'>
              <label
                htmlFor='Email'
                className='Signup-value-label-box'>
                  Email</label>
              <input 
                id='Email'
                name='Email'
                className='Signup-value-input-box'
                type='text'
                placeholder='Email를 입력하세요'
                value={userInfo.Email}
                onChange={onChangeValue}/>
            </div>
            <div 
                className={handleValueCheck(userInfo.Email, 'Email')?
                'Signup-containner-null-check-true':
                'Signup-containner-null-check-false'}></div>
          </div>
          <div className='Signup-PhoneNum-value-containner'>
            <div className='Signup-PhoneNum-value-containner-inner'>
              <label 
                htmlFor='PhoneNum'
                className='Signup-value-label-box'
                >
                  휴대번호</label>
              <input 
              id='PhoneNum'
              name='PhoneNum'
              className='Signup-value-input-box'
              type='text'
              placeholder='휴대번호를 입력하세요'
              value={userInfo.PhoneNum}
              onChange={onChangeValue}/>
            </div>
            <div 
              className={handleValueCheck(userInfo.PhoneNum, 'PhoneNum')?
              'Signup-containner-null-check-true':
              'Signup-containner-null-check-false'}></div>
          </div>
        </div>
        <button 
          className={checkSignup()?
          'Signup-containner-allow':'Signup-containner-prevent'}>
            가입하기</button>
      </div>
    </div>
  );
};

export default Signup;