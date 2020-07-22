import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Each.scss";

class Each extends React.Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
  }

  // handleMoustEnter = () => {
  //   this.setState({
  //     isHovered: true,
  //   });
  // };

  // handleMoustLeave = () => {
  //   this.setState({
  //     isHovered: false,
  //   });
  // };

  render() {
    const { isHovered } = this.state;
    const {
      key,
      name,
      imgSrc,
      newTag,
      giftTag,
      bestTag,
      saleTag,
      tag,
      salePrice,
      price,
    } = this.props;
    const isSale = salePrice !== 0;
    return (
      <div
        className="Each"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
        key={key}
      >
        <div className="eachProduct">
          <Link to="/product/all/detail">
            <div className="imgBox">
              <img alt="" className="product" src={imgSrc} />
            </div>
            <div className="productTag">
              <span className={newTag === "NEW" ? "NEW" : "NEWOff"}>NEW</span>
              <span className={bestTag === "BEST" ? "BEST" : "BESTOff"}>
                BEST
              </span>
              <span className={giftTag === "GIFT" ? "GIFT" : "GIFTOff"}>
                GIFT
              </span>
              <span className={saleTag === "SALE" ? "SALE" : "SALEOff"}>
                SALE
              </span>
            </div>
            <div className="productInfo">
              <p className="productInfoMsg">{tag}</p>
              <p className="productInfoTitle">{name}</p>
              <div className="productPrice">
                <p
                  className={
                    isSale ? "productSalePriceOn" : "productSalePriceOff"
                  }
                >
                  {isSale ? price.toLocaleString() : salePrice.toLocaleString()}
                  원
                </p>
                <p className="productInfoPrice">
                  {price
                    ? isSale
                      ? `${salePrice.toLocaleString()}원`
                      : `${price.toLocaleString()}원`
                    : "일시 품절"}
                </p>
              </div>
            </div>
          </Link>
          <div className={isHovered ? "hiddenBoxOn" : "hiddenBoxOff"}>
            <div className="box">
              <Link to="/buy">
                <div className="buy">바로구매</div>
              </Link>
              <Link to="/cart">
                <div className="icon cart">
                  <img alt="cart" src="/images/btn_cart.png" />
                </div>
              </Link>
              <Link to="/wish">
                <div className="icon wish">
                  <img alt="wish" src="/images/btn_wish.png" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Each);
