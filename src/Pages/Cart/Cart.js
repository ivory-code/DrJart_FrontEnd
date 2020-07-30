import React from "react";
import { Link } from "react-router-dom";
import SideNav from "../../Components/Nav/SideNav/SideNav.js";
import Footer from "../../Components/Footer/Footer.js";
import Cartlist from "./Cartlist.js";
import "./Cart.scss";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      cartlist: [],
      reload: false,
    };
  }

  componentDidMount() {
    fetch("http://10.58.7.66:8000/user/order", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          cartlist: res.data,
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reload !== this.state.reload) {
      window.location.reload();
    }
  }

  getAllprice = () => {
    const { cartlist } = this.state;
    let sum = 0;
    cartlist.forEach((el) => {
      sum += el.price;
    });
    return sum;
  };

  getAllsalePrice = () => {
    const { cartlist } = this.state;
    let priceSum = 0;
    let salepriceSum = 0;

    cartlist.forEach((el) => {
      if (el.price_sale) {
        priceSum += el.price;
        salepriceSum += el.price_sale;
      }
    });
    return priceSum - salepriceSum;
  };

  setReload = () => {
    const { reload } = this.state;
    this.setState({
      reload: !reload,
    });
  };

  render() {
    const { count, cartlist } = this.state;
    return (
      <>
        <SideNav />
        <div className="Cart">
          <div className="pageTitleArea">
            <img
              alt="cart"
              src="https://image.drjart.com/front/ko/images/order/ico_cart.gif"
            />
            <h2>장바구니</h2>
          </div>
          <div className="cartContainer">
            <div className="cartWrap">
              <div className="cartList">
                <div className="cartCate">
                  <p>상품</p>
                  <p>수량</p>
                  <p>가격</p>
                </div>
                {cartlist.map((el, i) => {
                  return (
                    <Cartlist
                      key={i}
                      productId={el.id}
                      data={el}
                      count={count}
                      cartlist={cartlist}
                      setReload={this.setReload}
                    />
                  );
                })}
              </div>
              <div className="continueShopping">
                <Link to="/main">
                  <button>쇼핑 계속하기</button>
                </Link>
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
                  <div className="pdtPrice pdtPriceNum">
                    {this.getAllprice().toLocaleString()}
                  </div>
                </div>
                <div className="price discount">
                  총 할인 금액
                  <div className="pdtPrice discountNum">
                    {this.getAllsalePrice().toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="totalPrice">
                <div className="price expectPrice">
                  예상 결제 금액
                  <div className="pdtPrice expectNum">
                    {(
                      this.getAllprice() - this.getAllsalePrice()
                    ).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="order">
                <button>선택상품 주문하기</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Cart;
