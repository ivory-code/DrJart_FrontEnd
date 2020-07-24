import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Each.scss";

const options = { threshold: 0.5 };

class Each extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.state = {
      isHovered: false,
    };
  }

  componentDidMount() {
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.imgRef.current);
    console.log("hey", this.props.data);
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
      name,
      image_url,
      fleg_new,
      fleg_gift,
      fleg_best,
      fleg_sale,
      tag,
      price_sale,
      price,
      productId,
    } = this.props.data;
    const isSale = price_sale !== 0;
    return (
      <div
        className="Each"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
        key={productId}
      >
        <div className="eachProduct">
          <Link to={`/product/all/detail/${productId}`}>
            <div className="imgBox">
              <img
                alt=""
                className="product"
                ref={this.imgRef}
                src="/images/preview.gif"
                data-src={image_url}
              />
            </div>
            <div className="productTag">
              <span className={fleg_new ? "NEW" : "NEWOff"}>{fleg_new}</span>
              <span className={fleg_best ? "BEST" : "BESTOff"}>
                {fleg_best}
              </span>
              <span className={fleg_gift ? "GIFT" : "GIFTOff"}>
                {fleg_gift}
              </span>
              <span className={fleg_sale ? "SALE" : "SALEOff"}>
                {fleg_sale}
              </span>
            </div>
            <div className="productInfo">
              <p className="msg">{tag}</p>
              <p className="title">{name}</p>
              <div className="price">
                <p
                  className={
                    isSale ? "productSalePriceOn" : "productSalePriceOff"
                  }
                >
                  {isSale
                    ? price.toLocaleString()
                    : price_sale.toLocaleString()}
                  원
                </p>
                <p className="productInfoPrice">
                  {price ? (
                    isSale ? (
                      `${price_sale.toLocaleString()}원`
                    ) : (
                      `${price.toLocaleString()}원`
                    )
                  ) : (
                    <span className="productOutofStock">일시품절</span>
                  )}
                </p>
              </div>
            </div>
          </Link>
          <div className={`hiddenBox ${isHovered ? "On" : "Off"}`}>
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
