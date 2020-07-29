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
  }

  callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        entry.target.src = entry.target.dataset.src;
      }
    });
  };

  render() {
    const { isHovered } = this.state;
    const {
      name,
      main_image_url,
      flag__flag_new,
      flag__flag_gift,
      flag__flag_best,
      flag__flag_sale,
      product_detail__tag,
      product_detail__price_sale,
      product_detail__price,
      id,
    } = this.props.data;
    const isSale = product_detail__price_sale !== 0;

    return (
      <div
        className="Each"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
        key={id}
      >
        <div className="eachProduct">
          <Link
            to={{
              pathname: `/product/detail/${id}`,
              state: {
                ...this.props.data,
              },
            }}
          >
            <div className="imgBox">
              <img
                alt=""
                className="product"
                ref={this.imgRef}
                src="/images/preview.gif"
                data-src={main_image_url}
              />
            </div>
            <div className="productTag">
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
            <div className="productInfo">
              <p className="msg">{product_detail__tag}</p>
              <p className="title">{name}</p>
              <div className="price">
                <p
                  className={
                    isSale ? "productSalePriceOn" : "productSalePriceOff"
                  }
                >
                  {isSale
                    ? product_detail__price.toLocaleString()
                    : product_detail__price_sale.toLocaleString()}
                  원
                </p>
                <p className="productInfoPrice">
                  {product_detail__price ? (
                    isSale ? (
                      `${product_detail__price_sale.toLocaleString()}원`
                    ) : (
                      `${product_detail__price.toLocaleString()}원`
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
