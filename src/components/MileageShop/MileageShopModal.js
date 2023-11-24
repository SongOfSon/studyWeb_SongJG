// React import
import React from 'react';

// CSS import
import './MileageShopModal.css'

const MileageShopModal = ({ 
  productList, 
  checkProudct, 
  totalProductPriceCal, 
  closeModal, 
  generalUserData, 
  currentLoginUser,
  setGeneralUserData
}) => { 

  const handlePurchase = () => {
    let copdiedUserData = generalUserData;
    let currentUserMileage = generalUserData[currentLoginUser.userNum].userMileage;
    currentUserMileage = currentUserMileage - totalProductPriceCal();
    if(currentUserMileage < 0){
      currentUserMileage = totalProductPriceCal() + currentUserMileage;
      alert('마일리지가 부족합니다');
      return closeModal();
    }else{
      copdiedUserData[currentLoginUser.userNum].userMileage = currentUserMileage;
      setGeneralUserData(copdiedUserData);
      alert('결제가 완료되었습니다');
      return closeModal();
    }
  }


  return (
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
          </tr>:<></>))}
        </tbody>
      </table>
        <div className="Mileage-shop-Modal-Body-bottom">
          <div className="Mileage-shop-Modal-product-list-foot">
            <div className="Mileage-shop-Modal-product-list-foot-left">
              합계</div>
            <div className="Mileage-shop-Modal-product-list-foot-right">
              {totalProductPriceCal()} 원</div>
          </div>
          <div className="Mileage-shop-Modal-Body-bottom-buttons">
            <button
              className="Mileage-shop-Modal-Body-bottom-purchase"
              onClick={e => handlePurchase()}>
                구매</button>
            <button
              className="Mileage-shop-Modal-Body-bottom-cancel"
              onClick={e => closeModal(e)}>
                취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MileageShopModal;