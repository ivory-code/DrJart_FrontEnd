import React from "react";
import "./Cart.scss";

class Cart extends React.Component {
  render() {
    return (
      <div className="Cart">
        <div className="pageTitleArea">
          <img
            alt=""
            src="https://image.drjart.com/front/ko/images/order/ico_cart.gif"
          />
          <h2>장바구니</h2>
        </div>
        <div className="cartContainer">
          <div className="bigParent">
            <div className="cartList">장바구니에 담긴 상품이 없습니다.</div>
            <div className="continueShopping">
              <button>쇼핑 계속하기</button>
            </div>
            <div className="noti">
              <dl>
                <dt>꼭 확인해주세요!</dt>
                <dd>
                  - 장바구니에 담긴 상품은 최대 30일 동안 보관되며 이후에는
                  삭제됩니다.
                </dd>
                <dd>
                  - SNS 간편 로그인, 네이버페이, 비회원 구매 시 닥터자르트
                  회원혜택이 적용되지 않습니다.
                </dd>
                <dd>
                  - 장바구니에 담긴 상품 중 품절, 단종으로 판매 상태 변경 시
                  장바구니에서 비활성화 처리되며, 구매가 불가합니다.
                </dd>
              </dl>
            </div>
          </div>
          <div className="countPrice">
            <div className="totalPrice">
              <div className="price pdtPrice">
                총 상품 금액
                <div className="pdtPrice pdtPriceNum">0</div>
              </div>
              <div className="price discount">
                총 할인 금액
                <div className="pdtPrice discountNum">0</div>
              </div>
            </div>
            <div className="totalPrice">
              <div className="price expectPrice">
                예상 결제 금액
                <div className="pdtPrice expectNum">0</div>
              </div>
            </div>
            <div className="order">
              <button>선택상품 주문하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
