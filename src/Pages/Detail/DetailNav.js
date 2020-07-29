import React from "react";
import { withRouter, Link } from "react-router-dom";
import FloatingNav from "./FloatingNav.js";
import "./DetailNav.scss";

class DetailNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isWishBtnHovered: false,
      isCartBtnHovered: false,
      count: 1,
    };
  }

  handleCount = (num) => {
    const { count } = this.state;
    if (num === -1 && count === 1) {
      return;
    }
    this.setState({
      count: count + num,
    });
  };

  render() {
    const { isWishBtnHovered, isCartBtnHovered, count } = this.state;
    const {
      flag__flag_new,
      flag__flag_best,
      flag__flag_gift,
      flag__flag_sale,
      name,
      product_detail__tag,
      product_detail__price,
      product_detail__price_sale,
    } = this.props.location.state;
    const { scrollTop } = this.props;
    const isSale = product_detail__price_sale !== 0;
    const saleprice = product_detail__price_sale * count;
    const normalprice = product_detail__price * count;

    return (
      <>
        <div className="DetailNav">
          <div className="detailNavBar">
            <div className="detailPrdInfo">
              <div className="flag">
                <span className={flag__flag_new ? "NEW" : "NEWOff"}>
                  {flag__flag_new}
                </span>
                <span className={flag__flag_best ? "BEST" : "BESTOff"}>
                  {flag__flag_best}
                </span>
                <span className={flag__flag_gift ? "GIFT" : "GIFTOff"}>
                  {flag__flag_gift}
                </span>
                <span className={flag__flag_sale ? "SALE" : "SALEOff"}>
                  {flag__flag_sale}
                </span>
              </div>
              <div className="detailPrdTitle">{name}</div>
              <div className="detailPrdTag">{product_detail__tag}</div>
              <div className="detailPrice">
                <p
                  className={
                    isSale ? "detailPrdSalePriceOn" : "detailPrdSalePriceOff"
                  }
                >
                  {isSale
                    ? product_detail__price.toLocaleString()
                    : product_detail__price_sale.toLocaleString()}
                  원
                </p>
                <p className="detailPrdInfoPrice">
                  {product_detail__price ? (
                    isSale ? (
                      `${product_detail__price_sale.toLocaleString()}원`
                    ) : (
                      `${product_detail__price.toLocaleString()}원`
                    )
                  ) : (
                    <span className="detailPrdOutofStock">일시품절</span>
                  )}
                </p>
              </div>
            </div>
            <div className="prdCount">
              <div className="reserves">
                <div className="title">적립금</div>
                <div className="reservesPrice">0원</div>
              </div>
              <div className="quantityBox">
                <div className="title">수량</div>
                <div className="btnBox">
                  <div className="quantity">
                    <button
                      className="minus"
                      onClick={() => this.handleCount(-1)}
                    >
                      <img
                        alt=""
                        src="https://image.drjart.com/front/ko/images/common/qty_down.gif"
                      />
                    </button>
                    <input
                      className="count"
                      type="text"
                      value={count}
                      readOnly
                    />
                    <button
                      className="plus"
                      onClick={() => this.handleCount(1)}
                    >
                      <img
                        alt=""
                        src="https://image.drjart.com/front/ko/images/common/qty_up.gif"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="totalPriceBox">
              <div className="totalPriceTitle">총 구매 금액</div>
              <div className="totalPriceCount">
                {isSale
                  ? `${saleprice.toLocaleString()}원`
                  : `${normalprice.toLocaleString()}원`}
              </div>
            </div>
            <div className="purchaseBtnBox">
              <div className="box">
                <Link to="/buy">
                  <div className="buy">바로구매</div>
                </Link>
                <Link
                  to="/wish"
                  onMouseEnter={() => this.setState({ isWishBtnHovered: true })}
                  onMouseLeave={() =>
                    this.setState({ isWishBtnHovered: false })
                  }
                >
                  <div
                    className={
                      isWishBtnHovered ? "icon wish white" : "icon wish"
                    }
                  >
                    <img
                      alt="wish"
                      src={
                        isWishBtnHovered
                          ? "/images/btn_wish.png"
                          : "/images/ico_heart_white.png"
                      }
                    />
                  </div>
                </Link>
                <Link
                  to="/cart"
                  onMouseEnter={() => this.setState({ isCartBtnHovered: true })}
                  onMouseLeave={() =>
                    this.setState({ isCartBtnHovered: false })
                  }
                >
                  <div
                    className={
                      isCartBtnHovered ? "icon cart white" : "icon cart"
                    }
                  >
                    <img
                      alt="cart"
                      src={
                        isCartBtnHovered
                          ? "/images/btn_cart.png"
                          : "/images/ico_cart_white.png"
                      }
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {scrollTop > 650 ? (
          <FloatingNav
            title={name}
            price={product_detail__price}
            salePrice={product_detail__price_sale}
            count={count}
            handleCount={this.handleCount}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default withRouter(DetailNav);
