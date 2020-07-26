import React from "react";
import { withRouter, Link } from "react-router-dom";
import throttle from "../../Util/throttle.js";
import FloatingNav from "./FloatingNav.js";
import "./DetailNav.scss";

class DetailNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isWishBtnHovered: false,
      isCartBtnHovered: false,
      count: 1,
      scrollTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", throttle(this.handleScroll, 100));
  }

  handleScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
  };

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
    const { isWishBtnHovered, isCartBtnHovered, count, scrollTop } = this.state;
    const {
      newFlag,
      bestFlag,
      giftFlag,
      saleFlag,
      title,
      tag,
      price,
      salePrice,
    } = this.props.location.state;
    const isSale = salePrice !== 0;
    const saleprice = salePrice * count;
    const normalprice = price * count;
    return (
      <>
        <div className="DetailNav">
          <div className="detailNavBar">
            <div className="detailPrdInfo">
              <div className="flag">
                <span className={newFlag ? "NEW" : "NEWOff"}>{newFlag}</span>
                <span className={bestFlag ? "BEST" : "BESTOff"}>
                  {bestFlag}
                </span>
                <span className={giftFlag ? "GIFT" : "GIFTOff"}>
                  {giftFlag}
                </span>
                <span className={saleFlag ? "SALE" : "SALEOff"}>
                  {saleFlag}
                </span>
              </div>
              <div className="detailPrdTitle">{title}</div>
              <div className="detailPrdTag">{tag}</div>
              <div className="detailPrice">
                <p
                  className={
                    isSale ? "detailPrdSalePriceOn" : "detailPrdSalePriceOff"
                  }
                >
                  {isSale ? price.toLocaleString() : salePrice.toLocaleString()}
                  원
                </p>
                <p className="detailPrdInfoPrice">
                  {price ? (
                    isSale ? (
                      `${salePrice.toLocaleString()}원`
                    ) : (
                      `${price.toLocaleString()}원`
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
            title={title}
            price={price}
            salePrice={salePrice}
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
