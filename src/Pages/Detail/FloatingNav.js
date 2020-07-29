import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./FloatingNav.scss";

class FloatingNav extends React.Component {
  constructor() {
    super();
    this.state = {
      cartBtnHovered: false,
      wishBtnHovered: false,
    };
  }

  render() {
    const { title, price, salePrice, count, handleCount } = this.props;
    const { cartBtnHovered, wishBtnHovered } = this.state;
    const isSale = salePrice !== 0;
    const saleprice = salePrice * count;
    const normalprice = price * count;

    return (
      <div className="floating">
        <div className="floatingTitle">{title}</div>
        <div className="totalPriceCount">
          <span>총 구매 금액</span>
          {isSale
            ? `${saleprice.toLocaleString()}원`
            : `${normalprice.toLocaleString()}원`}
        </div>
        <div className="quantityBox">
          <div className="btnBox">
            <div className="quantity">
              <button className="minus" onClick={() => handleCount(-1)}>
                <img
                  alt=""
                  src="https://image.drjart.com/front/ko/images/common/qty_down.gif"
                />
              </button>
              <input className="count" type="text" value={count} readOnly />
              <button className="plus" onClick={() => handleCount(1)}>
                <img
                  alt=""
                  src="https://image.drjart.com/front/ko/images/common/qty_up.gif"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="purchaseBtnBox">
          <div className="box">
            <Link to="/buy">
              <div className="buy">바로구매</div>
            </Link>
            <Link
              to="/wish"
              onMouseEnter={() => this.setState({ wishBtnHovered: true })}
              onMouseLeave={() => this.setState({ wishBtnHovered: false })}
            >
              <div className={wishBtnHovered ? "icon wish white" : "icon wish"}>
                <img
                  alt="wish"
                  src={
                    wishBtnHovered
                      ? "/images/btn_wish.png"
                      : "/images/ico_heart_white.png"
                  }
                />
              </div>
            </Link>
            <Link
              to="/cart"
              onMouseEnter={() => this.setState({ cartBtnHovered: true })}
              onMouseLeave={() => this.setState({ cartBtnHovered: false })}
            >
              <div className={cartBtnHovered ? "icon cart white" : "icon cart"}>
                <img
                  alt="cart"
                  src={
                    cartBtnHovered
                      ? "/images/btn_cart.png"
                      : "/images/ico_cart_white.png"
                  }
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FloatingNav);
