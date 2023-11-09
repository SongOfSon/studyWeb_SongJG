import React, { useState } from "react";
import CustomPagination from "../Components/CustomPagination";
import IamportPayment from "../Components/IamportPayment";

function MileageShop( props ) {
// MileageShop Data
  const [checkProudct, setCheckProudct] = useState(false);
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
  const mileageCart = [{

  }];

// Pagination data
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

// handle
  const handleCheckProudct= () => {
    setProductList(!checkProudct)
  }
  const handleCharge = (event) => {
    event.preventDefault();
    alert("마일리지를 충전합니다."); // 마일리지 충전 기능 구현 필요
  };

// UI 
  return (
    <div className="Mileage-shop-wrapper">
      <div className="Mileage-shop-product-list">
        <div className="Mileage-shop-product-info">
          <table className="Mileage-shop-product-info-table">
            <tbody className="Mileage-shop-product-info-tbody">
              <tr className="Mileage-shop-product-info-tr"/>
            {productList.map((product) => {return(
              (product.id % 4) !== 0 ?
              <>
                <td className="Mileage-shop-product-info-td">
                  <img 
                    className="Mileage-shop-product-info-productImg"
                    src={product.img} alt="productImg"/>
                  <div className="Mileage-shop-product-info-bottom">
                    <input 
                      className="Mileage-shop-product-info-chkProduct"
                      type="checkbox"
                      checked={checkProudct}
                      onChange={handleCheckProudct}/>
                    <div className="Mileage-shop-product-info-name">
                      {product.productName}
                    </div>
                  </div>
                </td>
              </>
              :<>
                <td className="Mileage-shop-product-info-td">
                  <img 
                    className="Mileage-shop-product-info-productImg"
                    src={product.img} alt="productImg"/>
                  <div className="Mileage-shop-product-info-bottom">
                    <input 
                      className="Mileage-shop-product-info-chkProduct"
                      type="checkbox"/>
                    <div className="Mileage-shop-product-info-name">
                      {product.productName}
                    </div>
                  </div>
                </td>
                <tr/>
              </>
              )})}
            </tbody>
          </table>
          {checkProudct &&
            <div className="Mileage-shop-table-bottom">
            <button className="Mileage-shop-table-bottom-purchase">구매하기</button>
            <button className="Mileage-shop-table-bottom-cancel">취소하기</button>
          </div>}

        </div>
      </div>
    </div>
  );
}

export default MileageShop;