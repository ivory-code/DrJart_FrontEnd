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

  handleMoustEnter = () => {
    this.setState({
      isHovered: true,
    });
  };

  handleMoustLeave = () => {
    this.setState({
      isHovered: false,
    });
  };

  render() {
    return (
      <>
        <div
          className="Each"
          onMouseEnter={this.handleMoustEnter}
          onMouseLeave={this.handleMoustLeave}
        >
          <div className="eachProduct">
            <Link to="/product/detail">
              <div className="imgBox">
                <img
                  alt="product"
                  className="product"
                  src="https://image.drjart.com/img/001/1589760654735.png"
                />
              </div>
              <div className="productTag">
                <span className="new">NEW</span>
                <span className="gift">GIFT</span>
                <span className="sale">SALE</span>
              </div>
              <div className="productInfo">
                <p className="productInfoMsg">#시카페어크림</p>
                <p className="productInfoTitle">2세대 시카페어 크림</p>
                <p className="productInfoPrice">48,000</p>
              </div>
            </Link>
            <div
              className={this.state.isHovered ? "hiddenBoxOn" : "hiddenBoxOff"}
            >
              <div className="box">
                <Link to="/buy">
                  <div className="buy">바로구매</div>
                </Link>
                <Link to="/cart">
                  <div className="icon cart">
                    <img alt="cart" src="./images/btn_cart.png" />
                  </div>
                </Link>
                <Link to="/wish">
                  <div className="icon wish">
                    <img alt="wish" src="./images/btn_wish.png" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Each);
