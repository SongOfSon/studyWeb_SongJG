import React, { useState } from "react";
import CustomPagination from "../Components/CustomPagination";
import IamportPayment from "../Components/MileageShop/IamportPayment";

function MileageShop( props ) {
// MileageShop Data
  const [checkProudct, setCheckProudct] = useState([]);
  const [username, setUsername] = useState("User");
  const [mileage, setMileage] = useState(1000); // 예시 마일리지
  const [productList, setProductList] = useState([
    {
      id : 1,
      productName : "제품 1",
      productIntro : "소개 1",
      price : 1000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 2,
      productName : "제품 2",
      productIntro : "소개 2",
      price : 2000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 3,
      productName : "제품 3",
      productIntro : "소개 3",
      price : 3000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 4,
      productName : "제품 4",
      productIntro : "소개 4",
      price : 4000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 5,
      productName : "제품 5",
      productIntro : "소개 5",
      price : 5000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 6,
      productName : "제품 6",
      productIntro : "소개 6",
      price : 6000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 7,
      productName : "제품 7",
      productIntro : "소개 7",
      price : 7000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 8,
      productName : "제품 8",
      productIntro : "소개 8",
      price : 8000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
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
  const handleCharge = (event) => {
    event.preventDefault();
    alert("마일리지를 충전합니다."); // 마일리지 충전 기능 구현 필요
  };
  const totalProductPriceCal = () => {
    let totalPrice = 0;
    for(let i = 0 ; i < productList.length + 1; i++){
      if(checkProudct.includes(i) === true ){
        totalPrice += productList[i-1].price;
      }
    }
    return totalPrice;
  }
  const totalPrice = totalProductPriceCal();

// UI 
  return (
    <div className="Mileage-shop-wrapper">
      <div className="Mileage-shop-product-list">
        <div className="Mileage-shop-product-list-top">
          {productList.map((product, idx)=>(
          product.id <=4 ?
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
              <input type="checkbox" onChange={e => handleCheckProudct(e, product)}/>
            </div>
          </div>:<></>
        ))}</div>
        <div className="Mileage-shop-product-list-bottom">
        {productList.map((product, idx)=>(
          product.id <=8 && product.id > 4?
          <div className="Mileage-shop-product-info">
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
              <input type="checkbox" onChange={e => handleCheckProudct(e, product)}/>
            </div>
          </div>:<></>
        ))}</div>
      </div>
      <div className="Mileage-shop-table-bottom">
            <button className="Mileage-shop-table-bottom-purchase" onClick={e => openModal(e)}>구매하기</button>
      </div>
      {modalIsOpen?
      <div className="Mileage-shop-wrapper-backGround">
        <div className="Mileage-shop-Modal-Body">
          <table className="Mileage-shop-Modal-product-list">
            <thead className="Mileage-shop-Modal-product-list-head">
              <tr className="Mileage-shop-Modal-product-list-head-tr">
                <th>선택 상품명</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
            {productList.map((product, idx)=>(
              checkProudct.includes(product.id) ?
              <tr className="Mileage-shop-Modal-product-list-body">
                <td className="Mileage-shop-Modal-product-list-productName">{product.productName}</td>
                <td className="Mileage-shop-Modal-product-list-productPrice">{product.price}원</td>
              </tr>:<></>))}</tbody></table>
            <div className="Mileage-shop-Modal-product-list-foot">
              <div className="Mileage-shop-Modal-product-list-foot-left">합계</div>
              <div className="Mileage-shop-Modal-product-list-foot-right">{totalProductPriceCal()} 원</div>
            </div>
          <div className="Mileage-shop-Modal-Body-bottom">
            <IamportPayment totalPrice={totalPrice}/>
            <button className="Mileage-shop-Modal-Body-bottom-cancel" onClick={e => closeModal(e)}>취소</button>
          </div>
        </div>
      </div>
       :<></>
      }
    </div>
  );
}

export default MileageShop;