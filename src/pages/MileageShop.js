import React, { useState } from "react";
import CustomPagination from "../Components/CustomPagination";
import IamportPayment from "../Components/IamportPayment";

function MileageShop( props ) {
  const [username, setUsername] = useState("Kim");
  const [mileage, setMileage] = useState(1000); // 예시 마일리지

  const [productList, setProductList] = useState([
    {
      id : 1,
      productName : "1",
      productIntro : "소개 1",
      price : 1000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 2,
      productName : "2",
      productIntro : "소개 2",
      price : 2000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 3,
      productName : "3",
      productIntro : "소개 3",
      price : 3000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 4,
      productName : "4",
      productIntro : "소개 4",
      price : 4000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 5,
      productName : "5",
      productIntro : "소개 5",
      price : 5000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 6,
      productName : "6",
      productIntro : "소개 6",
      price : 6000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 7,
      productName : "7",
      productIntro : "소개 7",
      price : 7000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 8,
      productName : "8",
      productIntro : "소개 8",
      price : 8000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
    {
      id : 9,
      productName : "9",
      productIntro : "소개 9",
      price : 9000,
      img : process.env.PUBLIC_URL + "./productImg/productImg.png",
    },
  ]);

  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const handleCharge = (event) => {
    event.preventDefault();
    alert("마일리지를 충전합니다."); // 마일리지 충전 기능 구현 필요
  };

  return (
    <div className="MileageShopCon">
        <div className="MileageShopBody">
          <table>
            {productList.slice(offset, offset + limit).map((product) => (
              <>
                {(product.id % 4) >= 1 ? 
                  <td>
                    <img src = {product.img}/>
                    <h2>{product.productName}</h2>
                    <IamportPayment/> 
                  </td>
                : <tr/>
                }
              </>
            ))}
          </table>

          <div className="ClientMileageInfo">
              <h2>{username}</h2>
              <p>보유 마일리지: {mileage}</p>
          </div>
        </div>

        <div className="MileageShopPagination">
        <CustomPagination total={productList.length} limit={limit} page={page} setPage={setPage}/>
        </div>
    </div>
  );
}

export default MileageShop;