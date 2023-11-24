// React import
import React, { useEffect } from "react";
import axios from 'react-dom'
import { Navigate } from "react-router-dom";

// CSS import
import "./IamportPayment.css"

const IamportPayment = ( props ) => {
    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
          document.head.removeChild(jquery);
          document.head.removeChild(iamport);
        };
      }, []);
    
      const requestPay = () => {
        const { IMP } = window;
        IMP.init('imp06746373');
    
        IMP.request_pay({
          pg: 'kakaopay.TC0ONETIME',
          pay_method: 'card',
          merchant_uid: `${new Date().getTime()}`,
          name: '테스트 상품',
          amount: props.totalPrice,
          buyer_email: 'test@naver.com',
          buyer_name: 'test',
          buyer_tel: '010-1234-5678',
          buyer_addr: 'test-addr',
          buyer_postcode: '123-456',
        }, async (rsp) => {
          try {
            const { data } = await axios.post('http://localhost:8080/verifyIamport/' + rsp.imp_uid);
            if (rsp.paid_amount === data.response.amount) {
              alert('결제 성공');
            } else {
              alert('결제 취소');/* 실패 */
            }Navigate(-1);
          } catch (error) {
            console.error('Error while verifying payment:', error);
            alert('결제 오류');
          }
        });
      };
    
      return (
        <div className="Iamport-wrapper">
          <button onClick={requestPay}>결제</button>
        </div>
      );
}

export default IamportPayment