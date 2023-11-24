// React import
import React, { useState } from "react";

// custom components import
import MileageShopModal from "./MileageShopModal";

// CSS import
import "./MileageShop.css"

function MileageShop( props ) {
// MileageShop Data
  const [checkProudct, setCheckProudct] = useState([]);
  const [productList, setProductList] = useState([
    {
      id : 1,
      productName : "지우개",
      productIntro : "지우개 입니다",
      price : 1000,
      img : process.env.PUBLIC_URL + "./productImg/eraser.png",
    },
    {
      id : 2,
      productName : "볼펜",
      productIntro : "볼펜 입니다",
      price : 2000,
      img : process.env.PUBLIC_URL + "./productImg/inkpen.png",
    },
    {
      id : 3,
      productName : "노트북",
      productIntro : "노트북 입니다",
      price : 1500,
      img : process.env.PUBLIC_URL + "./productImg/notebook.png",
    },
    {
      id : 4,
      productName : "연필꽂이",
      productIntro : "소개 4",
      price : 3500,
      img : process.env.PUBLIC_URL + "./productImg/pen.png",
    },
    {
      id : 5,
      productName : "필통",
      productIntro : "소개 5",
      price : 5000,
      img : process.env.PUBLIC_URL + "./productImg/pencase.png",
    },
    {
      id : 6,
      productName : "연필",
      productIntro : "소개 6",
      price : 1100,
      img : process.env.PUBLIC_URL + "./productImg/pencil.png",
    },
    {
      id : 7,
      productName : "포스트잇",
      productIntro : "소개 7",
      price : 700,
      img : process.env.PUBLIC_URL + "./productImg/postit.png",
    },
    {
      id : 8,
      productName : "A4 파일",
      productIntro : "소개 8",
      price : 3000,
      img : process.env.PUBLIC_URL + "./productImg/A4Files.png",
    },
  ]);
// Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = (e) => {
    document.body.style.overflow = "hidden"; // 스크롤 감춤
    setModalIsOpen(true);
  };
  const closeModal = (e) => {
    document.body.style.overflow = "unset";
    setModalIsOpen(false);
  };

// Pagination data
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

// handle
  const handleCheckProudct = (e, product) => {
    const isChecked = e.target.checked;
    setCheckProudct((prevChkProduct) => {
      if(isChecked){
        return [...prevChkProduct, product.id];
      } else {
        return prevChkProduct.filter((id) => id !== product.id);
      }
    })
  }
  const totalProductPriceCal = () => {
    let totalPrice = 0;
    for(let i = 0 ; i < productList.length + 1; i++){
      if(checkProudct.includes(i) === true ){
        totalPrice += productList[i-1].price;
      }
    }
    return totalPrice;
  }

// UI 
  return (
    <div className="Mileage-shop-wrapper">
      <div className="Mileage-shop-table-top">
        <div className="Mileage-shop-product-list">
          {productList.map((product, idx)=>(
          <div key={product.id} className="Mileage-shop-product-info">
            <div className="Mileage-shop-product-info-img">
              <img src={productList[idx].img} alt="productImg"/>
            </div>
            <div className="Mileage-shop-product-info-img-bottom">
              <div className="Mileage-shop-product-info-productName">
                {productList[idx].productName}</div>
              <div className="Mileage-shop-product-info-productPrice">
                {productList[idx].price} 원</div>
            </div>
            <div className="Mileage-shop-product-info-chkbox">
              <label htmlFor="product-check-box"></label>
              <input
                id="product-check-box"
                type="checkbox"
                onChange={e => handleCheckProudct(e, product)}/>
            </div>
          </div>))}
        </div>
        <div className="Mileage-shop-user-info">
          <div className="Mileage-shop-user-name-con">
            {props.generalUserData[props.currentLoginUser.userNum].userName} 님
          </div>
          <div className="Mileage-shop-user-Mileage-con">
            <div>보유 마일리지</div>
            <div>{props.generalUserData[props.currentLoginUser.userNum].userMileage}</div>
          </div>
        </div>
      </div>
      <div className="Mileage-shop-table-bottom">
        <button 
          className="Mileage-shop-table-bottom-purchase" 
            onClick={e => openModal(e)}>구매하기</button>
      </div>
      {modalIsOpen?
        <MileageShopModal
          props={props}
          productList={productList}
          checkProudct={checkProudct}
          totalProductPriceCal={totalProductPriceCal}
          closeModal={closeModal}
          generalUserData={props.generalUserData}
          setGeneralUserData={props.setGeneralUserData}
          currentLoginUser={props.currentLoginUser}/>
       :<></>
      }
    </div>
  );
}

export default MileageShop;