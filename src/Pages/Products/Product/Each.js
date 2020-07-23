import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Each.scss";

const options = { threshold: 0.5 };

class Each extends React.Component {
  constructor() {
    super();
    this.imgRef = React.createRef();
    this.state = {
      isHovered: false,
    };
  }

  componentDidMount() {
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.imgRef.current);
  }

  callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        entry.target.src = entry.target.dataset.src;
      } else {
      }
    });
  };

  render() {
    const { isHovered } = this.state;
    const {
      key,
      name,
      imgSrc,
      newFlag,
      giftFlag,
      bestFlag,
      saleFlag,
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
              <img
                alt=""
                className="product"
                ref={this.imgRef}
                src="/images/preview.gif"
                data-src={imgSrc}
              />
            </div>
            <div className="productTag">
              <span className={newFlag === "NEW" ? "NEW" : "NEWOff"}>NEW</span>
              <span className={bestFlag === "BEST" ? "BEST" : "BESTOff"}>
                BEST
              </span>
              <span className={giftFlag === "GIFT" ? "GIFT" : "GIFTOff"}>
                GIFT
              </span>
              <span className={saleFlag === "SALE" ? "SALE" : "SALEOff"}>
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
                  {price ? (
                    isSale ? (
                      `${salePrice.toLocaleString()}원`
                    ) : (
                      `${price.toLocaleString()}원`
                    )
                  ) : (
                    <p className="productOutofStock">일시품절</p>
                  )}
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
